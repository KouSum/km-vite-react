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





export default function App2(props:PropsWithChildren<FC>) {
  return (
    <div>
      123
      {props.children}
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

