import { ActionType } from '../acttion-types';
import { IUser, IEmailAndPassword } from '../../types/user';
import { ErrorMessage } from '../../types/handlers/ErrorMessage';

export interface signInSuccessAction {
    type: ActionType.SIGN_IN_SUCCESS;
    payload: IUser;
};

export interface  signInFailureAction {
    type: ActionType.SIGN_IN_FAILURE;
    payload: ErrorMessage;
};

export interface  emailSignInStartAction {
    type: ActionType.EMAIL_SIGN_IN_START,
    payload: IEmailAndPassword
};

export interface signOutStartAction {
    type: ActionType.SIGN_OUT_START
};

export interface signOutSuccessAction {
    type: ActionType.SIGN_OUT_SUCCESS
};

export interface signOutFailureAction {
    type: ActionType.SIGN_OUT_FAILURE,
    payload: ErrorMessage;
};

export interface  checkUserSessionAction {
    type: ActionType.CHECK_USER_SESSION
};

export type Action =
    | signInSuccessAction
    | signInFailureAction
    | emailSignInStartAction
    | signOutStartAction
    | signOutSuccessAction
    | signOutFailureAction
    | checkUserSessionAction;



