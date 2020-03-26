import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('counter')
@observer
class Counter extends Component {
  // **** 함수형태로 파라미터를 전달해주면 특정 값만 받아올 수 있다.
  // @inject(stores => ({
  // number: stores.counter.number,
  // increase: stores.counter.increase,
  // decrease: stores.counter.decrease,
  //}))
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h1>{counter.number}</h1>
        <button onClick={counter.increase}>+1</button>
        <button onClick={counter.decrease}>-1</button>
      </div>
    );
  }
}

export default Counter;