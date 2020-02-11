import React from 'react'

class Product extends React.Component{
    static defaultProps = {
        count: 1
    };
    handleIncrease = () => {
        this.props.onCount(this.props.index, this.props.counter + 1);
    };
    render() {
        const { title, cost, description, image, count } = this.props.data;  

        return(
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
                        <div className="minus"><i className="fas fa-minus"></i></div>
                        <div className="count-product">{this.props.counter}</div>
                        <div className="plus" onClick={this.handleIncrease}><i className="fas fa-plus"></i></div>
                    </div>
                    <div className="price">{cost}</div>
                </div>
                <i className="remove-icon far fa-trash-alt"></i>
            </div>
        )
    }
}

export default Product