import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyACtvvOX9H4KwAN57SsQ-7YuFfuJpqg7ao",
    authDomain: "ffxv-ecommerce-react.firebaseapp.com",
    projectId: "ffxv-ecommerce-react",
    storageBucket: "ffxv-ecommerce-react.appspot.com",
    messagingSenderId: "249260013750",
    appId: "1:249260013750:web:5ae3c80c591f8b92c34e17",
    measurementId: "G-4QQFR7YGSD"
});

export const getFirebase = () => {
    return app;
}

export const getFirestore = () => {
    return firebase.firestore();
}