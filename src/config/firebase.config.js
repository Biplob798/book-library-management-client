// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAGEBqrDxCr5NNVFOB482dqFtBeXguYCA",
    authDomain: "book-library-aa263.firebaseapp.com",
    projectId: "book-library-aa263",
    storageBucket: "book-library-aa263.appspot.com",
    messagingSenderId: "830663663962",
    appId: "1:830663663962:web:ada4266dc08c8112611363"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth