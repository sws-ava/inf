
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter, Route  } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Deposits from '../pages/deposits';
import axios from 'axios';


function App() {

    const [lang, setSetLang] = useState([])

    useEffect(() => {
        const fetchLangs = async () => {
            const response = await axios(
                '/api/getLang',
            );
            setSetLang(response.data)
        };
        fetchLangs();
    }, []);


    const cash = useSelector(state =>state.cash)
  return (

    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <BrowserRouter>
            <div>
                <Link to="/dashboard">{lang.dash1}</Link>
                <Link to="/deposits">{lang.dash3}</Link>
                <span>{lang.dash2}: {cash}  </span>
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
