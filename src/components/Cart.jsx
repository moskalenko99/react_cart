import React from 'react'
import Product from './Product'

class Cart extends React.Component{

    state = {
        sumPrice: 0
    }

    recalculateSum = () => {
        const { data } = this.props;
        var sum = 0;
        data.map(function(item){
            sum += item.cost;
        })
        sum = sum.toFixed(2);
        return sum;
    };

    render() {
        const { data } = this.props;
        return(
            <div className="container">
                {data.length > 0 ? data.map((item, index) => (
                    <Product key={item.id}  data={item} index={index} counter={this.props.counters[index]} onCount={this.props.onCount}/>
                )) : (
                    <p>Корзина пуста</p>
                )}
                <div className="buy">
                    <div className="final-price"> {this.recalculateSum()} </div>
                    <button className="btn-buy">BUY</button>
                </div>
            </div>
        )
    }
}

export default Cart