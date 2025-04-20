import React from 'react';
import { useCard } from '../../context/CardContext';
import { useNavigate } from 'react-router-dom';

const ShoppingCard: React.FC = () => {
  const { card, removeFromCard, updateQuantity, clearCard } = useCard();
  const navigate = useNavigate();

  const total = card.reduce((sum, item) => sum + Number(item.product.price) * item.quantity, 0);

  if (card.length === 0) {
    return (
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6 mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <button className="mt-6 bg-amber-700 text-white px-4 py-2 rounded" onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6 mt-8">
      <button
        className="mb-6 bg-gray-200 hover:bg-gray-300 text-amber-950 px-3 py-1 rounded transition"
        onClick={() => navigate(-1)}
        type="button"
      >
        ← Back
      </button>
      <h2 className="text-amber-950 text-2xl font-bold mb-4">Shopping Cart</h2>
      <ul className="divide-y divide-gray-200">
        {card.map((item, idx) => (
          <li key={item.product.pid} className="py-4 flex items-center justify-between">
            <div>
              <div className="font-semibold text-amber-950">{item.product.name}</div>
              <div className="text-sm text-gray-500">{item.product.price} TL x {item.quantity}</div>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1 text-amber-800 bg-amber-500 rounded hover:bg-amber-200"
                onClick={() => updateQuantity(item.product.pid, Math.max(1, item.quantity - 1))}
                disabled={item.quantity <= 1}
              >-</button>
              <span className="text-amber-900 font-bold w-6 text-center">{item.quantity}</span>
              <button
                className="px-3 py-1 text-amber-800 bg-amber-500 rounded hover:bg-amber-200"
                onClick={() => updateQuantity(item.product.pid, item.quantity + 1)}
              >+</button>
              <button
                className="ml-2 bg-red-200 text-red-700 px-2 py-1 rounded hover:bg-red-300 transition"
                onClick={() => removeFromCard(item.product.pid)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-6">
        <span className="font-bold text-lg">Total:</span>
        <span className="font-bold text-xl text-emerald-900">{total} TL</span>
      </div>
      <div className="flex gap-2 mt-6">
        <button
          className="bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-800 transition flex-1"
          onClick={() => navigate('/checkout')}
        >
          Checkout
        </button>
        <button
          className="bg-gray-300 text-amber-950 px-4 py-2 rounded hover:bg-gray-400 transition flex-1"
          onClick={clearCard}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default ShoppingCard;
