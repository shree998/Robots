import React from 'react';
import Card from './Cards';



function List({element}){
	const ListItem = element.map((user, i) => 
			{
			 return(
					<Card key={i} id = {element[i].id} name = {element[i].name} email = {element[i].email}/>
					)
					});
			 return(
					<div>
					{ListItem}
					</div>
			);
} 
 
export default List;