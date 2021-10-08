import React from 'react';
import '../App.css';
import fetchData from '../store/actions/fetchData';
import { connect } from 'react-redux';

class History extends React.Component {
	constructor(props) {
		super(props);
		this.getHistory = this.getHistory.bind(this);
	}

	getHistory(e) {
		this.props.fetchData(e.target.value);
	}
	render() {
		const { searches } = this.props;

		return (
			<div className="history">
				{searches.length > 0
					? searches.map((prevSearch) => {
							if (typeof prevSearch === 'string') {
								return (
									<div className="search-term-container">
										<div className="search-term">
											<a
												href="/search"
												value={prevSearch}
												onClick={this.getHistory}
											>
												{prevSearch}
											</a>
										</div>
									</div>
								);
							}
					  })
					: 'Your search history is empty'}
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		searches: state.searches,
	};
};

const mapDispatch = (dispatch) => {
	return {
		fetchData: (query) => dispatch(fetchData(query)),
	};
};

export default connect(mapState, mapDispatch)(History);
