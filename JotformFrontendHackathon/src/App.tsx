import React from 'react';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="bg-gray-50">
      <header className="bg-white shadow p-4">
        <h1 className="text-black text-2xl text-center text-primary">Products</h1>
      </header>
      <main className="container px-4">
        <ProductList />
      </main>
    </div>
  );
}

export default App;
