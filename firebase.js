<!-- Firebase SDKs -->
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>

<script>
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

  // 🔥 THIS LINE FIXES EVERYTHING
  window.db = firebase.firestore();
</script>
