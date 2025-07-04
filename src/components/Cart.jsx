import React from 'react';
import { MyCart } from '../Context/CartContext';
import './cart.css';
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const { item, setItem } = MyCart();

  const totalprice = item.reduce((acc, val) => acc + val.price * val.quantity, 0);

  const handledelete = (index) => {
    setItem(item.filter((_, i) => i !== index));
  };

  const updateQuantity = (index, newQty) => {
    if (newQty < 1) {
      handledelete(index);
      return;
    }
    const updatedItems = [...item];
    updatedItems[index].quantity = newQty;
    setItem(updatedItems);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-heading">🛒 Your Shopping Cart</h2>

      {item.length === 0 ? (
        <p className="empty-cart">Your cart is empty. Browse products and start shopping!</p>
      ) : (
        <>
          <div className="cart-grid">
            {item.map((v, i) => (
              <div className="cart-card" key={i}>
                <img src={v.image} alt={v.title} className="cart-img" />

                <div className="cart-info">
                  <h3 className="product-title">{v.title}</h3>
                  <p className="product-price">Price: <strong>${v.price.toFixed(2)}</strong></p>

                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(i, v.quantity - 1)}>-</button>
                    <span>{v.quantity}</span>
                    <button onClick={() => updateQuantity(i, v.quantity + 1)}>+</button>
                  </div>
                </div>

                <MdDelete className="delete-icon" onClick={() => handledelete(i)} />
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>Total Items: {item.length}</h3>
              <h2>Total: ${totalprice.toFixed(2)}</h2>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
