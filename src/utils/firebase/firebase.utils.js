import { initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB42YJsfJeb3NNNIZdAqCsgoL24O0eYjyo",
    authDomain: "sihkidzap.firebaseapp.com",
    projectId: "sihkidzap",
    storageBucket: "sihkidzap.appspot.com",
    messagingSenderId: "126975894146",
    appId: "1:126975894146:web:f549acb805a035dc268a9b"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:"select_account"
  })

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);