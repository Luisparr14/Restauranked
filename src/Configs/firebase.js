// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAEjNXYslbkqlOHHzVZeM4utWPUXd0_xBA',
  authDomain: 'restauranked-b0669.firebaseapp.com',
  projectId: 'restauranked-b0669',
  storageBucket: 'restauranked-b0669.appspot.com',
  messagingSenderId: '315884884139',
  appId: '1:315884884139:web:ef5aa27b4812f0e7c8e7ee',
  measurementId: 'G-QD5LJ20R17',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
