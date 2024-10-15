import React from "react";

const Search = ({ handleSearchNote }) => {
	return (
		<div className="search">
			<form>
				<input
					onChange={(event) => handleSearchNote(event.target.value)}
					type="search"
					placeholder="search for a keyword..."
				/>
			</form>
		</div>
	);
};

export default Search;