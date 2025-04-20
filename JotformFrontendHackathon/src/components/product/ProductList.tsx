import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../services/productService';
import { Product } from '../../types/Product';
import ProductCard from '../product/ProductCard';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then(res => {
      if (res.responseCode === 200 && res.message.includes("success") && res.content?.products) {
        setProducts(res.content.products);
      }

      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="text-center py-16">Products loading...</div>;
  }

  if (products.length === 0) {
    return <div className="text-center py-16">No products found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15">
      {products.map(product => (
        <ProductCard key={product.pid} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
