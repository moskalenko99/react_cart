import React from 'react';
import Product from './../../components/Product';
import { Link } from "react-router-dom";
import './style.sass';

class Cart extends React.Component {
  render() {
    const {
      products,
      counters,
      onChangeCount: handleChangeCount,
      onRemove: handleRemove
    } = this.props;

    return (<div className="container">
      {products.length > 0 ? products.map((item, index) => (
        <Product
          key={`Product-${item.id}`}
          id={item.id}
          data={item}
          index={index}
          counter={counters[index]}
          onChangeCount={handleChangeCount}
          onRemove={handleRemove}
        />
      )) : <p>Корзина пуста</p>}
      <div className="buy">
        <div className="final-price">
          {
            (products.reduce((result, product, index) => {
              result += product.price * counters[index];
              return result;
            }, 0)).toFixed(2)
          }
        </div>
        <Link to="/shipping">
          <button className="btn-buy">BUY</button>
        </Link>
      </div>
    </div>);
  }
}

export default Cart
