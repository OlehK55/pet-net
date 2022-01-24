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

import theme from './components/ui/theme';

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
