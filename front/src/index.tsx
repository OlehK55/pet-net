import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import {
    createTheme,
    makeStyles,
    createStyles,
    Theme as AugmentedTheme,
    ThemeProvider,
} from '@material-ui/core/styles';


import App from './App';

import './index.css';

declare module '@material-ui/core/styles/createTheme' {
    interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

const theme = createTheme();

const app = (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <PersistGate persistor={persistor}>
                    <App />
                </PersistGate>
            </BrowserRouter>
        </ThemeProvider>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
