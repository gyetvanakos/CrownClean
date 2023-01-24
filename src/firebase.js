import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6QEMPINgE9IVvUB8XD9XNeFQjTGnXwGQ",
  authDomain: "crownclean-41562.firebaseapp.com",
  projectId: "crownclean-41562",
  storageBucket: "crownclean-41562.appspot.com",
  messagingSenderId: "261562951385",
  appId: "1:261562951385:web:5b6547ed93c3264b1e40c8",
  measurementId: "G-KHPQWEG18X"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);