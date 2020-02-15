import React from 'react'

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
                        <img alt="img" src={image} />
                    </div>            
                    <div className="text">
                        <h3 className="title">{title}</h3>
                        <p className="description">{description}</p>
                    </div>
                    <div className="calculation">
                        <div className="count">
                            <div className="minus" onClick={this.handleDecrease}><i className="fas fa-minus"></i></div>
                            <div className="count-product">{counter}</div>
                            <div className="plus" onClick={this.handleIncrease}><i className="fas fa-plus"></i></div>
                        </div>
                        <div className="price">{price}</div>
                    </div>
                    <i className="remove-icon far fa-trash-alt" onClick={this.handleRemove}></i>
                </div>)
        )
    }
}

export default Product