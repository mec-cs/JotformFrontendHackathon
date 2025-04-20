// connectedCategories-Products, images, options are arrays in string

export interface Product {
  cid: string;
  connectedCategories: string;
  connectedProducts: string;
  corder: string;
  customPrice: string;
  customPriceSource: string;
  description: string;
  fitImageToCanvas: string;
  hasExpandedOption: string;
  hasQuantity: string;
  hasSpecialPricing: string;
  icon: string;
  images: string;
  isLowStockAlertEnabled: string;
  isStockControlEnabled: string;
  lowStockValue: string;
  name: string;
  options: string;
  order: string;
  paymentUUID: string;
  period: string;
  pid: string;
  price: string;
  recurringtimes: string;
  required: string;
  selected: string;
  setupfee: string;
  showSubtotal: string;
  stockQuantityAmount: string;
  trial: string;
}

export interface ProductApiResponse {
  responseCode: number;
  message: string;
  content: {
    question_id: string;
    products: Product[];
  };
  duration: string;
  info?: null;
}
