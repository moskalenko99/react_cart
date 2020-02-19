import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/fontawesome-free-regular';
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons'

class Product extends React.Component {

  state = {
    isValid: true
  }

  handleIncrease = () => {
    this.props.onChangeCount(this.props.index, this.props.counter + 1);
  };

  handleDecrease = () => {
    this.props.onChangeCount(this.props.index, this.props.counter - 1);
  };

  handleRemove = () => {
    this.props.onRemove(this.props.index);
  };

  render() {
    const {title, price, description, image} = this.props.data;
    const {counter} = this.props;

    return (this.state.isValid && (
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
            <FontAwesomeIcon className="minus" onClick={this.handleDecrease} icon={faMinus}/>
            <div className="count-product">
              {counter}
            </div>
            <FontAwesomeIcon className="plus" onClick={this.handleIncrease} icon={faPlus}/>
          </div>
          <div className="price">{(price * counter).toFixed(2)}</div>
        </div>
        <FontAwesomeIcon className="remove-icon" icon={faTrashAlt} onClick={this.handleRemove}/>
      </div>
    ));
  }
}

export default Product
