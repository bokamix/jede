import React, { Component } from 'react';

import './App.css';
import MenuHeaderJede from './MenuHeader.js'
import PortfolioEl from './PortfolioCatalog.js'
import Containersecond from './containersecond.js'
import ContactForm from './contact.js'
import ModalPortfolio from './modal.js';
import ModalPortfolio2 from './modalv2.js';
import janiakmeble from './projekty/janiaksklep.png'
import spp from './projekty/sppagency.jpg'
import moststudio from './projekty/moststudio.jpg'
import wynajemostrow from './projekty/wynajemostrow.jpg'
import wynajemostrowmobile from './projekty/wynajemostrow-mobile.jpg'




class App extends Component {
  render() {
    return (
      <div className="App">
        <ModalPortfolio modalid={"modal1"} modaltextheader={"Janiak Meble"} modaltext={"Projekt sklepu internetowego stworzony w technologii Wordpress. Stworzenie i optymalizacja wyglądu strony."} ahref={janiakmeble}/>     
        <ModalPortfolio modalid={"modal2"} modaltextheader={"SPP"} modaltext={"Projekt sklepu internetowego stworzony w technologii Wordpress. Stworzenie i optymalizacja wyglądu strony."} ahref={spp} />     
        <ModalPortfolio  modalid={"modal3"} modaltextheader={"Most"} modaltext={"Projekt sklepu internetowego stworzony w technologii Wordpress. Stworzenie i optymalizacja wyglądu strony."} ahref={moststudio} />  
        
        <ModalPortfolio2  modalid={"modal4"} modaltextheader={"Wynajem Ostrów"} modaltext={"Projekt sklepu internetowego stworzony w technologii Wordpress. Stworzenie i optymalizacja wyglądu strony."} />  
        <ModalPortfolio2  modalid={"modal5"} modaltextheader={"Sakro Sleep"} modaltext={"Projekt sklepu internetowego stworzony w technologii Wordpress. Stworzenie i optymalizacja wyglądu strony."} />  
       
        
    
        
        
       <div className="container">
        <MenuHeaderJede />
       <Containersecond />
        <div id="containerportfolioid" className="containerportfoliomain pt-5"><h2>Przeprowadzone projekty</h2>
        <PortfolioEl /></div>
        <ContactForm />
        
       
        </div>
           
      </div>
    );
  }
}


 




export default App;
