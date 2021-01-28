// == Package imports
import React from 'react';
import { Route } from 'react-router-dom';

// == Local imports
// Components
import Header from '../Header';
import Home from '../Home';
import Footer from '../Footer';
import Sports from '../../containers/Sports';
import Trips from '../../containers/Trip';
import Login from '../../containers/Login';
import About from '../About';
import Signup from '../../containers/Signup';
import Tripdetails from '../Tripdetails';
import Admin from '../../containers/Admin';
import Profile from '../../containers/Profile';



function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' >
        <Home />
      </Route>
      <Route exact path='/sports' >
        <Sports />
      </Route>
      <Route exact path='/trips' >
        <Trips />
      </Route>
      <Route exact path='/signup' >
        <Signup />
      </Route>
      <Route exact path='/login' >
        <Login />
      </Route>
      <Route exact path='/about' >
        <About />
      </Route>
      <Route exact path='/sortie' >
        <Tripdetails />
      </Route>
        
      <Route exact path='/admin' >
        <Admin />
      </Route>
      <Route exact path='/mon-compte' >
        <Profile />
      </Route>
      <Footer />
    </div>
  );
}

export default App;