import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Import authentication
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCweTeHn68BF33vd2f8cZ-ZdlvIdpFHyDU",
  authDomain: "event-vista-b265a.firebaseapp.com",
  projectId: "event-vista-b265a",
  storageBucket: "event-vista-b265a.appspot.com", // Fixed incorrect URL
  messagingSenderId: "1034478785221",
  appId: "1:1034478785221:web:ea8a7e51c6997375ac56ac",
  measurementId: "G-DKCW1YF3DX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);  // Export authentication instance

export { app, analytics };
