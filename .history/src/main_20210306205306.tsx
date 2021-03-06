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
  <Route >
    <Route path="/" component={App}></Route>
  </Route>
  </React.StrictMode>,
  document.getElementById('root')
)
