// src/firebase/firebase.ts
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  RecaptchaVerifier,
  signInWithPhoneNumber 
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBfoK3hamuO7cBSV_f3YqvsFP3fhAYzm7U",
  authDomain: "promatch-64bf9.firebaseapp.com",
  projectId: "promatch-64bf9",
  storageBucket: "promatch-64bf9.appspot.com",
  messagingSenderId: "720815503285",
  appId: "1:720815503285:web:b35f6c76b082ded8bacbfc",
  measurementId: "G-FZKVNCE3QP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
let analytics;
let recaptchaVerifier: RecaptchaVerifier;

if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
  
  // Configuración segura de reCAPTCHA
  try {
    recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
      callback: (response: string) => {
        console.log("reCAPTCHA resuelto:", response);
      },
      'expired-callback': () => {
        console.log("reCAPTCHA expirado - recargar necesario");
      }
    }, auth);
  } catch (error) {
    console.error("Error al inicializar reCAPTCHA:", error);
  }
}

export { 
  auth, 
  db, 
  analytics,
  recaptchaVerifier,
  signInWithPhoneNumber 
};