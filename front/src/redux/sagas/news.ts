import { takeLatest, put, all, call } from 'redux-saga/effects';

import {
    createNewsDocument,
    firestore,
} from '../../utils/firebase';

import { ActionType } from '../acttion-types'
import {
    fetchNewsListSuccess,
    fetchNewsListFailure,
    addNewsSuccess,
    addNewsFailure
} from '../action-creators';


export function* fetchNewsListAsync() {
    try {
        const newsCollectionRef = firestore.collection('news');
        // @ts-ignore
        const snapshot = yield newsCollectionRef.get();
        const newsList = {};
        // @ts-ignore
        snapshot.docs.map(doc => {
            const data =  doc.data();
            // @ts-ignore
            newsList[doc.id] = { ...data, uid: doc.id}
        });

        yield put(fetchNewsListSuccess(newsList));
    } catch (error) {
        yield put(fetchNewsListFailure(error));
    }
}

// @ts-ignore
export function* addNews({ payload: { title, content } }) {
    try {
        const { news } = yield createNewsDocument({title, content});
        yield fetchNewsListAsync();
        yield put(addNewsSuccess(news));
    } catch (error) {
        yield put(addNewsFailure(error));
    }
}

export function* onAddNewsStart() {
    // @ts-ignore
    yield takeLatest(ActionType.ADD_NEWS_START, addNews);
}

export function* onFetchNewsListStart() {
    // @ts-ignore
    yield takeLatest(ActionType.FETCH_NEWS_LIST_START, fetchNewsListAsync);
}


export function* newsSagas() {
    yield all([
        call(onAddNewsStart),
        call(onFetchNewsListStart),
    ]);
}