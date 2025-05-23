import React, { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { collection, query, orderBy, onSnapshot, where, limit } from 'firebase/firestore';
import Articles from '../view/Articles';
import Tips from '../view/Tips';

const FeaturedNews = () => {
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [featuredAdvice, setFeaturedAdvice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Obtener Artículo del día
    const articleQuery = query(
      collection(db, 'news'),
      where('isFeatured', '==', true),
      where('featuredType', '==', 'articleOfTheDay'),
      orderBy('date', 'desc'),
      limit(1)
    );
    const unsubscribeArticle = onSnapshot(
      articleQuery,
      (snapshot) => {
        const article = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))[0] || null;
        setFeaturedArticle(article);
        setLoading(false);
      },
      (error) => {
        console.error('Error al obtener el artículo del día:', error);
        setError('No se pudieron cargar las noticias destacadas. Por favor, intenta de nuevo más tarde.');
        setLoading(false);
      }
    );

    // Obtener Consejo del día
    const adviceQuery = query(
      collection(db, 'news'),
      where('isFeatured', '==', true),
      where('featuredType', '==', 'adviceOfTheDay'),
      orderBy('date', 'desc'),
      limit(1)
    );
    const unsubscribeAdvice = onSnapshot(
      adviceQuery,
      (snapshot) => {
        const advice = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))[0] || null;
        setFeaturedAdvice(advice);
        setLoading(false);
      },
      (error) => {
        console.error('Error al obtener el consejo del día:', error);
        setError('No se pudieron cargar las noticias destacadas. Por favor, intenta de nuevo más tarde.');
        setLoading(false);
      }
    );

    return () => {
      unsubscribeArticle();
      unsubscribeAdvice();
    };
  }, []);

  if (loading) {
    return <div className="loading-message">Cargando noticias...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="featured-news">
      <Articles article={featuredArticle} />
      <Tips advice={featuredAdvice} />
    </div>
  );
};

export default FeaturedNews;