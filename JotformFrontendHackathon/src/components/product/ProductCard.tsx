import React from 'react';
import { Product } from '../../types/Product';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

// Some products have multiple images, create a image carousel - scrollable
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  let imageUrl = '';
  try {
    const images = JSON.parse(product.images) as string[];
    if (Array.isArray(images) && images.length > 0) {
      imageUrl = images[0];
    }
  } catch (error) {
    console.error('Error, could not parse images: ', error);
    imageUrl = '';
  }

  return (
    <div
      className="bg-amber-25 rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition"
      onClick={() => navigate(`/product/${product.pid}`)}
    >
      {imageUrl && (
        <img src={imageUrl} alt={product.name} width="100%" height="100%" className="w-full h-40 object-cover rounded mb-2" />
      )}
      <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-1">{product.description}</p>
      <p className="text-emerald-950 font-bold text-xl">Price: {product.price}</p>
    </div>
  );
};

export default ProductCard;
