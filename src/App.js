import React, { Component } from 'react';

import './App.css';
import MenuHeaderJede from './MenuHeader.js'
import PortfolioEl from './PortfolioCatalog.js'
import Containersecond from './containersecond.js'
import ContactForm from './contact.js'
import ModalPortfolio from './modal.js';
import ModalPortfolio2 from './modalv2.js';
import janiakmeble from './projekty/janiaksklep.png'
import moststudio from './projekty/moststudio.jpg'






class App extends Component {
  render() {
    return (
      <div className="App">
        <ModalPortfolio modalid={"modal1"} modaltextheader={"Janiak Meble"} modaltext={"Projekt sklepu internetowego stworzony w technologii Wordpress. Stworzenie i optymalizacja wyglądu strony."} ahref={janiakmeble}/>     
        <ModalPortfolio2 projectimgspec={"imgportfoliospp"} projectimgspecm={"imgportfoliosppm"}modalid={"modal2"} modaltextheader={"Spp"} modaltext={"Projekt storyn internetowego stworzony w technologii Wordpress. Stworzenie i optymalizacja wyglądu strony."} />         
         <ModalPortfolio2 projectimgspec={"imgportfoliomost"} projectimgspecm={"imgportfoliomostmobile"}modalid={"modal3"} modaltextheader={"Most"} modaltext={"Projekt strony internetowego stworzony w technologii Wordpress. Stworzenie i optymalizacja wyglądu strony."} />              
        <ModalPortfolio2 projectimgspec={"imgportfoliowynajemostrow"} projectimgspecm={"imgportfoliowynajemostrowm"} modalid={"modal4"} modaltextheader={"Wynajem Ostrów"} modaltext={"Projekt sklepu internetowego stworzony w technologii Wordpress. Stworzenie i optymalizacja wyglądu strony."} />  
        <ModalPortfolio2 projectimgspec={"imgportfolio1sakro"} projectimgspecm={"imgportfoliomobile1sakro"}modalid={"modal5"} modaltextheader={"Sakro Sleep"} modaltext={"Projekt sklepu internetowego stworzony w technologii Wordpress. Stworzenie i optymalizacja wyglądu strony."} />         
          <ModalPortfolio2 projectimgspec={"imgportfolio1fander"} projectimgspecm={"imgportfolio1fandermobile"}modalid={"modal6"} modaltextheader={"Fander"} modaltext={"Projekt sklepu internetowego stworzony w technologii Wordpress. Stworzenie i optymalizacja wyglądu strony."} /> 
          <ModalPortfolio2 projectimgspec={"imgportfoliocyclone"} projectimgspecm={"imgportfoliocyclonemobile"}modalid={"modal7"} modaltextheader={"Cyclone"} modaltext={"Projekt sklepu internetowego stworzony w technologii Wordpress. Stworzenie i optymalizacja wyglądu strony."} />
        <ModalPortfolio2 projectimgspec={"imgportfoliohoronczyk"} projectimgspecm={"imgportfoliohoronczykmobile"}modalid={"modal8"} modaltextheader={"Horonczyk"} modaltext={"Projekt sklepu internetowego stworzony w technologii Wordpress. Stworzenie i optymalizacja wyglądu strony."} /> 
       
       
        
    
        
        
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
