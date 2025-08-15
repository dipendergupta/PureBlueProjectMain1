// firebase.js
// Add your Firebase config here and export the initialized app and services

// Import the Firebase scripts for browser usage
// (for module-based projects, use import statements instead)

// Firebase v9 compat CDN usage for HTML projects
// <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>

// This file is for reference. For HTML projects, include the following in your HTML files:
// <script src="firebase.js"></script>

(function(window) {
  // TODO: Replace with your Firebase project config
 const firebaseConfig = {
    apiKey: "AIzaSyCXA8Zfjg-gWdrbOqYujnBGaG90jNqwH-E",
    authDomain: "purebluewebapp.firebaseapp.com",
    projectId: "purebluewebapp",
    storageBucket: "purebluewebapp.appspot.com", // <- recommended format
    messagingSenderId: "914106346567",
    appId: "1:914106346567:web:6e07d475641a58385b9562",
    measurementId: "G-0WY0QKV75G"
  };



  // Initialize Firebase only once
  if (!window.firebase || !window.firebase.apps || !window.firebase.apps.length) {
    window.firebase.initializeApp(firebaseConfig);
  }
  // Export Firestore instance
  window.db = window.firebase.firestore();
})(window);
