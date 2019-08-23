import React, { Component } from 'react';
import './index.css'

class carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentInd: 0,
      right: 0
    }
  }
  handleClick = (index) => {
    this.setState({
      currentInd: index,
      right: 400 * index
    })
  }
  componentDidMount() {
    setInterval(() => {
      if (this.state.currentInd === 3) {
        this.setState({
          currentInd: 0,
          right: 0
        })
      } else {
        this.setState({
          currentInd: this.state.currentInd + 1,
          right: this.state.right + 400
        })
      }
    }, 3000)
  }
  render() {
    const { currentInd, right } = this.state
    const styles = {
      right: right
    }
    return (
      <div className='carousel-wrap'>
        <div className='carousel' style={styles}>
          {
            this.props.children.map((item, index) => {
              return <item.type key={index} className='carousels'>{item.props.children.props.children}</item.type>
            })
          }
        </div>
        <ul className='current-box'>
          {
            this.props.children.map((item, index) => {
              return <li className={index === currentInd ? 'current current-active' : 'current'} key={index} onClick={() => { this.handleClick(index) }}></li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default carousel;