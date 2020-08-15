import React from 'react';


function Search({searchChange}){
	
	return(
			<div>
			<input type="search" placeholder="search robo friends" onChange={searchChange}></input>
				
			</div>
	);
}

export default Search; 