import React, { useState,PropsWithChildren, FC } from 'react'
import {
  Router,
  Route
} from "react-router";
import {
  Button
} from "antd";
import './App.css'




const App: FC = (props)=>{
  return (
    <div>
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
