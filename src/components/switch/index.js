import React, { Component } from 'react';
import './index.css'

class Switch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flag: true
    }
  }
  handlerClick = () => {
    this.setState({
      flag: !this.state.flag
    })
    this.props.onChange(this.state.flag)
  }
  render() {
    const styles = {
      background: '#BFBFBF'
    }
    const flagStyle = {
      float: 'left'
    }
    if (!this.state.flag) {
      styles.background = '#1890FF'
      flagStyle.float = 'right'
    } else {
      styles.background = '#BFBFBF'
      flagStyle.float = 'left'
    }
    return (
      <div className='switch-wrap' style={styles} onClick={() => { this.handlerClick() }}>
        <div className="flag" style={flagStyle}></div>
      </div>
    );
  }
}

export default Switch;