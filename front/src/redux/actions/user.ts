import { ActionType } from '../acttion-types';
import {IUser, IEmailAndPassword, IUserCredentials} from '../../types/user';
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
    type: ActionType.EMAIL_SIGN_IN_START;
    payload: IEmailAndPassword;
};

export interface  signUpStartAction {
    type: ActionType.SIGN_UP_START;
    payload: IUserCredentials;
};

export interface signUpSuccessAction {
    type: ActionType.SIGN_UP_SUCCESS;
    payload: { user: IUser, additionalData: any };
};

export interface signUpFailureAction {
    type: ActionType.SIGN_UP_FAILURE;
    payload: ErrorMessage;
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
    | signUpStartAction
    | signUpSuccessAction
    | signUpFailureAction
    | signOutStartAction
    | signOutSuccessAction
    | signOutFailureAction
    | checkUserSessionAction;



