import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

  it('handles SET_STATE', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: Map({
        jobs: Map({
          list: List.of('front', 'back', 'r&d')
        })
      })
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      jobs: {
        list: List.of('front', 'back', 'r&d')
      }
    }));
  });
  
  it('handles SET_STATE with plain js payload', () => {
    const initialState = Map();
    const action = {
      type: 'SET_STATE',
      state: {
        jobs: {
          list: ['front', 'back', 'r&d']
        }
      }
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      jobs: {
        list: ['front', 'back', 'r&d']
      }
    }));
  });
  
  it('handles SET_STATE without initial state', () => {
    const action = {
      type: 'SET_STATE',
      state: {
        jobs: {
          list: ['front', 'back', 'r&d']
        }
      }
    };
    
    //initialState is undefined
    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      jobs: {
        list: ['front', 'back', 'r&d']
      }
    }));
  });

});