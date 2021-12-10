import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/selectors/user';


const Header: React.FC<{ currentUser:any }> = ({ currentUser }) => {
    console.log('X', currentUser);
    return (
        <div>
            {currentUser ? 'SIGN OUT'
                :
                'SIGN IN'
            }
        </div>

    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

// const mapDispatchToProps = dispatch => ({
//     signOutStart: () => dispatch(signOutStart())
// });

export default connect(
    mapStateToProps,
    null//mapDispatchToProps
)(Header);