import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAnKK_RmRbaPnB-qnMr0XvtqRvmUGroXq4',
  authDomain: 'thetypingcodesite.firebaseapp.com',
  projectId: 'thetypingcodesite',
  storageBucket: 'thetypingcodesite.appspot.com',
  messagingSenderId: '79642878326',
  appId: '1:79642878326:web:a56d970f33a563016e1a57',
};

// init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
