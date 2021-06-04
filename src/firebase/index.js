import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyACtvvOX9H4KwAN57SsQ-7YuFfuJpqg7ao",
    authDomain: "ffxv-ecommerce-react.firebaseapp.com",
    projectId: "ffxv-ecommerce-react",
    storageBucket: "ffxv-ecommerce-react.appspot.com",
    messagingSenderId: "249260013750",
    appId: "1:249260013750:web:5ae3c80c591f8b92c34e17",
    measurementId: "G-4QQFR7YGSD"
  };

  const app = firebase.initializeApp(firebaseConfig);


export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}