// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbHisrpiva_796zFwUWBzvIxUF1rITz_E",
  authDomain: "eduscheduler-2c341.firebaseapp.com",
  projectId: "eduscheduler-2c341",
  storageBucket: "eduscheduler-2c341.appspot.com",
  messagingSenderId: "515897654936",
  appId: "1:515897654936:web:3b1dff3ff106a92a8cdaed",
  measurementId: "G-D4BBXJ6G9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const email = document.getElementsById('loginEmail').value;
const password = document.getElementById('loginPassword').value;
const checkbox = document.getElementById('rememberMe').value; 
const submit = document.getElementsById('loginButton').value;

const text = document.getElementsById('registerUsername').value;
const email = document.getElementsById('registerEmail').value;
const password = document.getElementById('registerPassword').value;
const checkbox = document.getElementById('termsConditions').value; 
const submit = document.getElementsById('registerButton').value;
submit.addEventListener("click",function name(event) {
    event.preventDefault()
    alert()
}