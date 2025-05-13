import React, { useState, useEffect } from 'react';
import { auth, db } from '../services/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { getAllQuestions, getComments, toggleLike, setRating } from '../whatever/forumService';
import '../styles/style-forumContent.css';

const AllQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [showComments, setShowComments] = useState({});
  const [comments, setComments] = useState({});
  const [error, setError] = useState(null);
  const user = auth.currentUser;

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const questionsData = await getAllQuestions();
        const updatedQuestions = await Promise.all(
          questionsData.map(async (question) => {
            let userName = 'Usuario';
            if (question.userId) {
              const userDocRef = doc(db, 'users', question.userId);
              const userDoc = await getDoc(userDocRef);
              userName = userDoc.exists() ? userDoc.data().username : 'Usuario';
            }
            return { ...question, userName };
          })
        );
        setQuestions(updatedQuestions);
      } catch (error) {
        console.error('Error al cargar preguntas:', error);
        setError(error.message || 'Error al cargar las preguntas. Verifica tu conexión o permisos.');
      }
    };
    fetchQuestions();
  }, []);

  const handleToggleComments = async (questionId) => {
    if (!showComments[questionId]) {
      try {
        setError(null);
        const commentsData = await getComments(questionId);
        setComments((prev) => ({ ...prev, [questionId]: commentsData }));
      } catch (error) {
        console.error('Error al cargar comentarios:', error);
        setError('Error al cargar comentarios. Verifica tus permisos o intenta de nuevo.');
      }
    }
    setShowComments((prev) => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const handleSubmitComment = async (e, questionId) => {
    e.preventDefault();
    if (!user) {
      alert('Debes iniciar sesión para comentar.');
      return;
    }
    const commentContent = e.target.querySelector('textarea').value;
    if (!commentContent) {
      alert('Por favor, escribe un comentario.');
      return;
    }
    try {
      setError(null);
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      const userName = userDoc.exists() ? userDoc.data().username : 'Usuario';
      await addComment({
        questionId,
        userId: user.uid,
        userName,
        content: commentContent,
      });
      const updatedComments = await getComments(questionId);
      setComments((prev) => ({ ...prev, [questionId]: updatedComments }));
      e.target.querySelector('textarea').value = '';
    } catch (error) {
      console.error('Error al publicar comentario:', error);
      setError('Error al publicar comentario. Verifica tus permisos o intenta de nuevo.');
    }
  };

  const handleLike = async (questionId) => {
    if (!user) {
      alert('Debes iniciar sesión para dar Me gusta.');
      return;
    }
    try {
      setError(null);
      const { likes, likedBy } = await toggleLike(questionId, user.uid);
      setQuestions((prevQuestions) =>
        prevQuestions.map((q) =>
          q.id === questionId ? { ...q, likes, likedBy } : q
        )
      );
    } catch (error) {
      console.error('Error al dar Me gusta:', error);
      setError('Error al dar Me gusta. Verifica tus permisos o intenta de nuevo.');
    }
  };

  const handleRating = async (questionId, ratingValue) => {
    const question = questions.find(q => q.id === questionId);
    if (!user || question.userId !== user.uid) {
      alert('Solo el creador de la pregunta puede calificar.');
      return;
    }
    try {
      setError(null);
      const { rating, ratedBy } = await setRating(questionId, user.uid, ratingValue);
      setQuestions((prevQuestions) =>
        prevQuestions.map((q) =>
          q.id === questionId ? { ...q, rating, ratedBy } : q
        )
      );
    } catch (error) {
      console.error('Error al calificar:', error);
      setError('Error al calificar. Verifica tus permisos o intenta de nuevo.');
    }
  };

  return (
    <section id="all-questions" className="mb-5 contenedor__foro shadow-cards">
      <h2 className="titles-sections">Todas las Preguntas</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="foro__cards">
        {questions.map((question) => (
          <div key={question.id} className="foro__trending shadow-cards">
            <h3 className="cards-foro__title">{question.title}</h3>
            <p className="cards-foro__content">{question.description}</p>
            <span className="cards-foro__span">
              {question.userName} <i className="fa-solid fa-circle-user"></i>
            </span>
            <span className="cards-foro__span">Categoría: {question.category}</span>
            <span className="cards-foro__span">
              {question.createdAt?.toDate().toLocaleString()}
            </span>
            <p className="cards-foro__parrafo--rta">
              Vistas: {question.views || 0}
            </p>
            <p className="cards-foro__parrafo--rta">
              <span className="like__button" onClick={() => handleLike(question.id)}>
                <i className={`fa-heart ${question.likedBy?.includes(user?.uid) ? 'fa-solid liked' : 'fa-regular'}`}></i> Me gusta: {question.likes || 0}
              </span>
            </p>
            <p className="cards-foro__parrafo--rta">
              <span className="rating__container">
                Calificación Respuestas: {question.rating || 0}
                {[1, 2, 3, 4, 5].map((star) => (
                  <i
                    key={star}
                    className={`fa-star ${star <= (question.rating || 0) ? 'fa-solid rated' : 'fa-regular'}`}
                    onClick={() => handleRating(question.id, star)}
                  ></i>
                ))}
              </span>
            </p>
            <button className="foro__button" onClick={() => handleToggleComments(question.id)}>
              Ver comentarios <i className="fa-solid fa-comment"></i>
            </button>
            {showComments[question.id] && (
              <div className="comments__list">
                {comments[question.id]?.map((comment) => (
                  <div key={comment.id} className="comment__item">
                    <span>
                      {comment.userName} <i className="fa-solid fa-circle-user"></i>: {comment.content}
                    </span>
                    <span>{comment.createdAt?.toDate().toLocaleString()}</span>
                  </div>
                ))}
                {user && (
                  <form onSubmit={(e) => handleSubmitComment(e, question.id)}>
                    <textarea
                      className="foro__txt"
                      placeholder="Escribe tu comentario..."
                    ></textarea>
                    <button type="submit" className="foro__button">
                      Enviar Comentario <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllQuestions;