import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA1dEhiffAAw-0OKG5_bUkmPFnBe7SoAl4',
  authDomain: 'hacksoft-7fed3.firebaseapp.com',
  projectId: 'hacksoft-7fed3',
  storageBucket: 'hacksoft-7fed3.appspot.com',
  messagingSenderId: '659458577840',
  appId: '1:659458577840:web:8f167486c10ab116bb3275',
};
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
export default db;
