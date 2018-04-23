import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const title = 'Hello';

ReactDOM.render(
<div>{title}</div>,
document.getElementById('root')
);

module.hot.accept(); // hot reloading for dev