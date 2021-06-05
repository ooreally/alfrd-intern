import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Account from './components/Settings/Account';
import Coach from './components/Settings/Coach';
import Header from './components/Header';
import Learn from './components/Learn/Learn';
import H2 from './components/H2';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/settings/coach" exact>
            <Coach />
          </Route>
          <Route path="/settings/account" exact>
            <Account />
          </Route>
          <Route path="/learn" exact>
            <Learn />
          </Route>
          <Route path="/" >
            <Coach/>
          </Route>
         </Switch> 
      </BrowserRouter>
      
    </div>
  );
}

export default App;
