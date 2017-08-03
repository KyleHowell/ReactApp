/* eslint-env jest */
import checkReducer from './check';
import {setCheck} from '../actions/check';

describe('check reducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = false;
  });

  describe('setCheck handling', () => {
    it('sets state to true when action payload is true', () => {
      const state = checkReducer(initialState, setCheck(true));

      expect(state).toBe(true);
    });

    it('sets state to false when action payload is false', () => {
      const state = checkReducer(initialState, setCheck(false));

      expect(state).toBe(false);
    });
  });
});
