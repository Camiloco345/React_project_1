import React from 'react';
import Login from '../containers/Login';
import '../styles/global.css';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import RecoveryPassword from '../containers/RecoveryPassword';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';

const App = () => {
    return(
      <BrowserRouter>
        <Layout>
          <Header />
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


// const App = () => {
//   return (
//       <BrowserRouter>
//           <CleanLayout>
//               <Routes>
//                   <Route path='/login' element={<Login />} />
//                   <Route path='/password-recovery' element={<PasswordRecovery />} />
//               </Routes>
//           </CleanLayout>
//           <NavLayout>
//               <Routes>
//                   <Route path='/' element={<Home />} />
//                   <Route path='*' element={<NotFound />} />
//               </Routes>
//           </NavLayout>
//       </BrowserRouter>
//   );
// }