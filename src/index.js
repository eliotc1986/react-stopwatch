import React from 'react';
import ReactDOM from 'react-dom';
import StopWatch from './StopWatch';
import './index.css';

ReactDOM.render(
  <StopWatch start={Date.now()} />,
  document.getElementById('root')
);
