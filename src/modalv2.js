import React, { Component } from 'react';


class ModalPortfolio3 extends Component {
 
    state ={
        
        isSwitchOn:true,
        projectImgSpec:this.props.projectimgspec,
        projectImgSpecm:this.props.projectimgspecm,
  
        
    }
    
    render() {
        const isOn = this.state.isSwitchOn;
        const projectImgSpec =this.state.projectImgSpec;
        const projectImgSpecm =this.state.projectImgSpecm;
  
    return (
     
    <div className="ma text-black"id={this.props.modalid} ><a className="close" onClick={bodyChanger2} href="#containerportfolioid"></a>
       
    <div className="ma modal-text-div"><h2 className="h2section">{this.props.modaltextheader}</h2>
        <p className="psection">{this.props.modaltext}</p></div>
        <div className={isOn ? projectImgSpec : projectImgSpecm} alt="Portfolio" id={this.props.modalidimg} />
          <button onClick={() => this.setState({isSwitchOn: !isOn})}className="showmobile">{isOn ? 'mobile' : 'dyskop'}</button>
        </div>
   
  
    );
  }
}

window.onhashchange = function() {
document.getElementsByTagName("BODY")[0].style.overflow = "auto";
}

      function bodyChanger2()
    {
     document.getElementsByTagName("BODY")[0].style.overflow = "auto";
    }




export default ModalPortfolio3;