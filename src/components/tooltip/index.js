import React, { Component } from 'react';
import propTypes from 'prop-types';
import classNames from 'classname';
import './index.css';

class Tooltip extends Component {
  static propTypes = {
    placement: propTypes.string,
    title: propTypes.string.isRequired
  }
  static propDefault = {
    placement: 'top'
  }
  constructor (props) {
    super(props)
    this.state = {
      isShow: false
    }
  }
  handlerMouseover = () => {
    this.setState({
      isShow: true
    })
  }
  handlerMouseout = () => {
    this.setState({
      isShow: false
    })
  }
  render() {
    const {children, title, placement} = this.props
    return (
      <div
        onMouseOver={this.handlerMouseover}
        onMouseOut={this.handlerMouseout}
        className="tooltip-wrap"
      >文字提示
        <div 
          className={
            classNames({
              tooltip: true,
              [placement]: true
            })
          }
          style={{display: this.state.isShow ? 'block' : 'none' }}
        >{title}</div>
        {children}
      </div>
    );
  }
}

export default Tooltip;
