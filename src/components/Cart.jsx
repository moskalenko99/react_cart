import React from 'react'
import Product from './Product'

class Cart extends React.Component{

    state = {
        sumPrice: 0
    }
    
    recalculateSum = () => {
        const { data, counters } = this.props;

        var sum = 0;
        data.map((item, index) => {
            let total = item.cost * counters[index];
            sum += total || 0;
        })
        sum = sum.toFixed(2);
        this.setState({ sumPrice: sum });
    };
    
    componentDidMount = () => {
        this.recalculateSum();
    }

    render() {
        const { data, counters, onCount } = this.props;
        return(
            <div className="container">
                {data.length > 0 ? data.map((item, index) => (
                    <Product id={item.id}  data={item} index={index} counter={counters[index]} onCount={onCount} recalculateSum={this.recalculateSum}/>
                )) : (
                    <p>Корзина пуста</p>
                )}
                <div className="buy">
                <div className="final-price"> {this.state.sumPrice}</div>
                    <button className="btn-buy">BUY</button>
                </div>
            </div>
        )
    }
}

export default Cart