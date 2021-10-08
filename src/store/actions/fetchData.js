import axios from 'axios';
import { searchResults } from './actions';

const fetchData = (query) => {
	return async (dispatch) => {
		try {
			const { hits } = await axios
				.get(`http://hn.algolia.com/api/v1/search?query=${query}`)
				.then((res) => res.data);
			dispatch(searchResults(hits));
		} catch (err) {
			console.error(err);
		}
	};
};

export default fetchData;
