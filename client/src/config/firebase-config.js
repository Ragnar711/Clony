// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB5x0-1YDBpy8Qh7D9BlA_AOuoxchM2gfM",
    authDomain: "clony-6c20f.firebaseapp.com",
    projectId: "clony-6c20f",
    storageBucket: "clony-6c20f.appspot.com",
    messagingSenderId: "573815860123",
    appId: "1:573815860123:web:1f4208d542e21ae23b0f3e",
    measurementId: "G-434MF5SWHD",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
