import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyBfuJ8n4e4NKHSZs0s6INUtIoRw-DfafTA",
    authDomain: "crown-clothing-6180d.firebaseapp.com",
    projectId: "crown-clothing-6180d",
    storageBucket: "crown-clothing-6180d.appspot.com",
    messagingSenderId: "1057289900961",
    appId: "1:1057289900961:web:c653a6a36196cb984df1e0",
    measurementId: "G-VJDJKFJKK0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;