import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Router>
      <div className="bg-gray-50">
        
        <header className="bg-white shadow p-4">
          <h1 className="text-black text-2xl text-center text-primary">Products</h1>
        </header>
        
        <main className="container px-4">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:pid" element={<ProductDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
