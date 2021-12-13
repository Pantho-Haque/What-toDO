import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDofeL4miTK_AU2-Lx7ZsqbQJqGxT9-3Z8",
    authDomain: "todo-75.firebaseapp.com",
    databaseURL: "https://todo-75-default-rtdb.firebaseio.com",
    projectId: "todo-75",
    storageBucket: "todo-75.appspot.com",
    messagingSenderId: "304289147701",
    appId: "1:304289147701:web:4f0aaeae3f60a49e60ba7c"
  };
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth=getAuth();
export {app, db,auth};