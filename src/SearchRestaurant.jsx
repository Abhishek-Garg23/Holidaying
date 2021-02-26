import React, { useState } from 'react';
import SearchResult from './SearchResult';

const SearchRestaurant = () => {
	const [content, setContent] = useState("");
	const inputEvent= (event) => {
		const data = event.target.value;
		setContent(data);
	};

	return(
		<>
			<section className="search" id="SearchRestaurant">
				<div className="title">
					<h2 className="titleText"><span>S</span>earch <span>F</span>ood <span>M</span>enu</h2>
					<p>Search your Favourite Food Here!</p>
				</div>
				<div className="searchForm">
					<form>
						<div className="inputBox">
							<input 
								type="text" 
								placeholder="Search your Favourite Dish" 
								value={content}
								onChange={inputEvent} 
							/>
							{content === "" ? null : <SearchResult name={content} />}
						</div>
					</form>
				</div>
			</section>
		</>
	);
}

export default SearchRestaurant;