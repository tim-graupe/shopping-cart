import React, { Component } from "react";
import "../style.css";

export class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      price: props.price,
      key: props.key,
      title: props.title,
      image: props.image,
      quantity: props.quantity,
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem() {
    this.setState({
      quantity: this.state.quantity + 1,
    });
    this.props.increment(this.props);
  }

  removeItem() {
    this.setState({
      quantity: this.state.quantity - 1,
    });
    this.props.decrement(this.props);
  }

  render() {
    const { price, key, title, image } = this.state;
    return (
      <div>
        <div key={key} className="productCard">
          <img width={"100px"} height={"100px"} src={image} alt={title} />
          <div className="cardDec"></div>
          <p>{title}</p>
          <p>${price}</p>
          <button
            className="increment"
            onClick={() => {
              this.addItem();
            }}
          >
            +
          </button>
          <p>{this.state.quantity}</p>
          <button
            className="decrement"
            onClick={() => {
              if (this.state.quantity === 1) {
                this.props.removeFromCart(this.state.title);
              }
              this.removeItem();
            }}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}
