import React, { useReducer } from 'react';
import { ReactComponent } from '*.svg';

interface IState {
	episodes: Array<number>;
	favorites: Array<string>;
}

interface IAction {
	type: string;
	payload: any;
}

const initialState: IState = {
	episodes: [1, 2, 3],
	favorites: []
};

export const Store = React.createContext<IState | any>(initialState);

// your reducer function
// can modularize if gets big
export const reducer = (state: IState, action: IAction): IState => {
	switch (action.type) {
		// when returning inside a reducer function, return the entire state using the spread operator and then the next argument will be the specific properties of the state that you want to update
		case 'FETCH_DATE':
			return { ...state, episodes: action.payload };
		default:
			return state;
	}
};

export const StoreProvider = (props: any): JSX.Element => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>
	);
};
