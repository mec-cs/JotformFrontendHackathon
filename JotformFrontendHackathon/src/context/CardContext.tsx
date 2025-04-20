import React, { createContext, useContext, useEffect, useState } from 'react';
import { Product } from '../types/Product';

type CardItem = {
  product: Product;
  quantity: number;
};

type CardContextType = {
  card: CardItem[];
  addToCard: (product: Product, quantity?: number) => void;
  removeFromCard: (pid: string) => void;
  updateQuantity: (pid: string, quantity: number) => void;
  clearCard: () => void;
};

const CardContext = createContext<CardContextType | undefined>(undefined);

const LOCAL_STORAGE_CARD_KEY = 'shopping_card';

export const CardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [card, setCard] = useState<CardItem[]>([]);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_CARD_KEY);
    if (stored) {
      setCard(JSON.parse(stored));
    }

    setInitialized(true);
    console.log('CardProvider mount, localStorage:', localStorage.getItem(LOCAL_STORAGE_CARD_KEY));
  }, []);

  useEffect(() => {
    if (initialized) {
      localStorage.setItem(LOCAL_STORAGE_CARD_KEY, JSON.stringify(card));
    }
  }, [card, initialized]);

  const addToCard = (product: Product, quantity: number = 1) => {
    setCard(prev => {
      const idx = prev.findIndex(item => item.product.pid === product.pid);
      if (idx > -1) {
        return prev.map(item =>
          item.product.pid === product.pid
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const removeFromCard = (pid: string) => {
    setCard(prev => 
      prev.filter(item => 
        item.product.pid !== pid
      )
    );
  };

  const updateQuantity = (pid: string, quantity: number) => {
    setCard(prev => 
      prev.map(item =>
        item.product.pid === pid ? { ...item, quantity } : item
      )
    );
  };

  const clearCard = () => setCard([]);

  return (
    <CardContext.Provider value={{ card, addToCard, removeFromCard, updateQuantity, clearCard }}>
      {children}
    </CardContext.Provider>
  );
};

export function useCard() {
  const ctx = useContext(CardContext);
  if (!ctx) throw new Error('useCard must be used within a CardProvider');
  return ctx;
}
