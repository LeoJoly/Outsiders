// == Package imports
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// == Local imports
// Components
import Header from '../../containers/Header';
import Home from '../Home';
import About from '../About';
import Sports from '../../containers/Sports';
import Sorties from '../Sorties';
import Categories from '../../containers/Categories';
import Tripdetails from '../../containers/Tripdetails';
import Signup from '../../containers/Signup';
import Login from '../../containers/Login';
import Profile from '../../containers/Profile';
import BackOffice from '../../containers/BackOffice';
import Newtrip from '../../containers/Newtrip';
import Patchtrip from '../../containers/Patchtrip';
import EditProfile from '../../containers/EditProfile';
import Admin from '../../containers/Admin';
import Footer from '../Footer';
import { GuardedRoute, AdminRoute } from '../GuardedRoute';

const App = ({ loadSportsData, loadCategoriesData, isLogged, admin }) => {
  // loading sports and categories data from api
  useEffect(() => {
    loadSportsData();
    loadCategoriesData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
    {/* GUEST ROUTE */}
      <Header />

      {/* General routes */}
      <Route exact path='/' >
        <Home />
      </Route>
      <Route exact path='/about' >
        <About />
      </Route>

      {/* Sport routes */}
      <Route exact path='/sports' >
        <Sports />
      </Route>
      <Route exact path='/categories/:slug' >
        <Categories />
      </Route>    

      {/* Trip routes */}
      <Route exact path='/sorties' >
        <Sorties />

      </Route>
      {/* Condition : If user is not logged (isLogged = false) redirect to Login page */}
      <GuardedRoute exact path='/sortie/:slug' component={Tripdetails} isLogged={isLogged} />
      <GuardedRoute exact path='/nouvelle-sortie' component={Newtrip} isLogged={isLogged} />
      <GuardedRoute exact path='/modifier-sortie' component={Patchtrip} isLogged={isLogged} />

      {/* User routes */}
      <Route exact path='/signup' >
        <Signup />
      </Route>
      <Route exact path='/login' >
        <Login />
      </Route>

      {/* Condition : If user is not logged (isLogged = false) redirect to Login page */}
      <GuardedRoute exact path='/mon-compte' component={Profile} isLogged={isLogged} />
      <GuardedRoute exact path='/mon-compte/modifier' component={EditProfile} isLogged={isLogged} />

      {/* Admin routes */}
      <Route exact path='/admin' >
        <Admin />
      </Route>

      {/* Condition : If user is not admin (role !== 2) redirect to Home page */}
      <AdminRoute exact path='/dashboard' component={BackOffice} admin={admin} />
      
    <Footer />
    </div>
  );
}

App.propTypes = {
  loadSportsData: PropTypes.func.isRequired,
  loadCategoriesData: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default App;
