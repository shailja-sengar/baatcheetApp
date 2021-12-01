import firebase from "firebase/app";
import "firebase/auth";

export const auth =  firebase.initializeApp({
    apiKey: "AIzaSyDfe4Kuj8YtnKXIB-XPcmBha3st7ZGHHXM",
    authDomain: "baatcheet-f4595.firebaseapp.com",
    projectId: "baatcheet-f4595",
    storageBucket: "baatcheet-f4595.appspot.com",
    messagingSenderId: "608952254584",
    appId: "1:608952254584:web:269b8b16f444171267ad8d"
  }).auth();