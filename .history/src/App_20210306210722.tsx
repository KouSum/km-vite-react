import React, { useState,PropsWithChildren, FC } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  Button
} from "antd";
import './App.css'




const App: FC = (props)=>{
  return (
    <div>
      {props.children}
    </div>
  );

}
