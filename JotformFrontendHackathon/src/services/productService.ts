import { ProductApiResponse } from '../types/Product';
import { ENDPOINT_URL } from '../utils/util'

export async function fetchProducts(): Promise<ProductApiResponse> {
  const response = await fetch(ENDPOINT_URL);
  if (!response.ok) {
    throw new Error('Products NOT found!');
  }
  return await response.json();
}
