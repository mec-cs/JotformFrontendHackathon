import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from '../components/product/ProductList';
import ProductDetail from '../components/product/ProductDetail';
import ShoppingCard from '../components/shop-card/ShoppingCard';
import ProtectedCheckout from './ProtectedCheckout';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<ProductList />} />
    <Route path="/product/:pid" element={<ProductDetail />} />
    <Route path="/card" element={<ShoppingCard />} />
    <Route path="/checkout" element={<ProtectedCheckout />} />
  </Routes>
);

export default AppRoutes;
