import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/product/ProductList';
import ProductDetail from './components/product/ProductDetail';
import ShoppingCard from './components/shop-card/ShoppingCard';
import { CardProvider } from './context/CardContext';

function App() {
  return (
    <CardProvider>
      <Router>
        <div className="bg-gray-50 place-items-center justify-center">
          <header className="bg-white shadow p-4 flex items-center justify-between w-full">
            <h1 className="text-black text-2xl text-center text-primary flex-1">Form Products</h1>
            <a
              href="/card"
              className="ml-4 bg-amber-700 px-4 py-2 rounded font-semibold hover:bg-amber-500 transition">
              🛒 Cart
            </a>
          </header>
          <nav>
            
          </nav>
          <main className="container px-4 mt-10">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/product/:pid" element={<ProductDetail />} />
              <Route path="/card" element={<ShoppingCard />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CardProvider>
  );
}

export default App;
