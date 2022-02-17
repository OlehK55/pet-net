import { ActionType } from '../acttion-types';
import { INews } from '../../types/news';
import { ErrorMessage } from '../../types/handlers/ErrorMessage';

export interface addNewsSuccessAction {
    type: ActionType.ADD_NEWS_SUCCESS;
    payload: INews;
};

export interface  addNewsFailureAction {
    type: ActionType.ADD_NEWS_FAILURE;
    payload: ErrorMessage;
};


export interface  addNewsStartAction {
    type: ActionType.ADD_NEWS_START;
    payload: INews;
};

export interface  fetchNewsListStartAction {
    type: ActionType.FETCH_NEWS_LIST_START;
};

export interface  fetchNewsListSuccessAction {
    type: ActionType.FETCH_NEWS_LIST_SUCCESS;
    payload: {[key: string]: INews};
}

export interface  fetchNewsListFailureAction {
    type: ActionType.FETCH_NEWS_LIST_FAILURE;
    payload: ErrorMessage;
};

export type NewsAction = addNewsSuccessAction |
    addNewsFailureAction |
    addNewsStartAction |
    fetchNewsListSuccessAction |
    fetchNewsListFailureAction |
    fetchNewsListStartAction;