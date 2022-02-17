import React, {ChangeEvent, FormEvent, useState} from 'react';
import { useDispatch } from "react-redux";
import {Button, Grid, Input} from "@material-ui/core";
import {Face, Fingerprint} from "@material-ui/icons";
import {addNewsStart} from "../../redux/action-creators";

interface Props {

};

const AddNews: React.FC<Props>  = (props) => {
    const dispatch = useDispatch();
    // @ts-ignore
    const addNewsHandler = (news) => dispatch(addNewsStart(news));
    function onSubmit(e: FormEvent): void {
        e.preventDefault();
        addNewsHandler({title, content})
    }

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        name === 'title'? setTitle(value) : setContent(value);
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
                                   value={title} name='title' />
                        </Grid>
                    </Grid>
                    <Grid container item  justifyContent="center" spacing={3} alignItems="center">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item>
                            <Input onChange={handleChange}
                                  value={content} name='content' />
                        </Grid>
                    </Grid>
                    <Grid container item justifyContent="center" style={{ marginTop: '10px' }}>
                        <Button type="submit" variant="outlined" color="secondary" style={{ textTransform: "none" }}>Add</Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}

export default AddNews;