import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB5VxN1Qrs8-rW_vwDbjjyDB_Z-8USUcuA",
  authDomain: "le-mons.firebaseapp.com",
  projectId: "le-mons",
  storageBucket: "le-mons.appspot.com",
  messagingSenderId: "168198936199",
  appId: "1:168198936199:web:77d1698e7088e5d4abca22",
  measurementId: "G-0RR77VXF8S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
