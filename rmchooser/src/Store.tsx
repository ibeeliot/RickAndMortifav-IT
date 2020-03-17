import React, { useReducer } from 'react';
import { ReactComponent } from '*.svg';
import * as int from './Interfaces';

export const Store = React.createContext<int.IState | any>(int.initialState);

// your reducer functionss
// can modularize if gets big
function reducer(state: int.IState, action: int.IAction): int.IState {
  switch (action.type) {
    // when returning inside a reducer function, return the entire state using the spread operator and then the next argument will be the specific properties of the state that you want to update
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
}

export const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, int.initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
