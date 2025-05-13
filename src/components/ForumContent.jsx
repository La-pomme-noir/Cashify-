import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../services/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { addQuestion, getLatestQuestion, incrementQuestionViews, addComment, getComments, toggleLike, setRating } from '../whatever/forumService';
import '../styles/style-forumContent.css';

const ForumContent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [latestQuestion, setLatestQuestion] = useState(null);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [commentContent, setCommentContent] = useState('');
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [userName, setUserName] = useState('');
  const [error, setError] = useState(null);
  const descriptionRef = useRef(null);
  const navigate = useNavigate();
  const user = auth.currentUser;

  const categories = ['Ahorro', 'Inversión', 'Deudas', 'Planificación', 'Otros'];

  useEffect(() => {
    const fetchLatestQuestion = async () => {
      try {
        const questionData = await getLatestQuestion();
        if (questionData) {
          let userName = 'Usuario';
          if (questionData.userId) {
            const userDocRef = doc(db, 'users', questionData.userId);
            const userDoc = await getDoc(userDocRef);
            userName = userDoc.exists() ? userDoc.data().username : 'Usuario';
          }
          setLatestQuestion({ ...questionData, userName });
        } else {
          setLatestQuestion(null);
        }
      } catch (error) {
        console.error('Error al cargar la última pregunta:', error);
        setError(error.message || 'Error al cargar la pregunta. Verifica tu conexión o permisos.');
      }
    };
    fetchLatestQuestion();
  }, []);

  useEffect(() => {
    const fetchUserName = async () => {
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUserName(userDoc.data().username || 'Usuario');
        }
      }
    };
    fetchUserName();
  }, [user]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && latestQuestion && !isDescriptionVisible) {
          setIsDescriptionVisible(true);
          incrementQuestionViews(latestQuestion.id);
          setLatestQuestion({ ...latestQuestion, views: (latestQuestion.views || 0) + 1 });
        }
      },
      { threshold: 0.1 }
    );

    if (descriptionRef.current) {
      observer.observe(descriptionRef.current);
    }

    return () => {
      if (descriptionRef.current) {
        observer.unobserve(descriptionRef.current);
      }
    };
  }, [latestQuestion]);

  const handleSubmitQuestion = async (e) => {
    e.preventDefault();
    if (!user) {
      alert('Debes iniciar sesión para publicar una pregunta.');
      return;
    }
    if (!title || !description || !category) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    try {
      setError(null);
      await addQuestion({
        title,
        description,
        userId: user.uid,
        userName: userName,
        category,
      });
      setTitle('');
      setDescription('');
      setCategory('');
      const updatedQuestion = await getLatestQuestion();
      if (updatedQuestion) {
        const userDocRef = doc(db, 'users', updatedQuestion.userId);
        const userDoc = await getDoc(userDocRef);
        const updatedUserName = userDoc.exists() ? userDoc.data().username : 'Usuario';
        setLatestQuestion({ ...updatedQuestion, userName: updatedUserName });
      }
    } catch (error) {
      console.error('Error al publicar pregunta:', error);
      setError('Error al publicar la pregunta. Verifica tus permisos o intenta de nuevo.');
    }
  };

  const handleToggleComments = async () => {
    if (!showComments && latestQuestion) {
      try {
        setError(null);
        const commentsData = await getComments(latestQuestion.id);
        setComments(commentsData);
      } catch (error) {
        console.error('Error al cargar comentarios:', error);
        setError('Error al cargar comentarios. Verifica tus permisos o intenta de nuevo.');
      }
    }
    setShowComments(!showComments);
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (!user) {
      alert('Debes iniciar sesión para comentar.');
      return;
    }
    if (!commentContent) {
      alert('Por favor, escribe un comentario.');
      return;
    }
    try {
      setError(null);
      await addComment({
        questionId: latestQuestion.id,
        userId: user.uid,
        userName: userName,
        content: commentContent,
      });
      setCommentContent('');
      const updatedComments = await getComments(latestQuestion.id);
      setComments(updatedComments);
    } catch (error) {
      console.error('Error al publicar comentario:', error);
      setError('Error al publicar comentario. Verifica tus permisos o intenta de nuevo.');
    }
  };

  const handleLike = async () => {
    if (!user) {
      alert('Debes iniciar sesión para dar Me gusta.');
      return;
    }
    try {
      setError(null);
      const { likes, likedBy } = await toggleLike(latestQuestion.id, user.uid);
      setLatestQuestion({ ...latestQuestion, likes, likedBy });
    } catch (error) {
      console.error('Error al dar Me gusta:', error);
      setError('Error al dar Me gusta. Verifica tus permisos o intenta de nuevo.');
    }
  };

  const handleRating = async (ratingValue) => {
    if (!user || latestQuestion.userId !== user.uid) {
      alert('Solo el creador de la pregunta puede calificar.');
      return;
    }
    try {
      setError(null);
      const { rating, ratedBy } = await setRating(latestQuestion.id, user.uid, ratingValue);
      setLatestQuestion({ ...latestQuestion, rating, ratedBy });
    } catch (error) {
      console.error('Error al calificar:', error);
      setError('Error al calificar. Verifica tus permisos o intenta de nuevo.');
    }
  };

  return (
    <section id="foro" className="mb-5 contenedor__foro shadow-cards">
      <h2 className="titles-sections">Foro Financiero</h2>
      <span className="scrollspy__span">Aquí puedes opinar y ver temas de otros usuarios.</span>
      {error && <p className="error-message">{error}</p>}
      <div className="foro__question shadow-cards">
        <div className="foro__comment">
          <span className="scrollspy__span">Haz una pregunta o selecciona entre las preguntas recientes.</span>
          <div className="foro__icon">
            <i className="fa-solid fa-question"></i>
          </div>
          <hr className="foro__hr" />
          {user ? (
            <form onSubmit={handleSubmitQuestion}>
              <select
                className="foro__txt foro__select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Selecciona una categoría</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <input
                type="text"
                className="foro__txt foro__input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Título de tu pregunta"
                required
              />
              <textarea
                className="foro__txt"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe tu pregunta en detalle"
                required
              ></textarea>
              <button type="submit" className="foro__button">
                Publicar <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          ) : (
            <p>Por favor, inicia sesión para publicar y ver preguntas.</p>
          )}
        </div>
        <div className="foro__cards">
          <span className="scrollspy__span">Preguntas Recientes</span>
          <p className="cards-foro__parrafo">Preguntas Financieras Recientes</p>
          {latestQuestion && (
            <div className="foro__trending shadow-cards">
              <h3 className="cards-foro__title">{latestQuestion.title}</h3>
              <p className="cards-foro__content" ref={descriptionRef}>
                {latestQuestion.description}
              </p>
              <span className="cards-foro__span">
                {latestQuestion.userName} <i className="fa-solid fa-circle-user"></i>
              </span>
              <span className="cards-foro__span">Categoría: {latestQuestion.category}</span>
              <span className="cards-foro__span">
                {latestQuestion.createdAt?.toDate().toLocaleString()}
              </span>
              <p className="cards-foro__parrafo--rta">
                Respuestas: {comments.length} <i className="fa-solid fa-eye"></i> Vistas: {latestQuestion.views || 0}
              </p>
              <p className="cards-foro__parrafo--rta">
                <span className="like__button" onClick={handleLike}>
                  <i className={`fa-heart ${latestQuestion.likedBy?.includes(user?.uid) ? 'fa-solid liked' : 'fa-regular'}`}></i> Me gusta: {latestQuestion.likes || 0}
                </span>
              </p>
              <p className="cards-foro__parrafo--rta">
                <span className="rating__container">
                  Calificación Respuestas: {latestQuestion.rating || 0}
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i
                      key={star}
                      className={`fa-star ${star <= (latestQuestion.rating || 0) ? 'fa-solid rated' : 'fa-regular'}`}
                      onClick={() => handleRating(star)}
                    ></i>
                  ))}
                </span>
              </p>
              <button className="foro__button" onClick={handleToggleComments}>
                Comentar <i className="fa-solid fa-comment"></i>
              </button>
              {showComments && (
                <div className="comments__list">
                  {comments.map((comment) => (
                    <div key={comment.id} className="comment__item">
                      <span>
                        {comment.userName} <i className="fa-solid fa-circle-user"></i>: {comment.content}
                      </span>
                      <span>{comment.createdAt?.toDate().toLocaleString()}</span>
                    </div>
                  ))}
                  {user && (
                    <form onSubmit={handleSubmitComment}>
                      <textarea
                        className="foro__txt"
                        value={commentContent}
                        onChange={(e) => setCommentContent(e.target.value)}
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
          )}
          <button
            className="foro__button"
            onClick={() => navigate('/all-questions')}
          >
            Ver todas las preguntas
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForumContent;