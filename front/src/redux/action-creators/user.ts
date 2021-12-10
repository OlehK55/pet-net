import { ActionType } from '../acttion-types';
import {
    signInSuccessAction,
    signInFailureAction,
    emailSignInStartAction,
    signOutStartAction,
    signOutSuccessAction,
    signOutFailureAction,
    checkUserSessionAction
} from '../actions';
import { IUser, IEmailAndPassword } from '../../types/user';
import { ErrorMessage } from '../../types/handlers/ErrorMessage';


export const signInSuccess = (user: IUser):signInSuccessAction => ({
    type: ActionType.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = (error: ErrorMessage):signInFailureAction => ({
    type: ActionType.SIGN_IN_FAILURE,
    payload: error
});

export const emailSignInStart = (emailAndPassword: IEmailAndPassword):emailSignInStartAction => ({
    type: ActionType.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const signOutStart = (): signOutStartAction => ({
    type: ActionType.SIGN_OUT_START
});

export const signOutSuccess = (): signOutSuccessAction => ({
    type: ActionType.SIGN_OUT_SUCCESS
});

export const signOutFailure = (error: ErrorMessage): signOutFailureAction => ({
    type: ActionType.SIGN_OUT_FAILURE,
    payload: error
});

export const checkUserSession = ():checkUserSessionAction => ({
    type: ActionType.CHECK_USER_SESSION
});



