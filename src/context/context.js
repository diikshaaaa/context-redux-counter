import React from 'react'

const CountContext = React.createContext();

function countReducer(state, action) {
  switch (action.type) {
    case 'DECREMENT': {
      return {count: state.count - 1}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function CountProvider({children}) {

  const [state, dispatch] = React.useReducer(countReducer, {count: 0})
  const value = {state, dispatch}

  return (
  <CountContext.Provider value={value}>
    {children}
  </CountContext.Provider>
  )
};

export const useGlobalContext = () => {
  return useContext(CountContext)
}

export {CountContext, CountProvider};