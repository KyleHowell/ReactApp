import fsaThunk from 'fsa-redux-thunk';
import reducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';

const middleware = [fsaThunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
