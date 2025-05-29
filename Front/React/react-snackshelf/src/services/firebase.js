import { initializeApp } from "firebase/app";
import{ getDatabase, ref, push, set, onValue, remove, update} from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyASX_tFqq1rzskxm6EbuhktCdLI2kI843A",
  authDomain: "snackshelf-4bbc7.firebaseapp.com",
  databaseURL: "https://snackshelf-4bbc7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "snackshelf-4bbc7",
  storageBucket: "snackshelf-4bbc7.firebasestorage.app",
  messagingSenderId: "225557555905",
  appId: "1:225557555905:web:71b9294a2828b3d664c240"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

export { db, ref, push, set, onValue, remove, update}