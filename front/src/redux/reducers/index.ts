import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user';
import newsReducer from "./news";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
};

const rootReducer = combineReducers({
    user: userReducer,
    news: newsReducer
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;