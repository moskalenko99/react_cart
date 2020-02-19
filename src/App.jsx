
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
// import apple from './images/apple.png';
// import lemon from './images/lemon.png';
// import cherry from './images/cherry.png';
// import products from './components/assets/cart.json';

class App extends Component{

    state = {
        products: [],
				counters: [1,1,1,1],
				sumPrice: 0
		};
		
    constructor(...rest) {
        super(...rest);
				
        this.state.counters = [1,1,1,1];
		}

		componentDidMount = () => {
			fetch('http://localhost:3001/cart')
				.then(response => response.json())
				.then(products => this.setState({ products }))
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
