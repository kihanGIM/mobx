import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider
import './index.css';
import App from './App';
import CounterStore from './stores/counter'; // 방금 만든 스토어 불러온다.

const counter = new CounterStore(); // 스토어 인스턴스를 만들고

ReactDOM.render(
  <Provider counter={counter}>
    {/* Provider 에 props 로 넣어준다. */}
    <App />
  </Provider>,
  document.getElementById('root')
);