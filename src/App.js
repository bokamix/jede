import React, { Component } from 'react';

import './App.css';
import MenuHeaderJede from './MenuHeader.js'
import PortfolioEl from './PortfolioCatalog.js'
import Containersecond from './containersecond.js'

class App extends Component {
  render() {
    return (
      <div className="App">
       
       <div className="container">
         <MenuHeaderJede />
       <Containersecond />
        <PortfolioEl />
        <PortfolioEl />
        <PortfolioEl />
        <div id="endclass" />
       
        </div>
      </div>
    );
  }
}

export default App;
