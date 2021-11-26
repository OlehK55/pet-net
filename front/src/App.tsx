import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/home';
import LoginPage from './pages/auth';


import { selectCurrentUser } from './redux/selectors/user';
import { checkUserSession } from './redux/actions';

class App extends React.Component {

    componentDidMount() {
        // @ts-ignore
        const { checkUserSession } = this.props;
        checkUserSession();
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/login' component={LoginPage} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch: any) => ({
    checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
