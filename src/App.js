//Latest React syntax
/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

//Syntax that Andrei uses:
/*import React from 'react';
import logo from './logo.svg';
import './App.css';
 
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
 
export default App;*/


import React, {Component} from 'react';
import List from './CardList';
import Search from './SearchBar';
import { robots } from './robots.js';
import './App.css'
import Scroll from './Scroll.js';

class App extends Component{
	constructor(){
		super()
		this.state = {
			robot : robots,
			searchField: ''
		}
	}   
	
	onSearchChange = (event) => {
		this.setState({ searchField : event.target.value})
		console.log(event.target.value);
	}
	
	componentDidMount(){
		/*fetch('http://jsonplaceholder.typicode.com/users')
			.then(response =>response.json())
			.then(users => this.setState({robot : users}));*/
	}
	
	render(){
		const filteredRobots = this.state.robot.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
		})
		
		
		return(
				<div className= "tc">
				<h1 className="font">Robofriends</h1>
				<Search searchChange ={this.onSearchChange}/>
				<Scroll>
				<List element={filteredRobots}/>
				</Scroll>
				</div>
	);
	}
	
}

export default App;