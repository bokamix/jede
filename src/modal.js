import React, { Component } from 'react';


class ModalPortfolio extends Component {
  render() {
    return (
     
    <div className="ma text-black"id={this.props.modalid} ><a className="close" onClick={bodyChanger2} href="#containerportfolioid"></a>
       
    <div className="ma modal-text-div"><h2 className="h2section">{this.props.modaltextheader}</h2>
        <p className="psection">{this.props.modaltext}</p></div>
        <img className="modealimg" src={this.props.ahref} alt="Portfolio" id={this.props.modalidimg} />
          
        </div>
   
  
    );
  }
}
      function bodyChanger2()
    {
     document.getElementsByTagName("BODY")[0].style.overflow = "auto";
    }

window.onhashchange = function() {
document.getElementsByTagName("BODY")[0].style.overflow = "auto";
}


export default ModalPortfolio;