import React, { Component } from 'react';

class ModalPortfolio extends Component {
  render() {
    return (
     
    <div className="ma"id={this.props.modalid} ><a href="#containerportfolioid">Close</a>{this.props.modaltext}
        <img className="modealimg" src={this.props.ahref} alt="Portfolio"  />
        
        </div>
   
  
    );
  }
}




export default ModalPortfolio;