import React, { useReducer, useContext, useEffect } from 'react';
import './App.css';
import { Store } from './Store';
import axios, { AxiosResponse } from 'axios';
import * as int from './Interfaces';

export default function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  // console.log(
  //   'FROM APP.TSX: just destructured state and dispatch',
  //   state,
  //   'and ',
  //   dispatch
  // );
  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const URL =
      'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
    const fetchedData = await fetch(URL);
    const newData = await fetchedData.json();

    // const dataJSON = await data.json();
    // console.log(dataJSON._embedded.episodes);
    // console.log('data returned: ', newData._embedded.episodes);
    return dispatch({
      type: 'FETCH_DATA',
      payload: newData._embedded.episodes
    });
  };
  return (
    <div className='App'>
      {console.log('FROM APP.TSX: this is state', state)}
      <header className='App-header'></header>
      <h1>Pick your favorite episode!</h1>
      <section>
        {state.episodes.map((episode: int.IEpisode, index: number) => {
          {
            console.log(episode);
          }
          return (
            <section key={`episode-${episode.id}`}>
              <img
                src={`${episode.image.medium}`}
                alt={`Rick & Morty ${episode.name}`}
              />
              <section>
                {`Session: ${episode.season} Number: ${episode.number}`}
              </section>
            </section>
          );
        })}
      </section>
      <div>
        <span>
          <button>+</button>
          <button>-</button>
          <button>0</button>
        </span>
      </div>
    </div>
  );
}
