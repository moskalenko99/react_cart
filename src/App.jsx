
import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import apple from './images/apple.png';
import lemon from './images/lemon.png';
import cherry from './images/cherry.png';
// import products from './components/assets/cart.json';

class App extends Component{

    state = {
        products: [
					{
						"id" : "11292",
						"title" : "1 Lorem ipsum dolor sit amet",
						"cost" : 12,
						"description" : "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						"image" : apple
					},
					{
						"id" : "11294",
						"title" : "2 Lorem ipsum dolor sit amet",
						"cost" : 16,
						"description" : "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						"image" : lemon
					},
					{
						"id" : "11295",
						"title" : "3 Lorem ipsum dolor sit amet",
						"cost" : 22,
						"description" : "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
						"image" : cherry
					}
				],
				counters: [],
				sumPrice: 0
		};
		
    constructor(...rest) {
        super(...rest);

        this.state.counters = this.state.products.map(() => {					
            return 1;
        });
    }


    handleCount = (index, value) => {
        const {counters} = this.state;
        
        if(value > 0 && value <= 50) {
            counters[index] = value;
        }
        
        this.setState({ counters });
		};

		recalculateSum = () => {
			const { products, counters } = this.state;
	
			var sum = 0;
			products.map((item, index) => {
					let total = item.cost * counters[index];
					sum += total || 0;
			})
			sum = sum.toFixed(2);
			this.setState({ sumPrice: sum });
		};

    render() {
        return(
						<Router>
							<Switch>
								<Route path="/" exact>
									<HomePage />
								</Route>
								<Route path="/cart">
									<CartPage 
										recalculateSum={this.recalculateSum}
										data={this.state.products} 
										counters={this.state.counters} 
										onCount={this.handleCount}
										sumPrice={this.state.sumPrice}
									/>
								</Route>
								<Route path="/shipping">
									<FormPage sumPrice={this.state.sumPrice}	/>
								</Route>
								</Switch>
						</Router>
        )
    }
}

export default hot(App);

// import React from "react";
// import { hot } from 'react-hot-loader/root';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
// import Navigation from './components/Navigation';
// import LoginPage from './pages/LoginPage';
// import HomePage from './pages/HomePage';

// class App extends React.Component {
//   render() {
//     return(
//       <Router>
//         <Navigation />
//         <Switch>
//             <Route path="/" exact>
//               <HomePage />
//             </Route>
//             <Route path="/login">
//               <LoginPage />
//             </Route>
//           </Switch>
//       </Router>
//     )
//   }
// }

// export default hot(App);
