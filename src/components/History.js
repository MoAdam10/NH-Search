import React from 'react';
import { connect } from 'react-redux';
import '../App.css';
import fetchData from '../store/actions/fetchData';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.getSearchHistory = this.getSearchHistory.bind(this);
  }

  getSearchHistory(e) {
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
                        onClick={this.getSearchHistory}
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

const mapState = (state) => ({
  searches: state.searches,
});

const mapDispatch = (dispatch) => ({
  fetchData: (query) => dispatch(fetchData(query)),
});

export default connect(mapState, mapDispatch)(History);
