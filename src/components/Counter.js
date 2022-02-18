import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../redux/actions';
import { value, countReducer, CountProvider } from '../context/context';

export const Counter = () => {

const { value, countReducer } = useGlobalContext();
const counter = useSelector((state) => state.counterReducer.count);
// useSelector() allows you to extract data from the Redux store state, using a selector function
// useSelector takes a function with only state as argument. if you want to pass other variables you could use a currying approach as:
// currying means creating a function that returns another function. 
// Currying is an approach when functions receive one argument at a time. 
// currying example:
// const func = (a) => (b) => { ... } 
// export const selectAttachedByJobKey = (action) => (state) =>{
//   console.log("selecting material by job key",action);
//   console.log(action?.payload);
//   console.log(state);
//   return state.material.filter(x=>x.AttachedJobkey===action?.payload);
// }
const dispatch = useDispatch();
// useDispatch() hook returns a reference to the dispatch function from the Redux store. 

const handleIncrement = () => {
    dispatch(increment(1));
  };

    return (
      <CountProvider.consumer>
        {({state, dispatch}) => (
        <div>
            <h1>Counter {counter} {state.count} </h1>
            <button className='btnStyle' onClick={()=>handleIncrement()}>+</button>
            <button className='btnStyle' onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
        </div>
        )}
        </CountProvider.consumer>
    );
};