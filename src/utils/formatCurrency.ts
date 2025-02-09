export const VAT_RATE = 0.05; // 5% VAT rate

export const formatPrice = (price: number, options?: { includeTax?: boolean }): string => {
  const formattedPrice = `${price.toFixed(1)} AED`;
  return options?.includeTax ? `${formattedPrice} incl. taxes` : `${formattedPrice} excl. taxes`;
};

export const calculateHT = (priceTTC: number): number => {
  return priceTTC / (1 + VAT_RATE);
};

export const calculateTTC = (priceHT: number): number => {
  return priceHT * (1 + VAT_RATE);
};