// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCSq2J0f6IAkjBNTXbvnQBV1TnHlC7zXLY',
	authDomain: 'pc-parts-614c2.firebaseapp.com',
	projectId: 'pc-parts-614c2',
	storageBucket: 'pc-parts-614c2.appspot.com',
	messagingSenderId: '262564102411',
	appId: '1:262564102411:web:9b54fead73938a0f1a620e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// for google signin
export const provider = new GoogleAuthProvider();
