//Action Types

export const SEARCH = 'SEARCH';
export const SEARCH_RESULTS = 'SEARCH_RESULTS';

//Action Creators
export const search = (text) => {
	return {
		type: SEARCH,
		text,
	};
};

export const searchResults = (payload) => {
	return {
		type: SEARCH_RESULTS,
		payload,
	};
};
