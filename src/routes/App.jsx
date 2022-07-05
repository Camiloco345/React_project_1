import React from 'react';
import CreatePassword from '../pages/CreatePassword';
import '../styles/global.css';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import RecoveryPassword from '../pages/RecoveryPassword';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import YardSale from '../components/YardSale';
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import EditAccount from '../pages/EditAccount';
import EmailSent from '../pages/EmailSent';
import ProductList from '../containers/ProductList';
import AppContext from '../context/AppContext.js'
import useInitialState from '../hooks/useInitialState.js';


const App = () => {
    const initialState = useInitialState();
    return(
      <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <YardSale />
          <Routes>
            <Route exact path='/' element={<ProductList/>} />
            <Route exact path='/Login' element={<Login/>} />
            <Route exact path='/CreatePassword' element={<CreatePassword/>} />
            <Route exact path='/recoveryPassword' element={<RecoveryPassword/>} />
            <Route exact path='/CreateAccount' element={<CreateAccount/>} />
            <Route exact path='/EditAccount' element={<EditAccount/>} />
            <Route exact path='/EmailSent' element={<EmailSent/>} />
            <Route path='*' element={<NotFound/>} /> 
          </Routes>
        </Layout>
      </BrowserRouter>
      </AppContext.Provider>
    )
};

export default App;