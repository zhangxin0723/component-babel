import React, { Component } from 'react';
import './index.css'

class Popover extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSow: true,
      content: props.content.props.children
    }
  }
  handlerClick = () => {
    this.setState({
      isShow: !this.state.isSow
    })
  }
  render() {
    const { title } = this.props
    const { isShow, content } = this.state
    return (
      <div className='propver'>
        {
          this.props.children
            ? <this.props.children.type onClick={() => { this.handlerClick() }}>{this.props.children.props.children}</this.props.children.type>
            : this.props.title
        }
        <div>
          {
            isShow
              ? <div className='count'>
                <div className="title">{title}</div>
                {
                  <this.props.content.type>
                    {
                      content.map((item, index) => {
                       return  console.log(item)
                      })
                    }
                  </this.props.content.type>
                }
              </div>
              : ''
          }
        </div>
      </div>
    );
  }
}

export default Popover;