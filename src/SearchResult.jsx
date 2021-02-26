import React from 'react';
import faker from 'faker';

const SearchResult = (props) => {
	const img= `https://source.unsplash.com/300x300/?${props.name}`;
	return(
		<>
			<div className="main center">
				<div className="searchbox">
					<img src={img} alt="holidaying" />
					<div className="search-content center">
						<h1>{props.name}</h1>
					</div>
				</div>
			</div>
		</>
	);
}

export default SearchResult;