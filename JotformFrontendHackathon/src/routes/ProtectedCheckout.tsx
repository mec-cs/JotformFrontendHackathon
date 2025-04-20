import React from 'react';
import { useCard } from '../context/CardContext';
import { Navigate } from 'react-router-dom';
import Checkout from '../components/checkout/Checkout';

const ProtectedCheckout: React.FC = () => {
  const { card } = useCard();
  // Eğer sepet boşsa, /card sayfasına yönlendir
  if (!card || card.length === 0) {
    return <Navigate to="/card" replace />;
  }
  return <Checkout />;
};

export default ProtectedCheckout;
