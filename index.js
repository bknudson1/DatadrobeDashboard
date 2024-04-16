// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
//import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA9NaJh_qTWYwsVbnI5mSACZVRcSpWsio",
  authDomain: "datadrobe.firebaseapp.com",
  projectId: "datadrobe",
  storageBucket: "datadrobe.appspot.com",
  messagingSenderId: "549234977701",
  appId: "1:549234977701:web:4b834d5ba6a1197436164c",
  measurementId: "G-QPMFKN4Q0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseConfig);
const db = getFirestore(firebaseConfig);


/*
From index.html file
// Getting reference to database
var database = firebase.database();

var dataRef1 = database.ref('control')

// Fetch data
dataRef1.on('value', function(getdata1){
	var cont = getdata1.val();
	document.getElementById('control').innerHTML = cont;
}) 
*/ 
	
