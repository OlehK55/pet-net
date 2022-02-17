import React, {ChangeEvent, Dispatch, FormEvent, useState} from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Input } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons';
import { UserAction } from '../../../redux/actions';

import { emailSignInStart } from '../../../redux/action-creators';
import {useHistory} from "react-router-dom";


interface Props {
    emailSignInStart: (email: string, password: string) => void;
}


const  SignInForm: React.FC<Props> = (props) => {
    const { emailSignInStart } = props;
    let history = useHistory();
    function onSubmit(e: FormEvent): void {
        e.preventDefault();
        emailSignInStart(email, password);
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        name === 'email'? setEmail(value) : setPassword(value);
    };

        return (
            <>
                <form onSubmit={onSubmit} >
                    <Grid item style={{ marginTop: '155px' }} xs={12} spacing={6} container justifyContent="center" alignItems="center">
                        <Grid container item  justifyContent="center" spacing={3} alignItems="center">
                            <Grid item>
                                <Face />
                            </Grid>
                            <Grid item>
                                <Input onChange={handleChange}
                                           value={email} name='email' />
                            </Grid>
                        </Grid>
                        <Grid container item  justifyContent="center" spacing={3} alignItems="center">
                            <Grid item>
                                <Fingerprint />
                            </Grid>
                            <Grid item>
                                <Input onChange={handleChange}
                                       type="password" value={password} name='password' />
                            </Grid>
                        </Grid>
                        <Grid container item alignItems="center" justifyContent="center">
                            <Grid item>
                                <Button onClick={() => history.push('/signup')} disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="secondary">Register</Button>
                            </Grid>
                        </Grid>
                        <Grid container item justifyContent="center" style={{ marginTop: '10px' }}>
                            <Button type="submit" variant="outlined" color="secondary" style={{ textTransform: "none" }}>Login</Button>
                        </Grid>
                    </Grid>
                    </form>
            </>
        );

}

const mapDispatchToProps = (dispatch: Dispatch<UserAction>) => ({
    emailSignInStart: (email: string, password: string) =>
        dispatch(emailSignInStart({ email, password }))
});


export default connect(
    null,
    mapDispatchToProps
)(SignInForm);