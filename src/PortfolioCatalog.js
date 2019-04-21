import React, { Component } from 'react';
import CardPort from './cardportfolio.js';

import janiakmeble from './projekty/imgprojectview/janiakview.jpg'
import spp from './projekty/imgprojectview/sppview.jpg'
import wynajemostrow from './projekty/imgprojectview/wynajemview.jpg'
import moststudio from './projekty/imgprojectview/mostview.jpg'
import sakrosleep from './projekty/imgprojectview/sakroview.jpg'
import fander from './projekty/imgprojectview/fanderview.jpg'
import cyclone from './projekty/imgprojectview/cycloneview.jpg'
import horonczyk from './projekty/imgprojectview/kanceview.jpg'
import m4y from './projekty/imgprojectview/m4yview.jpg'



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
        
       

        <a onClick={bodyChanger} href="#modal1"><div className="itemcatalog"><CardPort name={"JaniakSklep"} ahref={janiakmeble} projekt={"Jede"} /></div></a>
        <a onClick={bodyChanger} href="#modal2"> <div className="itemcatalog"><CardPort name={"SPP"} ahref={spp} projekt={"Jede"} /></div></a>
        <a onClick={bodyChanger} href="#modal3"><div className="itemcatalog"><CardPort name={"Most"} ahref={moststudio} projekt={"Jede.pl"} /></div></a>     
       
         <a onClick={bodyChanger} href="#modal7"><div className="itemcatalog"><CardPort name={"Cyclone"} ahref={cyclone} projekt={"Cyclone"} /></div></a>
        <a onClick={bodyChanger} href="#modal6"><div className="itemcatalog"><CardPort name={"Fander"} ahref={fander} projekt={"Fander"} /></div></a>
         <a onClick={bodyChanger} href="#modal8"><div className="itemcatalog"><CardPort name={"Horonczyk"} ahref={horonczyk} projekt={"Horonczyk"} /></div></a>
         <a onClick={bodyChanger} href="#modal5"><div className="itemcatalog"><CardPort name={"sakrosleep"} ahref={sakrosleep} projekt={"Sakro Sleep"} /></div></a>
         <a onClick={bodyChanger} href="#modal4"><div className="itemcatalog"><CardPort name={"Wynajem ostrów"} ahref={wynajemostrow} projekt={"wynajem"} /></div></a>
        <div className="itemcatalog"><CardPort name={"M4Y"} ahref={m4y} projekt={"M4Y"} /></div>
      
     
     
      
   
        
        
    </div>
        </div>
    );
  }
}

    
        
        function bodyChanger()
    {
    document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
    document.getElementById("modal1").style.overflow = "auto";
    document.getElementById("modal2").style.overflow = "auto";
    document.getElementById("modal3").style.overflow = "auto";
    document.getElementById("modal4").style.overflow = "auto";
    document.getElementById("modal5").style.overflow = "auto";
    document.getElementById("modal6").style.overflow = "auto";
    document.getElementById("modal7").style.overflow = "auto";
    document.getElementById("modal8").style.overflow = "auto";
    }
   



export default PortfolioEl;