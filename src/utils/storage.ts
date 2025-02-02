const CART_STORAGE_KEY = 'cart-state';

export const loadCartState = () => {
  try {
    const serializedState = localStorage.getItem(CART_STORAGE_KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading cart state:', err);
    return undefined;
  }
};

export const saveCartState = (state: unknown) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(CART_STORAGE_KEY, serializedState);
  } catch (err) {
    console.error('Error saving cart state:', err);
  }
};