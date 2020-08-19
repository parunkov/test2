import React from 'react';
import './App.scss';
import FoodsContainer from './components/Foods/FoodsContainer';
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="App__container">
          <FoodsContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
