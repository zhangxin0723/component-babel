import React, { Component } from 'react';
import './index.css'

class Select extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectList: props.selectList,
      title: props.children,
      isShow: false
    }
  }
  handlerSelectClick = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  handlerOptionClick = (item) => {
    this.setState({
      title: item,
      isShow: false
    })
  }
  render() {
    const { selectList, isShow } = this.state
    return (
      <div className='select-wrap'>
        <div className='select' onClick={() => { this.handlerSelectClick() }}>{this.state.title}</div>
        {
          isShow ? <div className='options'>
            {
              selectList.map((item, index) => {
                return <div className='option' onClick={() => { this.handlerOptionClick(item) }} key={index}>{item}</div>
              })
            }
          </div> : ''
        }
      </div>
    );
  }
}

export default Select;