import React, { Component } from 'react';
import classnames from 'classname'
import './index.css'
class Rate extends Component {
  static defaultProps = {
    count: '☆',
    value: 0,
    len: 5
  }
  constructor(props) {
    super(props)
    this.state = {
      hoverIndex: -1,
      clickIndex: this.props.value || -1,
      isShow: false
    }
  }
  handlerMouseover = (index) => {
    this.setState({
      hoverIndex: index,
      isShow: true
    })
  }
  handlerMouseout = () => {
    this.setState({
      hoverIndex: -1
    })
  }
  handlerClick = (index) => {
    this.setState({
      clickIndex: index,
      isShow: false
    })
  }
  get renderlist() {
    const newArr = []
    for (let i = 0; i < this.props.len; i++) {
      newArr.push(<a key={i} className={classnames({
        HoverActive: this.state.hoverIndex >= i,
        ClickActive: this.state.clickIndex >= i && !this.state.isShow
      })}
        onMouseOver={() => { this.handlerMouseover(i) }}
        onMouseOut={this.handlerMouseout}
        onClick={() => { this.handlerClick(i) }}
      >{this.props.count}</a>)
    }
    return newArr
  }

  render() {
    return (
      <div className='rate'>
        {this.renderlist}
      </div>
    );
  }
}

export default Rate;