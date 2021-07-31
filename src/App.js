// import './App.css';
import React from 'react';
import CounterContainer from './Study/containers/CounterContainer';
import TodosContainer from './Study/containers/TodosContainer'

const App= () => {
  return (
  <div>
      <CounterContainer/>
      <hr />
      <TodosContainer />
  </div>
  );
}

export default App;
