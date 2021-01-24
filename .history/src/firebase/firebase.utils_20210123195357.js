import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD1k1q89XmaeFqXRnuUJBNW1JjCM-VpdSo",
  authDomain: "crwn-db-bb33a.firebaseapp.com",
  projectId: "crwn-db-bb33a",
  storageBucket: "crwn-db-bb33a.appspot.com",
  messagingSenderId: "113505591749",
  appId: "1:113505591749:web:484bf399b02a7fa425abac"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(firestore.doc('users/1241535s5g'));

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;