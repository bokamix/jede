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
        <ModalPortfolio modalid={"modal1"} modaltextheader={"Janiak Meble"} modaltext={"Sklep internetowy oparty na systemie Wordpress. Projekt graficzny + wykonanie techniczne."} ahref={janiakmeble}/>     
        <ModalPortfolio2 projectimgspec={"imgportfoliospp"} projectimgspecm={"imgportfoliosppm"}modalid={"modal2"} modaltextheader={"Spp"} modaltext={"Strona internetowa dla agencji modelingu oparta na systemie Wordpress. Projekt graficzny + wykonanie graficzne."} />         
        <ModalPortfolio2 projectimgspec={"imgportfoliomost"} projectimgspecm={"imgportfoliomostmobile"}modalid={"modal3"} modaltextheader={"Most"} modaltext={"Strona internetowa dla agencji produkcyjnej oparta na systemie Wordpress. Projekt graficzny + wykonanie graficzne."} />              
        <ModalPortfolio2 projectimgspec={"imgportfoliowynajemostrow"} projectimgspecm={"imgportfoliowynajemostrowm"} modalid={"modal4"} modaltextheader={"Wynajem Ostrów"} modaltext={"Wykonanie katalogu internetowego dla wypożyczalni sprzętu dla firm.  Projekt graficzny + grafika + wykonanie techniczne."} />  
        <ModalPortfolio2 projectimgspec={"imgportfolio1sakro"} projectimgspecm={"imgportfoliomobile1sakro"}modalid={"modal5"} modaltextheader={"Sakro Sleep"} modaltext={"Sklep internetowy oparty na systemie Wordpress. Projekt graficzny + grafiki + wykonanie techniczne."} />         
        <ModalPortfolio2 projectimgspec={"imgportfolio1fander"} projectimgspecm={"imgportfolio1fandermobile"}modalid={"modal6"} modaltextheader={"Fander"} modaltext={"Strona internetowa dla producenta wentylatorów komputerowych. Do wykonania strony został użyty szablon bootstrap, który został dostosowany do specyfikacji strony. Projekt graficzny + grafiki + wykonanie techniczne."} /> 
        <ModalPortfolio2 projectimgspec={"imgportfoliocyclone"} projectimgspecm={"imgportfoliocyclonemobile"}modalid={"modal7"} modaltextheader={"Cyclone"} modaltext={"Strona internetowa dla producenta obudów komputerowych. Do wykonania strony został użyty szablon bootstrap, który został dostosowany do specyfikacji strony. Projekt graficzny + grafiki + wykonanie techniczne."} />
        <ModalPortfolio2 projectimgspec={"imgportfoliohoronczyk"} projectimgspecm={"imgportfoliohoronczykmobile"}modalid={"modal8"} modaltextheader={"Horonczyk"} modaltext={"Strona internetowa stworzona na podstawie szablonu Bootstrap. Projekt graficzny + wykonanie techniczne."} /> 
        <ModalPortfolio2 
        projectimgspec={"imgportfoliojedefy"} 
        projectimgspecm={"imgportfoliojedefymobile"}
        modalid={"modal9"} modaltextheader={"Jedefy"} 
        modaltext={"Odtwarzacz internetowy napisany w technologii React JS"} /> 
      
       
        
    
        
        
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
