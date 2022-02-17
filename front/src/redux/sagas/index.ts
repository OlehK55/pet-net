import { all, call } from 'redux-saga/effects';
import { userSagas } from './user';
import { newsSagas } from './news';

export default function* rootSaga() {
    yield all([call(userSagas), call(newsSagas)]);
}