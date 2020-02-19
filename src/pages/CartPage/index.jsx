import React from 'react';
import Product from './../../components/Product';
import {
	Link
} from "react-router-dom";
import './style.sass';

class Cart extends React.Component{
	
	componentDidMount = () => {
		this.props.recalculateSum();
	}

	render() {
		const { data, counters, onCount, recalculateSum, sumPrice } = this.props;
		return(
			<div className="container">
				{data.length > 0 ? data.map((item, index) => (
					<Product id={item.id}  data={item} index={index} counter={counters[index]} onCount={onCount} recalculateSum={recalculateSum}/>
				)) : (
					<p>Корзина пуста</p>
				)}
				<div className="buy">
				<div className="final-price"> {sumPrice}</div>
					<Link to="/shipping" sumPrice={sumPrice}><button className="btn-buy">BUY</button></Link>
				</div>
			</div>
		)
	}
}

export default Cart