import React from 'react'
import ReactDOM from 'react-dom'
import {
  Router,
  Route
} from "react-router";
import './index.css'
import App from './App'
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();
ReactDOM.render(
  <React.StrictMode>
    <Router history={customHistory}>
      <Route path="/" component={App}>
  <Route path="/repos" component={Repos}/>
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
