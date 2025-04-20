import React, { useState } from 'react';
import { useCard } from '../../context/CardContext';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const { card } = useCard();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
  });

  // Implement a form, which will submit details to the Jotform API
  // dont forget to use e.preventDefault in form submission button :)

  return <div></div>;
};

export default Checkout;
