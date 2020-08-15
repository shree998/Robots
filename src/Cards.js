/*import React, { Component } from 'react';

class Hello extends Component{
	render(){
		return (
			<div>
			<h1 className="f1 tc">Hello World </h1> 
			<p className="tc">{this.props.message}</p>
			</div>
			  );
	}
}

export default Hello;*/

import React from 'react';

function card({name, id, email}) {
	
		return(
			<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="robot" src={`https://robohash.org/${id}`}></img>
				<h1>{name}</h1>
				<p>{email}</p>
			</div>
		);
	
}

export default card;