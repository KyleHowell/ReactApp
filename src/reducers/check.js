import actions from '../actions/actions';
import {handleActions} from 'redux-actions';

const initialState = {
  backgroundColor: 'blue',
  checked: false
};

const reducer = handleActions(
  {
    [actions.setCheck]: (state, action) => ({
      ...state,
      checked: action.payload
    }),
    [actions.setBackgroundColor]: (state, action) => ({
      ...state,
      backgroundColor: action.payload
    })
  },
  initialState
);

export default reducer;
