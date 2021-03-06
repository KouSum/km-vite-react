import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,HashRouter
} from "react-router-dom";
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
  <HashRouter   >
    <Route path="/" component={App}></Route>
  </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
