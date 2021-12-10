import { takeLatest, put, all, call } from 'redux-saga/effects';

import {
    auth,
    createUserProfileDocument,
    getCurrentUser
} from '../../utils/firebase';

import { ActionType } from '../acttion-types'
import { IUser, IEmailAndPassword } from '../../types/user';
import {
    signInSuccess,
    signInFailure,
} from '../action-creators';



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
        console.log('user', user);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
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


export function* userSagas() {
    yield all([
        call(onEmailSignInStart),
        call(onCheckUserSession),
    ]);
}