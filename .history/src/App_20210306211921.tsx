import React, { useState,PropsWithChildren, FC } from 'react'
import {
  Router,
  Route
} from "react-router";
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import Repos from './components/Repos'
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();
import './App.css'




const App: FC = (props)=>{
  return (
    <div>
      12
    {props.children}
    <Router history={customHistory}>
      <Route path="/" component={App}>
        <Route path="/repos" component={Repos} />
      </Route>
    </Router>
    </div>
  );

}

export default App
