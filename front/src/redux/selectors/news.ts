import { createSelector } from 'reselect';

const selectNews = (state: any) => state.news;

export const selectNewsList = createSelector(
    [selectNews],
    news => news.newsList
);