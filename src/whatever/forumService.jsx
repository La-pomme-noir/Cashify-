import { db } from '../services/firebase';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, orderBy, limit, where, arrayUnion, arrayRemove, increment, getDoc } from 'firebase/firestore';

export const addQuestion = async (questionData) => {
  try {
    const questionRef = await addDoc(collection(db, 'questions'), {
      ...questionData,
      createdAt: new Date(),
      views: 0,
      likes: 0,
      likedBy: [],
      rating: 0,
      ratedBy: {},
    });
    return questionRef.id;
  } catch (error) {
    console.error('Error al agregar pregunta:', error);
    throw error;
  }
};

export const getLatestQuestion = async () => {
  try {
    const q = query(collection(db, 'questions'), orderBy('createdAt', 'desc'), limit(1));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return { id: doc.id, ...doc.data() };
    }
    return null;
  } catch (error) {
    console.error('Error al obtener la última pregunta:', error.message);
    throw new Error('No se pudo cargar la última pregunta: ' + error.message);
  }
};

export const getAllQuestions = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'questions'));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error al obtener todas las preguntas:', error.message);
    throw new Error('No se pudo cargar las preguntas: ' + error.message);
  }
};

export const incrementQuestionViews = async (questionId) => {
  try {
    const questionRef = doc(db, 'questions', questionId);
    await updateDoc(questionRef, {
      views: increment(1),
    });
  } catch (error) {
    console.error('Error al incrementar vistas:', error);
    throw error;
  }
};

export const toggleLike = async (questionId, userId) => {
  try {
    const questionRef = doc(db, 'questions', questionId);
    const questionDoc = await getDoc(questionRef);
    if (!questionDoc.exists()) {
      throw new Error('Pregunta no encontrada');
    }
    const questionData = questionDoc.data();
    const likedBy = questionData.likedBy || [];

    let newLikes = questionData.likes || 0;
    let newLikedBy = [...likedBy];

    if (likedBy.includes(userId)) {
      newLikes -= 1;
      newLikedBy = newLikedBy.filter((id) => id !== userId);
    } else {
      newLikes += 1;
      newLikedBy.push(userId);
    }

    await updateDoc(questionRef, {
      likes: newLikes,
      likedBy: newLikedBy,
    });

    return { likes: newLikes, likedBy: newLikedBy };
  } catch (error) {
    console.error('Error al gestionar Me gusta:', error);
    throw error;
  }
};

export const setRating = async (questionId, userId, ratingValue) => {
  try {
    const questionRef = doc(db, 'questions', questionId);
    const questionDoc = await getDoc(questionRef);
    if (!questionDoc.exists()) {
      throw new Error('Pregunta no encontrada');
    }
    const questionData = questionDoc.data();
    if (questionData.userId !== userId) {
      throw new Error('Solo el creador de la pregunta puede calificar');
    }

    const ratedBy = questionData.ratedBy || {};
    ratedBy[userId] = ratingValue;

    await updateDoc(questionRef, {
      rating: ratingValue,
      ratedBy: ratedBy,
    });

    return { rating: ratingValue, ratedBy };
  } catch (error) {
    console.error('Error al establecer calificación:', error);
    throw error;
  }
};

export const addComment = async (commentData) => {
  try {
    const commentRef = await addDoc(collection(db, 'comments'), {
      ...commentData,
      createdAt: new Date(),
    });
    return commentRef.id;
  } catch (error) {
    console.error('Error al agregar comentario:', error);
    throw error;
  }
};

export const getComments = async (questionId) => {
  try {
    const q = query(collection(db, 'comments'), where('questionId', '==', questionId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error al obtener comentarios:', error);
    throw error;
  }
};

export const deleteQuestion = async (questionId) => {
  try {
    await deleteDoc(doc(db, 'questions', questionId));
    const commentsQuery = query(collection(db, 'comments'), where('questionId', '==', questionId));
    const commentsSnapshot = await getDocs(commentsQuery);
    commentsSnapshot.forEach(async (commentDoc) => {
      await deleteDoc(doc(db, 'comments', commentDoc.id));
    });
  } catch (error) {
    console.error('Error al eliminar pregunta:', error);
    throw error;
  }
};

export const deleteComment = async (commentId) => {
  try {
    await deleteDoc(doc(db, 'comments', commentId));
  } catch (error) {
    console.error('Error al eliminar comentario:', error);
    throw error;
  }
};