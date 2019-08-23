import React, { Component } from 'react';
import './index.css'

class InputNumber extends Component {
  constructor(props) {
    super(props)
    this.state = {
      min: props.min,
      max: props.max,
      val: props.defaultValue,
      isShow: false
    }
  }
  handlerMouseEnter = () => {
    this.setState({
      isShow: true
    })
  }
  handlerMouseLeave = () => {
    this.setState({
      isShow: false
    })
  }
  handlerAddClick = () => {
    const num = this.state.val + 1
    if (this.state.val === this.state.max) {
      this.setState({
        val: this.state.max
      })
    } else {
      this.setState({
        val: num
      })
    }
  }

  handlerSubClick = () => {
    let num = this.state.val - 1
    if (this.state.val === this.state.min) {
      this.setState({
        val: this.state.min
      })
    } else {
      this.setState({
        val: num
      })
    }
  }

  handleBlur = (e) => {
    if(e.target.value > this.state.max) {
      this.setState({
        val: this.state.max
      })
    }
  }

  render() {
    const { val, isShow } = this.state
    return (
      <div className='input-numver-box'
        onMouseOver={this.handlerMouseEnter} 
        onMouseLeave={this.handlerMouseLeave}
      >
        <input
          type="text"
          placeholder={val}
          onBlur={() => this.props.onChange(val)}
        />
        {
          isShow ?
            <div className='info'>
              <button className="add" onClick={() => { this.handlerAddClick() }}>+</button>
              <button className="sub" onClick={() => { this.handlerSubClick() }}>-</button>
            </div> :
            ''
        }
      </div>
    );
  }
}

export default InputNumber;