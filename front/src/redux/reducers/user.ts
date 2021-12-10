import { ActionType } from '../acttion-types';
import { Action } from '../actions';

const INITIAL_STATE = {
    currentUser: null,
    error: null
};

const userReducer = (state = INITIAL_STATE, action: Action) => {
    switch (action.type) {
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
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;