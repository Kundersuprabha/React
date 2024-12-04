import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './action';
import PasswordGenerator from './PasswordGenerator';
import TodoList from './TodoList'
import './App.css';

function App() {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <TodoList />
      {/* <PasswordGenerator /> */}
      {/*
      // Counter application
       <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button> 
      */}
    </div>
  );
}

export default App;
