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
export const reducer = (state: IState, action: IAction): IState => {
	switch (action.type) {
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
