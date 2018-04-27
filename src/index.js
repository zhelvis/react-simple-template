import React from 'react';
import { render } from 'react-dom';

import './index.css';

import Main from './components/Main/Main'
import Header from './components/Header/Header'

render((
    <React.Fragment>
        <Header/>
        <Main/>
    </React.Fragment>
), document.getElementById('root'))

module.hot.accept(); // hot reloading for dev