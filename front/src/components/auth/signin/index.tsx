import React, {Dispatch, FormEvent, useState} from 'react';
import { connect } from 'react-redux';
import { Paper, withStyles, Grid, TextField, Button, Input, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
import { ILoginArguments } from '../../../types/handlers/ILoginArguments';
import { Action } from '../../../redux/actions';


import { emailSignInStart } from '../../../redux/action-creators';

const styles = (theme: { spacing: { unit: number; }; }) => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});

// @ts-ignore
function SignInForm({emailSignInStart}){
    function onSubmit(e: FormEvent): void {
        e.preventDefault();
        emailSignInStart(email, password);
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (event:any) => {
        const { value, name } = event.target;
        name === 'email'? setEmail(value) : setPassword(value);
    };

        return (
            <Paper>
                <form onSubmit={onSubmit} className="login-form">
                <div>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <Input onChange={handleChange}
                                       value={email} name='email' />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <Input onChange={handleChange}
                                   value={password} name='password' />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                            <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button type="submit" variant="outlined" color="primary" style={{ textTransform: "none" }}>Login</Button>
                    </Grid>
                </div>
                </form>
            </Paper>
        );

}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    emailSignInStart: (email: string, password: string) =>
        dispatch(emailSignInStart({ email, password }))
});


export default connect(
    null,
    mapDispatchToProps
)(SignInForm);