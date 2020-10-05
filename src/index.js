import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function Main() {

  return (
    <App />
  );
}

ReactDOM.hydrate(<Main />, document.querySelector('#root'));