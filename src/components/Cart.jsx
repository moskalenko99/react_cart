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
    }

    renderCart = () => {
        const { data } = this.props;
        let productTemplate = null;

        if(data.length){

            productTemplate = data.map(function(item){
                item.count = item.count || 1;
                return <Product key={item.id}  data={item} />
            })
        }else{
            productTemplate = <p>Корзина пуста</p>
        }
        
        return productTemplate;
    }

    render() {
        return(
            <div className="container">
                {this.renderCart()}
                <div className="buy">
                    <div className="final-price"> {this.recalculateSum()} </div>
                    <button className="btn-buy">BUY</button>
                </div>
            </div>
        )
    }
}

export default Cart