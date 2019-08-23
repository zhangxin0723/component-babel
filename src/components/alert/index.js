import React, { Component } from 'react';
import './index.css'

class Alert extends Component {
  render() {
    const { message, type } = this.props
    const styles = {
      border: '',
      background: '',

    }
    if (type === 'success') {
      styles.border = '1px solid #B7EB8F'
      styles.background = '#F6FFED'
    } else if (type === 'error') {
      styles.border = '1px solid #FFA39E'
      styles.background = '#FFF1F0'
    } else if (type === 'warning') {
      styles.border = '1px solid #FFE58F'
      styles.background = '#FFFBE6'
    } else if (type === 'info') {
      styles.border = '1px solid #91D5FF'
      styles.background = '#E6F7FF'
    }
    return (
      <div className='alert' style={styles}>
        {message}
      </div>
    );
  }
}

export default Alert;