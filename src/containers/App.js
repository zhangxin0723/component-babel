import React, { Component } from 'react';
import '../common/index.css'
import Tap from '../components/tap/Tap'
import Message from '../components/message'
import Select from '../components/select'
import InputNumber from '../components/inputNumber'
import Badge from '../components/badge'
import Carousel from '../components/carousel'
import Alert from '../components/alert'
import Progress from '../components/progress'
import Rate from '../components/rate'
import BackTop from '../components/backTop'
import Tooltip from '../components/tooltip'
import Switch from '../components/switch'
import Popover from '../components/popover'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tap: ['首页', '生活用品', '食品', '美妆', '家电', '食品', '美妆', '家电'],
      selectList: ['lucy', 'happy', 'look', 'see']
    }
  }
  onInpChange = (value) => {
    console.log(value)
  }
  onSwitch = (val) => {
    console.log(val)
  }
  render() {
    const content = (
      <div>
        <p>content</p>
        <p>content</p>
        <p>content</p>
      </div>
    )
    return (
      <div className="App">
        <Tap tap={this.state.tap} />

        <Message title='success' type='success' content='这是一条成功信息' />
        <Message title='error' type='error' content='这是一条错误信息' />
        <Message title='warning' type='warning' content='这是一条警告信息' />

        <Select selectList={this.state.selectList}>请选择</Select>


        <InputNumber min={1} max={10} defaultValue={3} onChange={this.onInpChange} />
        <Badge count={100} overflowCount={99} />

        <Carousel>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>

        <Rate></Rate>

        <Alert message='alert' type='success'></Alert>
        <Alert message='warning' type='warning'></Alert>
        <Alert message='error' type='error'></Alert>
        <Alert message='info' type='info'></Alert>
        
        <Progress percent={50} bgColor='skyblue'></Progress>

        <BackTop></BackTop>

        <Tooltip title="Prompt Text" placement="topTop"></Tooltip>

        <Switch onChange={this.onSwitch}></Switch>

        <Popover content={content} title='title' trigger='click'>
          <button>Click me</button>
        </Popover>
      </div>
    );
  }
}

export default App;
