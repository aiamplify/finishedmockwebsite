import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD0QVgqqoM4MLeM9Kqj2MOtQR_QKi-Pz7k",
  authDomain: "database-d3be3.firebaseapp.com",
  projectId: "database-d3be3",
  storageBucket: "database-d3be3.firebasestorage.app",
  messagingSenderId: "8965587185",
  appId: "1:8965587185:web:09aec1c593e1cdef68a950"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log('User is signed in:', user);
  } else {
    console.log('No user is signed in.');
  }
}, (error) => {
  console.error('Auth state change error:', error);
});