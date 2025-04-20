import { db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';
import { getAuth, fetchSignInMethodsForEmail } from 'firebase/auth';

export const saveUserData = async (uid, username, email, role) => {
  try {
    await setDoc(doc(db, 'users', uid), {
      username,
      email,
      role,
      createdAt: new Date(),
    });
    console.log('Usuario guardado en Firestore con éxito');
  } catch (error) {
    console.error('Error al guardar usuario:', error.message);
    throw error;
  }
};

export const isEmailRegistered = async (email) => {
  const auth = getAuth();
  try {
    const signInMethods = await fetchSignInMethodsForEmail(auth, email);
    return signInMethods.length > 0; // Retorna true si el correo ya está registrado
  } catch (error) {
    console.error('Error al verificar correo:', error.message);
    return false; // En caso de error, asumimos que no está registrado
  }
};

export const determineRole = (email) => {
  const domain = email.split('@')[1]?.toLowerCase();
  if (domain === 'cashify.lat') return 'administrador';
  if (domain === 'oradorcashify.lat') return 'orador';
  return 'usuario';
};