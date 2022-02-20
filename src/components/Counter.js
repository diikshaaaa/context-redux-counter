import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../redux/actions';
import {value, countReducer, CountProvider, useGlobalContext }  from '../context/context';

export const Counter = () => {

const value = useGlobalContext();
console.log('value',value);
const counter = useSelector((state) => state.counterReducer.count);
const dispatch = useDispatch();
// useDispatch() hook returns a reference to the dispatch function from the Redux store. 

const handleIncrement = () => {
    dispatch(increment(1));
  };

  return(
    <div>
         <h1>Counter {counter} {value.state.count} </h1>
            <button className='btnStyle' onClick={()=>handleIncrement()}>+</button>
             <button className='btnStyle' onClick={() => value.dispatch({type: 'DECREMENT'})}>-</button>
         </div>
  )
    // return (
    //   <CountProvider.Consumer>
    //     {({state, dispatch}) => { 
    //       console.log('state',state, dispatch);
    //     return <div>
    //         <h1>Counter {counter} {state.count} </h1>
    //         <button className='btnStyle' onClick={()=>handleIncrement()}>+</button>
    //         <button className='btnStyle' onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
    //     </div>
    //     }}
    //     </CountProvider.Consumer>
    // );

};