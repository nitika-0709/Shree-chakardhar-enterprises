// Firebase SDKs
importScripts = undefined; // safety for browsers

// Load Firebase from CDN
(function () {
  const appScript = document.createElement("script");
  appScript.src = "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js";
  document.head.appendChild(appScript);

  appScript.onload = () => {
    const fsScript = document.createElement("script");
    fsScript.src = "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js";
    document.head.appendChild(fsScript);

    fsScript.onload = () => {
      const firebaseConfig = {
        apiKey: "AIzaSyAceQf7DxVI9d_-HnVchw4tmiBCSy2P3NI",
        authDomain: "shree-chakrdhar-booking-ed24a.firebaseapp.com",
        projectId: "shree-chakrdhar-booking-ed24a",
        storageBucket: "shree-chakrdhar-booking-ed24a.firebasestorage.app",
        messagingSenderId: "12806299260",
        appId: "1:12806299260:web:eeacbd29ba01bcd216f3f9"
      };

      firebase.initializeApp(firebaseConfig);
      window.db = firebase.firestore();
      console.log("Firebase initialized, db ready");
    };
  };
})();
