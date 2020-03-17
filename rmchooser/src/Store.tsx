import React, { useReducer } from 'react';
import { ReactComponent } from '*.svg';

interface IState {
  episodes: [];
  favorites: [];
}

interface IAction {
  type: string;
  payload: any;
}

const initialState: IState = {
  episodes: [],
  favorites: []
};

export const Store = React.createContext<IState | any>(initialState);

// your reducer function
// can modularize if gets big
function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    // when returning inside a reducer function, return the entire state using the spread operator and then the next argument will be the specific properties of the state that you want to update
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
}

export const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  console.log('STORE.TSX state from provider', state);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
