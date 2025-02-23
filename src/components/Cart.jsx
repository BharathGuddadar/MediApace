import React from "react";
import "../css/Cart.css"; // Add CSS for styling
import Navbar from "./Navbar";

const Cart = () => {
  // Sample cart items
  const [cartItems, setCartItems] = React.useState([
    { id: 1, name: "Paracetamol", quantity: 2, price: 10 },
    { id: 2, name: "Vitamin C", quantity: 1, price: 15 },
    { id: 3, name: "Ibuprofen", quantity: 3, price: 8 },
  ]);

  // Calculate total amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  // Function to remove an item from the cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <>
    <Navbar/>
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              <span className="item-name">{item.name}</span>
              <span className="item-quantity">Qty: {item.quantity}</span>
              <span className="item-price">${item.price.toFixed(2)}</span>
            </div>
            <div className="item-total">
              ${(item.quantity * item.price).toFixed(2)}
            </div>
            <button
              className="remove-button"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <span>Total Amount:</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
    </>
  );
};

export default Cart;