import React from 'react';

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>${item.price.toFixed(2)}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
}

export default CartItem;
