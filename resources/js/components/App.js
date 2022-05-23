import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter, Route  } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Deposits from '../pages/deposits';


function App() {


    const cash = useSelector(state =>state.cash)
  return (

    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <BrowserRouter>
            <div>
                <Link to="/dashboard">Dash</Link>
                <Link to="/deposits">Depo</Link>
                <span>Cash: {cash}  </span>
            </div>
            <Switch>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
                <Route path="/deposits">
                    <Deposits/>
                </Route>
                <Redirect to="/dashboard"/>
            </Switch>
        </BrowserRouter>
        </div>
  );
}


export default App;
