import React from 'react';
import Login from '../containers/Login';
import '../styles/global.css';
import Layout from '../containers/Layout';
import RecoveryPassword from '../containers/RecoveryPassword';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
    return(
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/recoveryPassword' component={RecoveryPassword} />
            <Route component={NotFound} />
          </Layout>
        </Switch>
      
      </BrowserRouter>
    )
};

export default App;