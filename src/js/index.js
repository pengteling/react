import React from 'react';
import ReactDOM from 'react-dom';
require("./../sass/style.scss");
import App from "./component/App";
import Perf from 'react-addons-perf'; // ES6

window.Perf = Perf

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
