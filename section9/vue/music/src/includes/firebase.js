import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDyvE6-S5h3rtIpRm8_zAFfZqQ0O7XVrEA",
    authDomain: "loginmusic-915c4.firebaseapp.com",
    projectId: "loginmusic-915c4",
    storageBucket: "loginmusic-915c4.appspot.com",
    // messagingSenderId: "241843020152",
    appId: "1:241843020152:web:e24202268d32fc0cb6a88d"
};
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

const userCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentCollection = db.collection('comments')


export {
    auth,
    db,
    userCollection,
    songsCollection,
    commentCollection,
    storage
}