import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCSMH1917_vD6ZH6rID60HeCly70AAfEAw",
  authDomain: "tiendanuco-b59f0.firebaseapp.com",
  projectId: "tiendanuco-b59f0",
  storageBucket: "tiendanuco-b59f0.appspot.com",
  messagingSenderId: "269738592398",
  appId: "1:269738592398:web:a488b9fdc01a907faba1df"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}