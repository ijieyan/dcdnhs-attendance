import {
    getAuth,
    createUserWithEmainAndPassword,
 } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js"

c// Initialize Firebase with your config
const firebaseConfig = {
    apiKey: "AIzaSyCX9sRfQPJfun3BHcA7YyqbVZIvBvcIvrc",
    authDomain: "student-id-2e836.firebaseapp.com",
    projectId: "student-id-2e836",
    storageBucket: "student-id-2e836.firebasestorage.app",
    messagingSenderId: "657240475012",
    appId: "1:657240475012:web:9bc4aa94ca9d31f33849d1"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Toggle between login and signup forms
function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}

// Sign Up functionality
document.getElementById('signup-form-action').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Account created successfully');
            toggleForms(); // Redirect to login form
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Login functionality
document.getElementById('login-form-action').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Login successful');
            window.location.href = 'dashboard.html'; // Redirect to dashboard
        })
        .catch((error) => {
            alert(error.message);
        });
});
