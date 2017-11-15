import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAEggDZlKI8w67e_cPG7hFAVKAjvvY9Fqk",
  authDomain: "cerveceriaallende-56478.firebaseapp.com",
  databaseURL: "https://cerveceriaallende-56478.firebaseio.com",
  projectId: "cerveceriaallende-56478",
  storageBucket: "cerveceriaallende-56478.appspot.com",
  messagingSenderId: "443694211752"
};
firebase.initializeApp(config);
export const firebaseAuth = firebase.auth();
export default firebase;
