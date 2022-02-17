import { ActionType } from '../acttion-types';
import { UserAction } from '../actions';

const INITIAL_STATE = {
    currentUser: null,
    error: null,
    usersList: {}
};

const userReducer = (state = INITIAL_STATE, action: UserAction) => {
    switch (action.type) {
        case ActionType.FETCH_USERS_LIST_SUCCESS:
            return {
                ...state,
                usersList: action.payload,
                error: null
            };
        case ActionType.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            };
        case ActionType.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            };
        case ActionType.SIGN_IN_FAILURE:
        case ActionType.SIGN_OUT_FAILURE:
        case ActionType.SIGN_UP_FAILURE:
        case ActionType.FETCH_USERS_LIST_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;