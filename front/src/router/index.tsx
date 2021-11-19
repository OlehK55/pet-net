import React, { Suspense, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, RouteProps } from 'react-router-dom';
import { history } from '../redux/store';
import Fallback from '../components/common/fallback';
import { IRootReducer } from '../redux/reducers/state';
import { IAuth } from '../types/auth';

const GuestPage = React.lazy(() => import('../pages/guest'));


function MainRouter() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Fallback />}>
                <Switch>
                    {
                        <Fragment>
                            <Route exact path="/" component={GuestPage} />
                        </Fragment>
                    }
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}


export default MainRouter;
