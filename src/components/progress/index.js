import React, { Component } from 'react';
import './index.css'

class Progress extends Component {
  render() {
    const { percent } = this.props
    const styles = {
      width: percent + '%'
    }
    return (
      <div className='progress-box'>
        <div className='progress'>
          <div className='progress-item' style={styles}></div> 
        </div>
        <span className='text'>{this.props.percent}%</span>
      </div>
    );
  }
}

export default Progress;