import { FirebaseOptions, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config: FirebaseOptions = {
  projectId: process.env.FIREBASE_PROJECT_ID,
};

const firebase = initializeApp(config);
const database = getFirestore(firebase);

export default database;
