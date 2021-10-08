import React from 'react';

function SearchResults({ results, searchQuery }) {
	const filteredResults =
		results.length &&
		results.filter((hit) =>
			hit.title.toLowerCase().includes(searchQuery.toLowerCase())
		);

	return (
		<div>
			<div className="results-container">
				{filteredResults.length > 0
					? filteredResults.map((hit, index) => {
							return (
								<table key={index}>
									{hit.title} (<a href={hit.url}>{hit.url}</a>)
									<tbody>
										<small>
											{hit.points} points | {hit.author} | {hit.num_comments}{' '}
											comments
										</small>
									</tbody>
								</table>
							);
					  })
					: ''}
			</div>
		</div>
	);
}

export default SearchResults;
