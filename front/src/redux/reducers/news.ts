import { ActionType } from '../acttion-types';
import { NewsAction } from '../actions';

const INITIAL_STATE = {
    newsList: {},
    error: null
};

const newsReducer = (state = INITIAL_STATE, action: NewsAction) => {
    switch (action.type) {
        case ActionType.FETCH_NEWS_LIST_SUCCESS:
            return {
                ...state,
                newsList: action.payload,
                error: null
            };
        case ActionType.ADD_NEWS_SUCCESS:
            return {
                ...state,
                error: null
            };
        case ActionType.ADD_NEWS_FAILURE:
        case ActionType.FETCH_NEWS_LIST_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default newsReducer;