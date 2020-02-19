import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/fontawesome-free-regular';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

class Product extends React.Component{

    state = {
        isValid: true,
    }

    handleIncrease = () => {
        const {onCount, index, counter, recalculateSum} = this.props;
        onCount(index, counter + 1);
        recalculateSum();
    };
    
    handleDecrease = () => {
        const {onCount, index, counter, recalculateSum} = this.props;
        onCount(index, counter - 1);
        recalculateSum();
    };

    handleRemove = () => {
        this.setState({ isValid: false });
        const {data, recalculateSum} = this.props;
        data.cost = 0;
        
        recalculateSum();
    };

    render() {
        const { title, cost, description, image } = this.props.data;  
        const { counter } = this.props;
				let price = (cost * counter).toFixed(2);
        return(
            this.state.isValid  && (
                <div className="single-good">
                    <div className="thumbnail">
                        <img alt="img" src={image}/>
                    </div>            
                    <div className="text">
                        <h3 className="title">{title}</h3>
                        <p className="description">{description}</p>
                    </div>
                    <div className="calculation">
                        <div className="count">
														<FontAwesomeIcon className="minus" onClick={this.handleDecrease} icon={faMinus} />
                            <div className="count-product">
															{counter}
														</div>
														<FontAwesomeIcon className="plus" onClick={this.handleIncrease} icon={faPlus} />
                        </div>
                        <div className="price">{price}</div>
                    </div>
										<FontAwesomeIcon className="remove-icon" icon={faTrashAlt}  onClick={this.handleRemove} />
                </div>)
        )
    }
}

export default Product