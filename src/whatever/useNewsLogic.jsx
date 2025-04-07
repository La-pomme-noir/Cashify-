import { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';

export const useNewsLogic = (category) => {
  const [news, setNews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    const q = query(
      collection(db, 'news'),
      where('category', '==', category),
      orderBy('date', 'desc')
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setNews(newsData);
    });

    return () => unsubscribe();
  }, [category]);

  const openModal = (newsItem) => {
    setSelectedNews(newsItem);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNews(null);
  };

  return { news, isModalOpen, selectedNews, openModal, closeModal };
};