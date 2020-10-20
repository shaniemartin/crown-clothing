import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import shopPage from './pages/shop/shop.component';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path ='/' component={ Homepage } />
        <Route exact path ='/shop' component={ shopPage } />
      </Switch>
    </div>
  );
}

export default App;
