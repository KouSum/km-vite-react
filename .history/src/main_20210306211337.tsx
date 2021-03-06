import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Repos from './components/Repos'
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
)
