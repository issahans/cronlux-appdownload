import React, { createContext, useContext, useEffect, useReducer, type ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

interface CartContextType {
  state: CartState;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartAction =
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const calcTotals = (items: CartItem[]) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return { total, itemCount };
};

const sanitizeItems = (items: any[]): CartItem[] => {
  // Ensure each item has a quantity >= 1 and required fields
  return items
    .map((i) => ({
      ...i,
      quantity: Math.max(1, Number(i.quantity ?? 1)),
    }))
    .filter((i) => i && typeof i.id === 'string' && typeof i.price === 'number');
};

const initializer = (): CartState => {
  try {
    const raw = localStorage.getItem('cart');
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<CartState>;
      if (parsed && Array.isArray(parsed.items)) {
        const items = sanitizeItems(parsed.items);
        const { total, itemCount } = calcTotals(items);
        return { items, total, itemCount };
      }
    }
  } catch {
    // ignore parse errors and fall back to empty cart
  }
  return { items: [], total: 0, itemCount: 0 };
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existing = state.items.find((i) => i.id === action.payload.id);
      const items = existing
        ? state.items.map((i) =>
            i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...state.items, { ...action.payload, quantity: 1 }];
      const { total, itemCount } = calcTotals(items);
      return { items, total, itemCount };
    }
    case 'REMOVE_FROM_CART': {
      const items = state.items.filter((i) => i.id !== action.payload);
      const { total, itemCount } = calcTotals(items);
      return { items, total, itemCount };
    }
    case 'UPDATE_QUANTITY': {
      const qty = Math.max(0, Math.floor(action.payload.quantity));
      const items = state.items
        .map((i) => (i.id === action.payload.id ? { ...i, quantity: qty } : i))
        .filter((i) => i.quantity > 0);
      const { total, itemCount } = calcTotals(items);
      return { items, total, itemCount };
    }
    case 'CLEAR_CART':
      return { items: [], total: 0, itemCount: 0 };
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, undefined as unknown as CartState, initializer);

  // Persist to localStorage whenever cart changes
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(state));
    } catch {
      // ignore storage errors (e.g., private mode)
    }
  }, [state]);

  const addToCart = (product: Product) => dispatch({ type: 'ADD_TO_CART', payload: product });
  const removeFromCart = (productId: string) =>
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  const updateQuantity = (productId: string, quantity: number) =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  return (
    <CartContext.Provider value={{ state, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};