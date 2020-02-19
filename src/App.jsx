import React, {Component} from 'react';
import _ from 'lodash';
import {hot} from 'react-hot-loader/root';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import apple from './images/apple.png';
// import lemon from './images/lemon.png';
// import cherry from './images/cherry.png';
// import products from './components/assets/cart.json';

class App extends Component {
  state = {
    counters: [],
    sumPrice: 0
  };

  products = [];

  componentDidMount = () => {
    fetch('http://localhost:3001/cart')
      .then(response => response.json())
      .then(products => {
        this.products = products;

        this.setState({
          counters: products.reduce((counters, product) => {
            counters.push(1);
            return counters;
          }, [])
        });
      })
  }

  handleChangeCount = (index, value) => {
    const { counters } = this.state;

    if (value > 0 && value <= 50) {
      counters[index] = value;
    }

    this.setState({ counters });
  };

  handleRemove = (index) => {
    console.log('index', index);
    this.products = _.remove(this.products, (item, i) => i !== index);
    this.setState({ counters: _.remove(this.state.counters, (item, i) => i !== index) });
  };

  // recalculateSum = () => {
  //   const {
  //     products,
  //     counters
  //   } = this.state;
  //
  //   var sum = 0;
  //   products.map((item, index) => {
  //     let total = item.cost * counters[index];
  //     sum += total || 0;
  //   })
  //   sum = sum.toFixed(2);
  //   this.setState({sumPrice: sum});
  // };

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage/>
          </Route>
          <Route path="/cart">
            <CartPage
              products={this.products}
              counters={this.state.counters}
              onChangeCount={this.handleChangeCount}
              onRemove={this.handleRemove}
            />
          </Route>
          <Route path="/shipping">
            <FormPage
              products={this.products}
              counters={this.state.counters}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default hot(App);
