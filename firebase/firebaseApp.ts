import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAC1QmfmjjOEF_f9F8XwWYXKtEh6WH9AJk",
  authDomain: "doutor-cdf-19551.firebaseapp.com",
  projectId: "doutor-cdf-19551",
  storageBucket: "doutor-cdf-19551.appspot.com",
  messagingSenderId: "322731436454",
  appId: "1:322731436454:web:b87e62872c8bc2249d4767",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// export function to initialize firebase
export const initFirebase = () => {
    return app;
}
