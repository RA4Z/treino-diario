import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlr3Tu-zwJ7hTfbkZzaoC5qHkLcTWgDWk",
    authDomain: "treino-diario-cf69e.firebaseapp.com",
    projectId: "treino-diario-cf69e",
    storageBucket: "treino-diario-cf69e.appspot.com",
    messagingSenderId: "826667629917",
    appId: "1:826667629917:web:78f4fe660ecf9e828fbcb4"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app)

export { db, storage };