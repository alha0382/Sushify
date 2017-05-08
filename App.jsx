import React from 'react';
import ReactDOM from 'react-dom'; 
import NavBar from './NavBar.jsx';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Home from './Home.jsx';
import Sushis from './Sushis.jsx';
import About from './About.jsx';


class App extends React.Component{
	//jsx is a special syntax extension for javascript -> looks like html

	render(){
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path={"/"} component={Home} />
					<Route exact path={"/sushis"} component={Sushis} />
					<Route exact path={"/about"} component={About} />
				</Switch>

				
			</BrowserRouter>
		)
	}

}

ReactDOM.render(<App/>, document.getElementById('app')); //creating hello tag in 

