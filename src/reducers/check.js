import {setCheck} from '../actions/check';
import {handleActions} from 'redux-actions';

const initialState = false;

const check = handleActions(
  {
    [setCheck]: (state, action) => {
      state = action.payload;
      return state;
    }
  },
  initialState
);

export default check;
