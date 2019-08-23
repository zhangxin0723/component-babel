import React, { Component } from 'react';

class TapItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ind: props.ind
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      ind: nextProps.ind
    })
  }
  render() {
    return (
      <div>
        {this.state.ind}
      </div>
    );
  }
}

export default TapItem;