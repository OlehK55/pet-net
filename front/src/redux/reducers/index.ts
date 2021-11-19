/* eslint-disable @typescript-eslint/no-namespace */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { UserReducer } from './user';
import { IRootReducer } from './state';
import { AuthReducer } from './auth';

const rootReducer = combineReducers<IRootReducer>({
    router: routerReducer,
    user: UserReducer as any,
    auth: AuthReducer as any,
});

export default rootReducer;