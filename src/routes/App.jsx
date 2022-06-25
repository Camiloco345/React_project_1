import React from 'react';
import CreatePassword from '../pages/CreatePassword';
import '../styles/global.css';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import RecoveryPassword from '../pages/RecoveryPassword';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';


const App = () => {
    return(
      <BrowserRouter>
        <Layout>
          <Header/>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/Login' element={<Login/>} />
            <Route exact path='/CreatePassword' element={<CreatePassword/>} />
            <Route exact path='/recoveryPassword' element={<RecoveryPassword/>} />
            <Route exact path='/CreateAccount' element={<CreateAccount/>} />
            <Route path='*' element={<NotFound/>} /> 
          </Routes>
        </Layout>
      </BrowserRouter>
    )
};

export default App;