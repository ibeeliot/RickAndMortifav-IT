import React, { useReducer, useContext, useEffect } from 'react';
import './App.css';
import { Store } from './Store';
// import axios from 'axios';

export default function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  console.log(
    'FROM APP.TSX: just destructured state and dispatch',
    state,
    'and ',
    dispatch
  );
  React.useEffect(() => {
    !state && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const URL =
      'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
    const data = await fetch(URL);
    const dataJSON = await data.json();
    // const dataJSON = await data.json();
    // console.log(dataJSON._embedded.episodes);
    console.log('data returned: ', dataJSON);
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes
    });
  };
  return (
    <div className='App'>
      {console.log('FROM APP.TSX: this is state', state)}
      <header className='App-header'></header>
      <h1>Pick your favorite episode!</h1>
      <div>
        <div>
          <h1>
            {/* {state.episodes ? (
              <div>
                <h1>{state.episodes}</h1>
              </div>
            ) : (
              <div>
                <h3>episodes DOES NOT exist yet</h3>
              </div>
            )} */}
          </h1>
        </div>
        <span>
          <button>+</button>
          <button>-</button>
          <button>0</button>
        </span>
      </div>
    </div>
  );
}
