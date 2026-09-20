import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBEVdpH6K3gbK_YyCglHF0NaWHWaj7Nb7U",
  authDomain: "examen-programacion-comp-lar.firebaseapp.com",
  projectId: "examen-programacion-comp-lar",
  storageBucket: "examen-programacion-comp-lar.firebasestorage.app",
  messagingSenderId: "354958859824",
  appId: "1:354958859824:web:9216c394d1084ce7a497f5"
};

// Iniciar Firebase
const app = initializeApp(firebaseConfig);

// Conectar con Firestore
export const db = getFirestore(app);

// Conexion con Authentication

export const auth = getAuth(app);

// Conexion con Storage
export const storage = getStorage(app);