import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoPAO0dupth8mzz-Yhg8Sdb3XqXrDGRjI",
  authDomain: "twitter-clone-44aa9.firebaseapp.com",
  projectId: "twitter-clone-44aa9",
  storageBucket: "twitter-clone-44aa9.appspot.com",
  messagingSenderId: "60461563863",
  appId: "1:60461563863:web:57d318f280956b23615592"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;