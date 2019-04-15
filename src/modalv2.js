import React, { Component } from 'react';


class ModalPortfolio2 extends Component {
 
    state ={
        
        isSwitchOn:false,
        
    }
    
    render() {
        const isOn = this.state.isSwitchOn;
  
    return (
     
    <div className="ma text-black"id={this.props.modalid} ><a className="close" onClick={bodyChanger2} href="#containerportfolioid"></a>
       
    <div className="ma modal-text-div"><h2 className="h2section">{this.props.modaltextheader}</h2>
        <p className="psection">{this.props.modaltext}</p></div>
        <div className={isOn ? "imgportfolio1" : "imgportfoliomobile1"} alt="Portfolio" id={this.props.modalidimg} />
          <button onClick={() => this.setState({isSwitchOn: !isOn})}class="showmobile">{isOn ? 'mobile' : 'dyskop'}</button>
        </div>
   
  
    );
  }
}
      function bodyChanger2()
    {
     document.getElementsByTagName("BODY")[0].style.overflow = "auto";
    }




export default ModalPortfolio2;