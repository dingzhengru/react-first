import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import IncreaseCount from './components/increaseCount';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <IncreaseCount count={10} />
    <IncreaseCount count={100} isLoggedIn={true} list={[1, 2, 3]} />
    <IncreaseCount isShow={false} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
