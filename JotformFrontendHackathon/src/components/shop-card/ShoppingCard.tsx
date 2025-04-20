import React from 'react';
import { useCard } from '../../context/CardContext';
// import { useCheckout } from '../../context/CheckoutContext';

const ShoppingCard: React.FC = () => {
  const { card, removeFromCard, updateQuantity, clearCard } = useCard();
  // const { proceedToCheckout } = useCheckout();
  console.log('ShoppingCard context:', card);
  console.log('localStorage:', localStorage.getItem('shopping_card'));

  const total = card.reduce((sum, item) => sum + Number(item.product.price) * item.quantity, 0);

  if (card.length === 0) {
    return (
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6 mt-8 mb-10 text-center">
        <h2 className="text-amber-950 text-2xl font-bold mb-4">Your Card</h2>
        <p className="text-gray-500">Your card is empty.</p>
      </div>
    );
  }

  return (
    <div></div>
  );
};

export default ShoppingCard;
