import React from 'react';
import NavBar from './NavBar.jsx';
import {Link} from 'react-router-dom';


class Home extends React.Component {
	render(){
		return (
			<div>
			<header>
				<h1>Sushify</h1>
				</header>
			<NavBar/>
				
				
			</div>
		)
	}
}

export default Home; 

