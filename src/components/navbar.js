import React, { Component } from "react";

import "../style.css";
import { CartItem } from "./cartItem";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: props.cart,
      id: "",
      title: "",
      rating: "",
      image: "",
      quantity: 1,
      total: props.total,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(item) {
    this.props.addToTotal(item.price);
  }

  decrement(item) {
    this.props.removeFromTotal(item.price);
  }

  render() {
    const { cart } = this.props;
    return (
      <div className="checkout">
        {cart.map((item) => (
          <div key={item.id}>
            <CartItem
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              increment={this.increment}
              decrement={this.decrement}
              quantity={this.state.quantity}
              removeFromCart={this.props.removeFromCart}
            />
          </div>
        ))}
        <button
          className="cartBtn"
          onClick={() => {
            alert(
              "Thanks for shopping with us! Your total order comes to $" +
                this.props.total
            );
          }}
        >
          Checkout
        </button>
      </div>
    );
  }
}
export default NavBar;
