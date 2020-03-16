import React, { useReducer, useContext, useEffect } from 'react';
import './App.css';
import { Store } from './Store';
// import axios from 'axios';

function App() {
	const { state, dispatch } = useContext(Store);

	useEffect(() => {
		state.episodes.length === 0 && fetchDataAction();
	});

	const fetchDataAction = async () => {
		const URL =
			'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
		const data = await fetch(URL);
		const dataJSON = await data.json();
		console.log('this is data coming through', dataJSON);
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
			<h1>{}</h1>
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

export default App;
