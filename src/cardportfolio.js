import React, { Component } from 'react';

class CardPort extends Component {
  render() {
    return (
      <div className="card">
  <img className="classimg" src={this.props.ahref} alt="Avatar"  />
  <div className="container123">
    <h4><b>{this.props.name}</b></h4> 
    <p>{this.props.projekt}</p> 
  </div>
</div>    
    );
  }
}




export default CardPort;