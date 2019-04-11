import React, { Component } from 'react';

import './App.css';
import MenuHeaderJede from './MenuHeader.js'
import PortfolioEl from './PortfolioCatalog.js'
import Containersecond from './containersecond.js'
import ContactForm from './contact.js'
import ModalPortfolio from './modal.js';
import janiakmeble from './projekty/janiaksklep.png'
import spp from './projekty/sppagency.jpg'
import moststudio from './projekty/moststudio.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ModalPortfolio modalid={"modal1"} modaltextheader={"Janiak Meble"} modaltext={"Projekt sklepu internetowego stworzony w technologii Wordpress. Stworzenie i optymalizacja wyglądu strony."} ahref={janiakmeble}/>     
        <ModalPortfolio modalid={"modal2"} modaltextheader={"SPP"} ahref={spp} />     
        <ModalPortfolio modalid={"modal3"} modaltextheader={"Most"} ahref={moststudio} />   
       <div className="container">
         <MenuHeaderJede />
       <Containersecond />
        <div id="containerportfolioid" className="containerportfoliomain pt-5"><h2>Przeprowadzone projekty</h2>
        <PortfolioEl />      
      </div>
        <ContactForm />
       
       
        </div>
           
      </div>
    );
  }
}

export default App;
