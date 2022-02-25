import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

class FirebaseAuthBackend {
  constructor(firebaseConfig) {
    if (firebaseConfig) {
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      this.googleProvider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          localStorage.setItem("authUser", JSON.stringify(user));
        } else {
          localStorage.removeItem("authUser");
        }
      });
    }
  }

  signInWithCustomToken = (accessToken) => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithCustomToken(accessToken)
        .then((user) => resolve(firebase.auth().currentUser))
        .catch((err) => console.log(err));
    });
  };
}

let _fireBaseBackend = null;

const initFirebaseBackend = (config) => {
  if (!_fireBaseBackend) {
    _fireBaseBackend = new FirebaseAuthBackend(config);
  }
  return _fireBaseBackend;
};

const getFirebaseBackend = () => {
  return _fireBaseBackend;
};

export { initFirebaseBackend, getFirebaseBackend };
