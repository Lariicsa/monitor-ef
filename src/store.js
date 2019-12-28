import { createStore, combineReducers, compose } from "redux";
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import { reduxFirestore, firestoreReducer } from 'redux-firestore'
import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyB_wt6X53qF6tEbG9lzWTZugXaEwJPDPJU",
    authDomain: "monitoref-67022.firebaseapp.com",
    databaseURL: "https://monitoref-67022.firebaseio.com",
    projectId: "monitoref-67022",
    storageBucket: "monitoref-67022.appspot.com",
    messagingSenderId: "528687573697",
}

firebase.initializeApp(firebaseConfig)

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
}

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore)

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

const initialState = {}

const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase)
))

export default store