// Action Types

export const SEARCH = 'SEARCH';
export const SEARCH_RESULTS = 'SEARCH_RESULTS';

// Action Creators
export const search = (text) => ({
  type: SEARCH,
  text,
});

export const searchResults = (payload) => ({
  type: SEARCH_RESULTS,
  payload,
});
