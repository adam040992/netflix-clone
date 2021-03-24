import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA5wyNxYZOg6HHTuiKEhg23LrIQAD6w-zE",
    authDomain: "netflix-clone-4c0e0.firebaseapp.com",
    projectId: "netflix-clone-4c0e0",
    storageBucket: "netflix-clone-4c0e0.appspot.com",
    messagingSenderId: "900964338786",
    appId: "1:900964338786:web:f361f44da311ba757cd53b"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;