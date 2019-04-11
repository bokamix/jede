import React, { Component } from 'react';
import CardPort from './cardportfolio.js';

import janiakmeble from './projekty/janiaksklep.png'
import spp from './projekty/sppagency.jpg'
import moststudio from './projekty/moststudio.jpg'
class PortfolioEl extends Component {
  render() {
      
      var user =  {
           name: "",
         projekt: "",
            ahref: "",
          modalid:"",
          modaltext:""
        
    };
    return (
        
<div>
           
      
        
        <div className="containerportfolio m-5 pb-5"> 
        
       
  
        <a href="#modal1"><div   className="itemcatalog"><CardPort name={"JaniakSklep"} ahref={janiakmeble} projekt={"Jede"} /></div></a>
        <a href="#modal2"> <div   className="itemcatalog"><CardPort name={"SPP"} ahref={spp} projekt={"Jede"} /></div></a>
        <a href="#modal3"><div   className="itemcatalog"><CardPort name={"Most"} ahref={moststudio} projekt={"Jede.pl"} /></div></a>
        <div className="itemcatalog"><CardPort name={"Food Aviator"} ahref={moststudio} projekt={"Jede.pl"} /></div>
        <div className="itemcatalog"><CardPort name={"kagufurniture"} ahref={moststudio} projekt={"Jede.pl"} /></div>
        <div className="itemcatalog"><CardPort name={"sakrosleep"} ahref={moststudio} projekt={"Jede.pl"} /></div>
        <div className="itemcatalog"><CardPort name={"wynajem ostrów"} ahref={moststudio} projekt={"Jede.pl"} /></div>
        <div className="itemcatalog"><CardPort name={"Horonczyk"} ahref={moststudio} projekt={"Jede.pl"} /></div>
   
        
        
    </div>
        </div>
    );
  }
}





export default PortfolioEl;