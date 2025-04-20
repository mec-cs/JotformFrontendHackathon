import { ProductApiResponse } from '../types/Product';

// All form structures are same, you can change form id
const FORM_ID = '251073796499978';

const API_KEY = 'eba19a5414d771ceec96c8b13980e264';
const ENDPOINT_URL = `https://api.jotform.com/form/${FORM_ID}/payment-info?apiKey=${API_KEY}`;

export async function fetchProducts(): Promise<ProductApiResponse> {
  const response = await fetch(ENDPOINT_URL);
  if (!response.ok) {
    throw new Error('Products NOT found!');
  }
  return await response.json();
}
