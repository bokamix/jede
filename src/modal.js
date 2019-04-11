import React, { Component } from 'react';

class ModalPortfolio extends Component {
  render() {
    return (
     
    <div className="ma text-black"id={this.props.modalid} ><a class="close" onClick={bodyChanger2} href="#containerportfolioid"></a>
       
    <div className="ma modal-text-div"><h2 className="h2section">{this.props.modaltextheader}</h2>
        <p className="psection">{this.props.modaltext}</p></div>
        <img className="modealimg" src={this.props.ahref} alt="Portfolio"  />
        
        </div>
   
  
    );
  }
}
      function bodyChanger2()
    {
    var bodytake = document.getElementsByTagName("BODY")[0].style.overflow = "auto";
    }



export default ModalPortfolio;