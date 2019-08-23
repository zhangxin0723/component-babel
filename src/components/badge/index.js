import React, { Component } from 'react';
import './index.css'

class Badge extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: props.count,
    }
  }
  componentWillMount() {
    if(this.props.count > this.props.overflowCount){
      this.setState({
        num: `${this.props.overflowCount}+`
      })
    }
  } 
  render() {
    const styles = {
      display: this.props.count > 0 ? 'inline-block' : 'none' 
    }
    return (
      <div className='badge'>
        <div className="dot" style={styles}>
          {this.state.num}
        </div>
      </div>
    );
  }
}

export default Badge;