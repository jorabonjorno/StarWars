import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import store from '@store/store'

import ThemeProvider from "@context/ThemeProvider";

import App from '@containers/App';

import '@styles/index.css';

    render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );


