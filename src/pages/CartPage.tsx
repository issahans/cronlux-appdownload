import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart, type CartItem } from '../context/CartContext';
import Button from '../components/ui/Button';

const CartPage: React.FC = () => {
  const { state, updateQuantity, removeFromCart, clearCart } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-black mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">Discover our premium smart home devices and start building your collection.</p>
            <Link to="/">
              <Button className="bg-black text-white hover:bg-gray-800">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
            <button onClick={clearCart} className="text-red-600 hover:text-red-700 font-medium flex items-center">
              <Trash2 className="h-4 w-4 mr-2" />
              Clear Cart
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {state.items.map((item: CartItem, index: number) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-center space-x-6">
                    <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-100">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-black">{item.name}</h3>
                      <p className="text-gray-600 text-sm mt-1 line-clamp-2">{item.description}</p>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 rounded-lg border border-gray-300 hover:bg-gray-50"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="font-medium w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded-lg border border-gray-300 hover:bg-gray-50"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="text-right">
                          <div className="text-xl font-bold text-black">${(item.price * item.quantity).toFixed(2)}</div>
                          <div className="text-sm text-gray-500">${item.price} each</div>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg h-fit"
            >
              <h2 className="text-xl font-bold text-black mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({state.itemCount} items)</span>
                  <span>${state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${(state.total * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-xl font-bold text-black">
                    <span>Total</span>
                    <span>${(state.total * 1.08).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-black text-white hover:bg-gray-800">Proceed to Checkout</Button>
                <Link to="/">
                  <Button variant="secondary" className="w-full">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CartPage;