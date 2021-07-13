import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDiAMQkc6V_HIBvYf3Lyms-wv6VHWs-ciE",
    authDomain: "knowledgeseeker-80f17.firebaseapp.com",
    projectId: "knowledgeseeker-80f17",
    storageBucket: "knowledgeseeker-80f17.appspot.com",
    messagingSenderId: "1052596599343",
    appId: "1:1052596599343:web:27907344f38d2caa2fe4da"

};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
firebase.auth();



export const auth = firebase.auth();
export const companiesDB = db.collection('companies');
export const newsletterDB = db.collection('newsletter');
export default app;