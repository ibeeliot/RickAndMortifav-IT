import React, { useReducer, useContext } from 'react';
import './App.css';
import { Store } from './Store';

function App() {
	const store = useContext(Store);
	return (
		<div className='App'>
			<header className='App-header'></header>
			<h1>Pick your favorite episode!</h1>
			<h1>{}</h1>
			<div>
				{store.episodes ? (
					<div>
						<h1>{store.episodes}</h1>
					</div>
				) : (
					<div>
						<h1>episodes DOES NOT exist yet</h1>
					</div>
				)}
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
