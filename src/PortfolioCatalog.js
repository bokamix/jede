import React, { Component } from 'react';
import CardPort from './cardportfolio.js';


class PortfolioEl extends Component {
  render() {
      
      var user =  {
           name: "",
         projekt: "",
            ahref: ""
        
    };
    return (
       <div className="containergreen">        
        <div   className="itemcatalog"><CardPort name={"Damian"} ahref={"https://www.w3schools.com/howto/img_avatar.png"} projekt={"Jede"} /></div>
        <div   className="itemcatalog"><CardPort name={"Damian"} ahref={"https://www.w3schools.com/howto/img_avatar.png"} projekt={"Jede"} /></div>
        <div   className="itemcatalog"><CardPort name={"Ela"} ahref={"https://images.pexels.com/photos/1776906/pexels-photo-1776906.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} projekt={"Jede.pl"} /></div>
        <div   className="itemcatalog"><CardPort name={"Ela"} ahref={"https://images.pexels.com/photos/1776906/pexels-photo-1776906.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} projekt={"Jede.pl"} /></div>
        <div   className="itemcatalog"><CardPort name={"Damian"} ahref={"https://www.w3schools.com/howto/img_avatar.png"} projekt={"Jede"} /></div>
        <div   className="itemcatalog"><CardPort name={"Damian"} ahref={"https://www.w3schools.com/howto/img_avatar.png"} projekt={"Jede"} /></div>
      
        
        </div>
    );
  }
}





export default PortfolioEl;