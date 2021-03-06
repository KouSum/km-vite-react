import React from 'react'
import ReactDOM from 'react-dom'
import {
  Router,
  hashHistory,
  Route
} from "react-router";
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
<Router history={hashHistory}>
  <Route path="/" component={App}>
    <Route path="/repos" component={Repos}/>
    <Route path="/about" component={About}/>
  </Route>
</Router>
  </React.StrictMode>,
  document.getElementById('root')
)
