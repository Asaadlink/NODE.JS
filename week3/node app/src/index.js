import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home.jsx';
import Login from './Login';
import SignUp from './SignUp';

ReactDOM.render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/ >}></Route>
      <Route path="/login" element={<Login/ >}></Route>
      <Route path="/signup" element={<SignUp/ >}></Route>

    
    </Routes>
  </BrowserRouter>,
  
  document.getElementById('root')
);
