import { ActionType } from '../acttion-types';
import {
    fetchUsersListStartAction,
    fetchUsersListSuccessAction,
    fetchUsersListFailureAction,
    signInSuccessAction,
    signInFailureAction,
    emailSignInStartAction,
    signOutStartAction,
    signOutSuccessAction,
    signOutFailureAction,
    checkUserSessionAction,
    signUpStartAction,
    signUpFailureAction,
    signUpSuccessAction, fetchNewsListStartAction, fetchNewsListSuccessAction, fetchNewsListFailureAction
} from '../actions';
import { IUser, IEmailAndPassword, IUserCredentials } from '../../types/user';
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

export const signUpStart = (userCredentials: IUserCredentials): signUpStartAction  => ({
    type: ActionType.SIGN_UP_START,
    payload: userCredentials
});

export const signUpSuccess = ({ user, additionalData }: { user: IUser, additionalData: any }):signUpSuccessAction => ({
    type: ActionType.SIGN_UP_SUCCESS,
    payload: { user, additionalData }
});

export const signUpFailure = (error: ErrorMessage): signUpFailureAction => ({
    type: ActionType.SIGN_UP_FAILURE,
    payload: error
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

export const fetchUsersListStart = ():fetchUsersListStartAction => ({
    type: ActionType.FETCH_USERS_LIST_START,
});

export const fetchUsersListSuccess = (usersList: {[key: string]: IUser}):fetchUsersListSuccessAction => ({
    type: ActionType.FETCH_USERS_LIST_SUCCESS,
    payload: usersList
});

export const fetchUsersListFailure = (error: ErrorMessage):fetchUsersListFailureAction => ({
    type: ActionType.FETCH_USERS_LIST_FAILURE,
    payload: error
});



