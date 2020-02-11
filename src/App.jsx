import React from 'react'
import Cart from './components/Cart'
import product from './components/assets/cart'

class App extends React.Component{

    state = {
        product: product,
    }

    render() {
        return(
            <React.Fragment>
                <Cart data={this.state.product} />
            </React.Fragment>
        )
    }
}

export default App