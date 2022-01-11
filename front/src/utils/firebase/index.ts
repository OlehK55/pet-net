import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { IUser, IEmailAndPassword } from '../../types/user';

const config = {
    apiKey: process.env.REACT_APP_FB_API_KEY,
    authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FB_DB_URL,
    projectId: process.env.REACT_APP_FB_PROJ_ID,
    storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FB_APP_ID
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth: IUser , additionalData: any) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            // @ts-ignore
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};



export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;