import { createStore, combineReducers, compose } from "redux";
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firestore'
import { reduxFirestore, firestoreReducer } from 'redux-firestore'
import 'firebae/firestore'
import { firebase, reduxFirebase } from "react-redux-firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB_wt6X53qF6tEbG9lzWTZugXaEwJPDPJU",
    authDomain: "monitoref-67022.firebaseapp.com",
    databaseURL: "https://monitoref-67022.firebaseio.com",
    projectId: "monitoref-67022",
    storageBucket: "monitoref-67022.appspot.com",
    messagingSenderId: "528687573697",
    appId: "1:528687573697:web:be41be752ef231d43bc240",
    measurementId: "G-39RZ655KDD"
}

firebase.initializeApp(firebaseConfig)

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
}

const createStoreWithFirebase = compose(
    reduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore)

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

const initialState = {}

