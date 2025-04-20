import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProducts } from '../services/productService';
import { Product } from '../types/Product';

const ProductDetail: React.FC = () => {
  const { pid } = useParams<{ pid: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts().then(res => {
      const found = res.content.products.find(p => p.pid === pid);
      setProduct(found || null);
      setLoading(false);
    });
  }, [pid]);

  if (loading) {
    return <div className="text-center py-16">Loading...</div>;
  }

  if (!product) {
    return (
      <div className="text-center py-16 text-red-500">
        Product NOT found.
        <button className="block mt-4 underline text-blue-700" onClick={() => navigate(-1)}>
          Go back to product list
        </button>
      </div>
    );
  }

  let imageUrl = '';
  try {
    const images = JSON.parse(product.images);
    if (Array.isArray(images) && images.length > 0) {
      imageUrl = images[0];
    }
  } catch (error) {
    console.error('Error parsing images: ', error);
  }

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6 mt-8">
      <button className="mb-4 underline text-amber-700" onClick={() => navigate(-1)}>
        ← Back to Products
      </button>
      {imageUrl && (
        <img src={imageUrl} alt={product.name} className="w-full h-64 object-cover rounded mb-4" />
      )}
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-emerald-950 font-bold text-xl mb-4">Price: {product.price}</p>
      <button className="bg-emerald-600 text-amber-700 px-6 py-2 rounded hover:bg-emerald-700 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
