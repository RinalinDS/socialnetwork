import React from 'react';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/store";
import App from "./App";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";


ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </HashRouter>,

  document.getElementById('root')
)
;


reportWebVitals();
