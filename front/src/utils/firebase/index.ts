import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth: { uid?: any; displayName?: any; email?: any; }, additionalData: any) => {
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
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};



export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((userAuth:any) => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};

// @ts-ignore
export const auth = firebase.auth();
// @ts-ignore
export const firestore = firebase.firestore();

export default firebase;