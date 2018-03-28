import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers';
import thunk from 'redux-thunk';

const logger = store => next => action => {
  //console.log("dispatching", action);
  let result = next(action);
  //console.log("next state", store.getState());
  return result;
};

export const store = createStore(
  reducer, applyMiddleware(logger, thunk)
);