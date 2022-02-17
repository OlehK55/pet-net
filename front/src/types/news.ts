export interface INews {
    title: string;
    uid?: string;
    content: string;
    createdAt?: Date,
}

const NewsActionTypes = {
    ADD_NEWS_START: 'ADD_NEWS_START',
    ADD_NEWS_SUCCESS: 'ADD_NEWS_SUCCESS',
    ADD_NEWS_FAILURE: 'ADD_NEWS_FAILURE',
    FETCH_NEWS_LIST_START: 'FETCH_NEWS_LIST_START',
    FETCH_NEWS_LIST_SUCCESS: 'FETCH_NEWS_LIST_SUCCESS',
    FETCH_NEWS_LIST_FAILURE: 'FETCH_NEWS_LIST_FAILURE'
};

export default NewsActionTypes;