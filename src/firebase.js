import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA6YCMZzn6a0rCZEJ99jpt8xqHwcSV5RNc",
    authDomain: "keep-clone-3e37c.firebaseapp.com",
    projectId: "keep-clone-3e37c",
    storageBucket: "keep-clone-3e37c.appspot.com",
    messagingSenderId: "696488515815",
    appId: "1:696488515815:web:82b5e5742d5aaf93d06a42",
    measurementId: "G-6WCKVME00J"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;