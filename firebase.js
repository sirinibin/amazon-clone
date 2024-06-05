import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB0sh07ZHpgM1LFy6a1CH5gM6JEYsPX-RA",
    authDomain: "clone-5e424.firebaseapp.com",
    projectId: "clone-5e424",
    storageBucket: "clone-5e424.appspot.com",
    messagingSenderId: "1077210136549",
    appId: "1:1077210136549:web:00b7e9281fb1c765c2790c"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db =  app.firestore();

export default db;