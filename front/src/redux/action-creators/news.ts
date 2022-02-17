import { ActionType } from '../acttion-types';
import {
    fetchNewsListStartAction,
    fetchNewsListSuccessAction,
    fetchNewsListFailureAction,
    addNewsSuccessAction,
    addNewsFailureAction,
    addNewsStartAction
} from '../actions';
import { INews } from '../../types/news';
import { ErrorMessage } from '../../types/handlers/ErrorMessage';

export const addNewsSuccess = (news: INews):addNewsSuccessAction => ({
    type: ActionType.ADD_NEWS_SUCCESS,
    payload: news
});

export const addNewsFailure = (error: ErrorMessage):addNewsFailureAction => ({
    type: ActionType.ADD_NEWS_FAILURE,
    payload: error
});

export const addNewsStart = (news: INews):addNewsStartAction => ({
    type: ActionType.ADD_NEWS_START,
    payload: news
});

export const fetchNewsListStart = ():fetchNewsListStartAction => ({
    type: ActionType.FETCH_NEWS_LIST_START,
});

export const fetchNewsListSuccess = (newsList: {[key: string]: INews}):fetchNewsListSuccessAction => ({
    type: ActionType.FETCH_NEWS_LIST_SUCCESS,
    payload: newsList
});

export const fetchNewsListFailure = (error: ErrorMessage):fetchNewsListFailureAction => ({
    type: ActionType.FETCH_NEWS_LIST_FAILURE,
    payload: error
});