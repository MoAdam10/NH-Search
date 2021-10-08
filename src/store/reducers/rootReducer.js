import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { SEARCH, SEARCH_RESULTS } from '../actions/actions';

const initialState = {
	searches: [],
	results: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH:
			return {
				...state,
				searches: [...state.searches, action.text],
			};
		case SEARCH_RESULTS:
			return {
				...state,
				results: action.payload,
			};
		default:
			return state;
	}
};

export default createStore(rootReducer, applyMiddleware(thunk));
