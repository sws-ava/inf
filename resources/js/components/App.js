import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route  } from 'react-router-dom';
import Deposits from '../pages/deposits';


function App() {

  return (
    <div>
        <BrowserRouter>
            <div>
                <Link to="/dashboard">Dash</Link>
                <Link to="/deposits">Depo</Link>
            </div>
                <Route path="/deposits">
                    <Deposits/>
                </Route>
        </BrowserRouter>
    </div>
  );
}


export default App;
