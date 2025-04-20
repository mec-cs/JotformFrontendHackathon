import React from 'react';
import { useCard } from '../../context/CardContext';
import { useNavigate } from 'react-router-dom';

const ShoppingCard: React.FC = () => {
  const { card, removeFromCard, updateQuantity, clearCard } = useCard();
  const navigate = useNavigate();

  console.log('ShoppingCard context:', card);
  console.log('localStorage:', localStorage.getItem('shopping_card'));

  const total = card.reduce((sum, item) => sum + Number(item.product.price) * item.quantity, 0);

  if (card.length === 0) {
    return (
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6 mt-8 text-center">
        <h2 className="text-amber-950 text-2xl font-bold mb-4">Your Card</h2>
        <p className="text-gray-500">Your card is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">Your Card</h2>
      <ul>
        {card.map(item => (
          <li key={item.product.pid} className="flex items-center justify-between border-b py-2">
            <div className="flex-1">
              <div className="font-semibold">{item.product.name}</div>
              <div className="flex items-center gap-2"><img src={JSON.parse(item.product.images)[0]} alt={item.product.name} width="75" height="75" /></div>
              <div className="text-gray-500 text-sm">Price: {item.product.price} x</div>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1 text-amber-800 bg-amber-500 rounded hover:bg-amber-200"
                onClick={() => updateQuantity(item.product.pid, Math.max(1, item.quantity - 1))}
                disabled={item.quantity <= 1}
              >-</button>
              <span className="text-amber-900 font-bold w-6 text-center">Item Count: {item.quantity}</span>
              <button
                className="px-3 py-1 text-amber-800 bg-amber-500 rounded hover:bg-amber-200"
                onClick={() => updateQuantity(item.product.pid, item.quantity + 1)}
              >+</button>
              <button
                className="ml-2 px-4 py-2 bg-amber-500 rounded hover:bg-amber-400 text-amber-800"
                onClick={() => removeFromCard(item.product.pid)}
              >Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-6">
        <span className="font-bold text-lg">Total:</span>
        <span className="font-bold text-xl text-emerald-900">{total} TL</span>
      </div>
      <div className="flex justify-end mt-4 gap-2">
        <button className="bg-amber-300 text-amber-800 px-4 py-2 rounded hover:bg-amber-500 mr-2" onClick={clearCard}>
          Clear Card
        </button>
        <button className="bg-emerald-700 text-white px-4 py-2 rounded hover:bg-emerald-900" onClick={() => navigate('/checkout')}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCard;
