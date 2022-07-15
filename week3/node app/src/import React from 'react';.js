import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" elemt={<Home/ >}></Route>
    </Routes>
  </BrowserRouter>
  
  document.getElementById('root')
);
