import React, { Component } from 'react';

class ModalPortfolio extends Component {
  render() {
    return (
     
    <div className="ma"id={this.props.modalid} ><a class="close" onClick={bodyChanger2} href="#containerportfolioid"></a>{this.props.modaltext}
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