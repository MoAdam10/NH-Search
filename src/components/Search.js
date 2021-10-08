import React from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { search } from '../store/actions/actions';
import fetchData from '../store/actions/fetchData';
import SearchResults from './SearchResults';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchQuery: '',
			loading: false,
		};
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.props.fetchData();
	}

	handleInput(e) {
		this.setState({
			searchQuery: e.target.value,
			loading: true,
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.fetchData(this.state.searchQuery);
		this.props.search(this.state.searchQuery);
	}

	render() {
		const { results } = this.props;
		const { searchQuery } = this.state;

		return (
			<div className="search">
				<form onSubmit={this.handleSubmit}>
					<input
						type="search"
						placeholder="Search..."
						value={searchQuery}
						onChange={this.handleInput}
					></input>
					<button type="submit" className="search-btn">
						Search
					</button>
				</form>
				<div>
					<SearchResults results={results} searchQuery={searchQuery} />
				</div>
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		searches: state.searches,
		results: state.results,
	};
};

const mapDispatch = (dispatch) => {
	return {
		search: (text) => {
			dispatch(search(text));
		},

		fetchData: (query) => dispatch(fetchData(query)),
	};
};

export default connect(mapState, mapDispatch)(Search);
