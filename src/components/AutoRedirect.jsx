// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const AutoRedirect = () => {
//   const { currentUser, userData, loading } = useAuth();
//   const navigate = useNavigate();
//   const [redirected, setRedirected] = useState(false); // 👉 Agregamos un estado para saber si ya redirigimos

//   useEffect(() => {
//     if (loading || redirected) return; // Si sigue cargando o ya redirigimos, no hacemos nada

//     if (currentUser && userData) {
//       if (userData.role === 'admin') {
//         navigate('/dashboard-admin');
//         setRedirected(true); // ✅ Ya redirigimos
//       } else if (userData.plan) {
//         switch (userData.plan.toLowerCase()) {
//           case 'basico':
//             navigate('/dashboard-basico');
//             setRedirected(true);
//             break;
//           case 'empresarial':
//             navigate('/dashboard-empresarial');
//             setRedirected(true);
//             break;
//           case 'corporativo':
//             navigate('/dashboard-corporativo');
//             setRedirected(true);
//             break;
//           default:
//             navigate('/news');
//             setRedirected(true);
//             break;
//         }
//       } else {
//         navigate('/news');
//         setRedirected(true);
//       }
//     }
//   }, [currentUser, userData, loading, navigate, redirected]);

//   return null;
// };

// export default AutoRedirect;
