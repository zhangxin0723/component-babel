import React, { Component } from 'react';
import './index.css'

class BackTop extends Component {
  handlerClick = () => {
    document.documentElement.scrollTop = 0
  }
  render() {
    return (
      <div className='back-top' onClick={() => {this.handlerClick()}}>
        ↑
      </div>
    );
  }
}

export default BackTop;