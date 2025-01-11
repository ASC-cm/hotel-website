import React, { useContext } from 'react';
import CartContext from '../Context/CartContext';
import CartItem from '../Components/CartItem';

function CartPage() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
}

export default CartPage;
