import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import VendingMachine from './VendingMachine';
import Potato from './Potato';
import Squash from './Squash';
import Orange from './Orange';
import NavBar from './Navbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/Potato">
          <Potato />
        </Route>
        <Route exact path="/Orange">
          <Orange />
        </Route>
        <Route exact path="/Squash">
          <Squash />
        </Route>
        <Route exact path="/">
          <VendingMachine/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
