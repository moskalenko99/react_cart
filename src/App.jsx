import React from 'react'
import Cart from './components/Cart'
import products from './components/assets/cart'

class App extends React.Component{

    state = {
        products: products,
        counters: [],
    };

    constructor(...rest) {
        super(...rest);

        this.state.counters = products.map(() => {
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

    render() {
        return(
                <Cart 
                    data={this.state.products} 
                    counters={this.state.counters} 
                    onCount={this.handleCount}
                />
        )
    }
}

export default App