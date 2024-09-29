import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCZtPXXMRBHguWJ5oWKg7iHL8X8qjXBDnw",
    authDomain: "proyecto-final-react-11be4.firebaseapp.com",
    projectId: "proyecto-final-react-11be4",
    storageBucket: "proyecto-final-react-11be4.appspot.com",
    messagingSenderId: "995486334185",
    appId: "1:995486334185:web:4d62da889b8322934f0478"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)