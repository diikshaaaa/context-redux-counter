import { createStore } from "redux";
// createStore (reducer, [preloadedState], [enhancer]) Creates a Redux store that holds the complete state tree of your app. There should only be a single store in your app
// createStore function, which returns a store object. We then pass this object to the react-redux Provider component, which is rendered at the top of our component tree.
import rootReducer from "../reducers";
// Redux uses a single root reducer function that accepts the current state (and an action) as input and returns a new state. 

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// You have to add a predefined statement: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// while creating the store to access the Redux DevTools.
);

export default store;

// responsibilities of store:
// 1. holds appication state
// 2. allows access to state via getState()
// 3. allows state to be updates via dispatch(action)
// 4. registers listeners via subscribe(listeners)
// 5. handles unregistering of listeners via the function returned by subscribe(listener) 