import React, { Component } from 'react';

import './App.css';
import MenuHeaderJede from './MenuHeader.js'
import PortfolioEl from './PortfolioCatalog.js'

class App extends Component {
  render() {
    return (
      <div className="App">
       
       <div className="container">
         <MenuHeaderJede />
        <PortfolioEl />
       
        </div>
      </div>
    );
  }
}

export default App;
