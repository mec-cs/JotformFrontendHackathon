import React, { useState } from 'react';
import { useCard } from '../../context/CardContext';
import { useNavigate } from 'react-router-dom';
import { API_KEY, FORM_ID } from '../../utils/util';

const Checkout: React.FC = () => {
  const { card, clearCard } = useCard();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    address: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const total = card.reduce((sum, item) => sum + Number(item.product.price) * item.quantity, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const submission: Record<string, any> = {
        '65': form.fullName,
        '66': form.address,
      };
      card.forEach((item, idx) => {
        submission[`63[${idx}][id]`] = item.product.pid;
        submission[`63[${idx}][quantity]`] = item.quantity;
      });
      const res = await fetch(`https://api.jotform.com/form/${FORM_ID}/submissions?apiKey=${API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ submission }),
      });
      const data = await res.json();
      if (!data.content) throw new Error('Order submission failed');
      clearCard();
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6 mt-8 text-center">
        <h2 className="text-amber-950 text-2xl font-bold mb-4">Thank you for your order!</h2>
        <p className="text-amber-700">We will contact you soon.</p>
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
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-amber-700 block font-semibold mb-1">Full Name</label>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
            className="bg-amber-200 w-full border px-3 py-2 rounded text-amber-950"
          />
        </div>
        <div>
          <label className="text-amber-700 block font-semibold mb-1">Address</label>
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            className="bg-amber-200 w-full border px-3 py-2 rounded text-amber-950"
          />
        </div>
        <div className="flex justify-between items-center mt-6">
          <span className="font-bold text-lg">Total:</span>
          <span className="font-bold text-xl text-emerald-900">{total} TL</span>
        </div>
        {error && <div className="text-red-500 text-center">{error}</div>}
        <button
          type="submit"
          className="w-full bg-amber-700 text-white py-2 rounded hover:bg-amber-800 transition"
          disabled={loading}
        >
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
