// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAceQf7DxVI9d_-HnVchw4tmiBCSy2P3NI",
  authDomain: "shree-chakrdhar-booking-ed24a.firebaseapp.com",
  projectId: "shree-chakrdhar-booking-ed24a",
  storageBucket: "shree-chakrdhar-booking-ed24a.firebasestorage.app",
  messagingSenderId: "12806299260",
  appId: "1:12806299260:web:eeacbd29ba01bcd216f3f9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Make db global
window.db = firebase.firestore();

console.log("Firebase initialized, db ready");
