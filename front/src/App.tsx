import React, {Dispatch} from 'react';
import { Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/home';
import Profile from './pages/profile';
import  SignIn from './pages/auth/signin';
import  SignUp from './pages/auth/signup';
import Header from "./components/header";



import { selectCurrentUser } from './redux/selectors/user';
import {checkUserSession, signOutStart} from './redux/action-creators';
import { Action } from "./redux/actions";
import {IUser} from "./types/user";

interface Props {
    checkUserSession: () => void;
    signOut: () => void;
    currentUser: IUser | null
}


class App extends React.Component<Props> {

    componentDidMount() {
        const { checkUserSession } = this.props;
        checkUserSession();
    }



    render() {
        const { currentUser } = this.props;
        const isAuthorised = !!currentUser;
        const { signOut } = this.props;
        console.log('currentUser', currentUser);
        console.log('isAuthorised', isAuthorised);
        return (
            <div>
                {isAuthorised? <Header isAuthorised={isAuthorised} handleSignOut={signOut} />: ''}
                <Switch>
                    <Route exact path='/' component={isAuthorised? HomePage: SignIn} />
                    <Route exact path='/signin' component={SignIn} />
                    <Route exact path='/signup' component={SignUp} />
                    <Route exact path='/profile' component={Profile} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    checkUserSession: () => dispatch(checkUserSession()),
    signOut: () => dispatch(signOutStart())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
