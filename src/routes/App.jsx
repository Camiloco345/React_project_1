import React from 'react';
import Login from '../containers/Login';
import '../styles/global.css';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import RecoveryPassword from '../containers/RecoveryPassword';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return(
      <BrowserRouter>
        <Layout>
          <Routes>          
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/recoveryPassword' element={<RecoveryPassword/>} />
            <Route path='*' element={<NotFound/>} /> 
          </Routes>
        </Layout>
      </BrowserRouter>
    )
};

export default App;