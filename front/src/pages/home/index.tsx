import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectNewsList } from "../../redux/selectors/news";
import {fetchNewsListStart} from "../../redux/action-creators";
import NewsCard from "../../components/news/NewsCard";


export default function Home() {
    const newsList = useSelector(selectNewsList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNewsListStart());
    },[]);

    return (
        <div className="some-class">
            home page
            {
                (newsList !== {}) ?
                    Object.values(newsList).map(newsItem =>
                        <NewsCard key={// @ts-ignore
                            newsItem.uid} title=
                                      { // @ts-ignore
                                          newsItem.title }/>
                    ) : 'No news'
            }
        </div>
    )
}