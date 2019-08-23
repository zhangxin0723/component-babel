import React, { Component } from 'react';
import TapItem from './TapItem'
import './index.css'

class Tap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tapList: props.tap,
      tapInd: 0
    }
  }

  hanlerTapClick = ({ index }) => {
    this.setState({
      tapInd: index
    })
  }

  RanderNav = (tapList) => {
    return (
      <div className='tap-wrap'>
        {
          tapList.map((item, index) => {
            return <div className={this.state.tapInd === index ? 'tap-li tap-active' : 'tap-li'} key={index} onClick={() => { this.hanlerTapClick({ index }) }}>{item}</div>
          })
        }
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.RanderNav(this.state.tapList)}
        <TapItem ind={this.state.tapInd}/>        
      </div>
    );
  }
}

export default Tap;