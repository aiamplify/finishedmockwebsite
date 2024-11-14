import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const saveContactForm = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...formData,
      createdAt: new Date().toISOString()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error saving contact form:', error);
    throw error;
  }
};