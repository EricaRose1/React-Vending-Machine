import React from 'react';
import './App.css';

import VendingMachine from './VendingMachine';
import Blueberry from './Blueberry';
import Strawberry from './Strawberry';
import Peanuts from './Peanuts';
import Snacks from './Snacks';

import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav className='btn'>
        <Snacks />
        <Route exact path='/blueberry'>
          <Blueberry />
        </Route>
        <Route exact path='/strawberry'>
          <Strawberry />
        </Route>
        <Route exact path='/peanuts'>
          <Peanuts />
        </Route>
      </nav>  
      <div className="vending">
        <Route exact path="/">
          <VendingMachine />
        </Route>
      </div>  
      <Link exact to='/'>More Snacks</Link>
      </BrowserRouter>
    </div>
  );
}

export default App;
