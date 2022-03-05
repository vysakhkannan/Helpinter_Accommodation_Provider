import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter, 
  Routes,
  Route
} from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

ReactDOM.render(
  <React.StrictMode>
        <BrowserRouter>
        <Routes>
            <Route path='*' element={ <App />}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
