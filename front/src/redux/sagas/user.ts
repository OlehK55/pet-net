import { takeLatest, put, all, call } from 'redux-saga/effects';

import {
    auth,
    createUserProfileDocument, firestore,
    getCurrentUser
} from '../../utils/firebase';

import { ActionType } from '../acttion-types'
import { IUser } from '../../types/user';
import {
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
    signUpSuccess,
    signUpFailure, fetchUsersListSuccess, fetchUsersListFailure
} from '../action-creators';

export function* fetchUsersListAsync() {
    try {
        const newsCollectionRef = firestore.collection('users');
        // @ts-ignore
        const snapshot = yield newsCollectionRef.get();
        const usersList = {};
        // @ts-ignore
        snapshot.docs.map(doc => {
            const data =  doc.data();
            // @ts-ignore
            usersList[doc.id] = { ...data, uid: doc.id}
        });

        yield put(fetchUsersListSuccess(usersList));
    } catch (error) {
        yield put(fetchUsersListFailure(error));
    }
}

export function* getSnapshotFromUserAuth(userAuth: IUser, additionalData?: any) {
    try {
        // @ts-ignore
        const userRef = yield call(
            createUserProfileDocument,
            userAuth,
            additionalData
        );

        // @ts-ignore
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
        yield put(signInFailure(error));
    }
}


// @ts-ignore
export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signOut() {
    try {
        // @ts-ignore
        const x = yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
}

// @ts-ignore
export function* signUp({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({ user, additionalData: { displayName } }));
    } catch (error) {
        yield put(signUpFailure(error));
    }
}

// @ts-ignore
export function* signInAfterSignUp({ payload: { user, additionalData } }) {
    yield getSnapshotFromUserAuth(user, additionalData);
}

export function* isUserAuthenticated() {
    try {
        // @ts-ignore
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* onEmailSignInStart() {
    // @ts-ignore
    yield takeLatest(ActionType.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
    yield takeLatest(ActionType.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
    yield takeLatest(ActionType.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
    // @ts-ignore
    yield takeLatest(ActionType.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
    // @ts-ignore
    yield takeLatest(ActionType.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onFetchUsersListStart() {
    // @ts-ignore
    yield takeLatest(ActionType.FETCH_USERS_LIST_START, fetchUsersListAsync);
}

export function* userSagas() {
    yield all([
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onFetchUsersListStart)
    ]);
}