import React, { useState, useEffect } from "react";
import NavBar from "./navbar";

export const Main = () => {
  const [items, setItems] = useState([]);
  const [currentItems, setCurrent] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const addToTotal = (price) => {
    setTotal(total + price);
    setTotalItems(totalItems + 1);
    
  };



  const removeFromTotal = (price) => {
    setTotal(total - price);
    setTotalItems(totalItems - 1);
  };

  const addToCart = (item) => {

    if (cart.includes(item)) {
      alert(JSON.stringify(item.title) + " is already your cart. If you wish to select multiple, you can do so when checking out.")
      return
    }
    setCart([...cart, item]);
    addToTotal(item.price)
  };

  const removeFromCart = (e) => {
    setCart(cart.filter((item) => item.title !== e));
  };

  const handleClick = (index) => {
    document.getElementById(index).textContent = "Added to cart";
    document.getElementById(index).disabled = "true";
  };

  const showMens = () => {
    setCurrent(items.filter((items) => items.category === "men's clothing"));
  };

  const showWomens = () => {
    setCurrent(items.filter((items) => items.category === "women's clothing"));
  };

  const showJewelry = () => {
    setCurrent(items.filter((items) => items.category === "jewelery"));
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => response.json())
      // .then((data) => setItems(_.filter(data, ["category", "electronics"])));
      // replace code below with the above if switching to electronics store. keep in mind you will have to rewrite some code to filter by computer part.
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="App">
      <div className="shopping">
        <button className="buttons" onClick={showMens}>
          Mens
        </button>
        <button className="buttons" onClick={showWomens}>
          Womens
        </button>
        <button className="buttons" onClick={showJewelry}>
          Jewelry
        </button>

        <ul className="nav-list">
          <span
            id="cart"
            className="material-symbols-outlined"
            onClick={() => {
              if (
                document.querySelector(".checkout").style.display === "block"
              ) {
                document.querySelector(".checkout").style.display = "none";
              } else
                document.querySelector(".checkout").style.display = "block";
            }}
          >
            shopping_cart
            <p className="cartTotal">{totalItems}</p>
            <p>Order Total: ${total.toFixed(2)}</p>
          </span>
        </ul>
        <section className="cardContainer">
          {currentItems.map((item) => (
            <div key={item.id} className="productCard">
              <img
                width={"100px"}
                height={"100px"}
                src={item.image}
                alt={item.title}
              />
              <div className="cardDec"></div>
              <p>{item.title}</p>

              <p>${item.price}</p>
              <button
                className="buttons"
                id={item.id}
                onClick={() => {
                  addToCart(item);
                  handleClick(item.id);
                }}
              >
                Add to cart
              </button>
            </div>
          ))}
        </section>
      </div>
      <NavBar
        cart={cart}
        total={total}
        totalItems={totalItems}
        addToCart={addToCart}
        addToTotal={addToTotal}
        setCart={setCart}
        removeFromTotal={removeFromTotal}
        removeFromCart={removeFromCart}
        quantity={1}
      />
    </div>
  );
}
