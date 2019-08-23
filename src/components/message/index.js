import React, { Component } from 'react';
import './index.css'

class TM_FILENAME_BASE extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: props.type,
      title: props.title,
      content: props.content,
      styles: {
        background: '#fff',
        top: 0,
        left: 0
      },
      staus: false
    }
  }
  handlerSuccess = (type) => {
    //获取浏览器的宽高
    const clientX = document.documentElement.clientWidth
    const clientY = document.documentElement.clientHeight
    if (type === 'success') {
      this.setState({
        styles: {
          background: 'green',
          top: (clientY - 30) / 10 + 'px',
          left: (clientX - 200) / 2 + 'px'
        },
        staus: true
      })
      setTimeout(() => {
        this.setState({
          staus: false
        })
      }, 2000)
    } else if (type === 'error') {
      this.setState({
        styles: {
          background: 'red',
          top: (clientY - 30) / 10 + 'px',
          left: (clientX - 200) / 2 + 'px'
        },
        staus: true
      })
      setTimeout(() => {
        this.setState({
          staus: false
        })
      }, 2000)
    } else if (type === 'warning') {
      this.setState({
        styles: {
          background: 'yellow',
          top: (clientY - 30) / 10 + 'px',
          left: (clientX - 200) / 2 + 'px'
        },
        staus: true
      })
      setTimeout(() => {
        this.setState({
          staus: false
        })
      }, 2000)
    }
  }
  handlerClose = () => {
    this.setState({
      staus: false
    })
  }
  render() {
    return (
      <div>
        <button onClick={() => this.handlerSuccess(this.state.type)} className='btn'>{this.state.title}</button>
        {this.state.staus ? <div className='message' style={this.state.styles}>{this.state.content} <button className='close' onClick={this.handlerClose}>x</button></div> : ''}
      </div>
    );
  }
}

export default TM_FILENAME_BASE;