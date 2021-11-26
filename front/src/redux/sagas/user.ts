import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from '../../types/user'

import {
    signInSuccess,
    signInFailure,
} from '../actions';

import {
    auth,
    createUserProfileDocument,
    getCurrentUser
} from '../../utils/firebase';

export function* getSnapshotFromUserAuth(userAuth: any, additionalData?: any) {
    try {
        const userRef = yield call(
            createUserProfileDocument,
            userAuth,
            additionalData
        );
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

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* onEmailSignInStart() {
    // @ts-ignore
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}


export function* userSagas() {
    yield all([
        call(onEmailSignInStart),
        call(onCheckUserSession),
    ]);
}