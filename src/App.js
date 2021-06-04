import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Coach from './components/Settings/Coach';
import Header from './components/Header';
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
          <Route path="/">
            <Coach/>
          </Route>
         </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
