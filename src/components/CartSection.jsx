import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Trash2, Plus, Minus, CreditCard, Send } from 'lucide-react';

const CartSection = ({ cartItems, onUpdateQuantity, onRemove, onConfirm }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const gst = subtotal * 0.12;
  const delivery = subtotal > 0 ? 20 : 0;
  const total = subtotal + gst + delivery;

  if (cartItems.length === 0) return null;

  return (
    <section id="cart-summary" className="py-24 px-8 bg-surface-container-low border-t border-outline-variant/10">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="space-y-2">
            <h2 className="text-4xl font-headline font-bold text-primary flex items-center gap-4">
              <ShoppingCart className="w-10 h-10 text-tertiary-fixed-dim" />
              Review Your Order
            </h2>
            <p className="text-on-surface-variant">Review your selections before confirming via WhatsApp.</p>
          </div>
          <div className="bg-primary-container text-on-primary px-6 py-2 rounded-full text-sm font-bold">
            {cartItems.length} Items Selected
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence mode="popLayout">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white rounded-3xl p-6 shadow-sm border border-outline-variant/10 flex flex-col sm:flex-row items-center gap-6 group hover:shadow-md transition-shadow"
                >
                  <div className="w-24 h-24 bg-surface-container rounded-2xl overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  <div className="flex-grow text-center sm:text-left space-y-1">
                    <span className="text-[10px] font-bold text-tertiary-fixed-dim uppercase tracking-widest">{item.category}</span>
                    <h4 className="text-xl font-bold text-primary">{item.name}</h4>
                    <p className="text-sm text-on-surface-variant font-medium">Unit Price: ₹{item.price}</p>
                  </div>

                  <div className="flex flex-col items-center sm:items-end gap-3">
                    <div className="flex items-center bg-surface-container-low rounded-xl border border-outline-variant/10 overflow-hidden">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-3 hover:bg-surface-container transition-colors text-primary"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 font-black text-primary min-w-[3rem] text-center">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-3 hover:bg-surface-container transition-colors text-primary"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="flex items-center gap-2 text-error text-xs font-bold hover:bg-error/5 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      REMOVE
                    </button>
                  </div>

                  <div className="text-2xl font-black text-primary sm:min-w-[100px] text-right">
                    ₹{item.price * item.quantity}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-white rounded-3xl p-8 shadow-xl border border-outline-variant/10 space-y-8">
              <h3 className="text-2xl font-headline font-bold text-primary border-b border-outline-variant/10 pb-4">Order Summary</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between text-on-surface-variant font-medium">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-on-surface-variant font-medium">
                  <span>GST (12%)</span>
                  <span>₹{gst.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-on-surface-variant font-medium">
                  <span>Delivery Fee</span>
                  <span>₹{delivery.toFixed(2)}</span>
                </div>
                <div className="h-px bg-outline-variant/10 my-4" />
                <div className="flex justify-between text-3xl font-black text-primary">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <button 
                  onClick={onConfirm}
                  className="w-full bg-[#d1a154] text-primary py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#f1be6e] transition-all flex items-center justify-center gap-3 shadow-[0_20px_40px_-10px_rgba(209,161,84,0.3)] hover:scale-[1.02] active:scale-95"
                >
                  <Send className="w-6 h-6" />
                  Confirm on WhatsApp
                </button>
                <p className="text-[10px] text-center text-on-surface-variant font-bold uppercase tracking-tighter">
                  Secure Checkout • No Payment Required Now
                </p>
              </div>
              
              <div className="bg-surface-container-low p-4 rounded-2xl flex gap-4 items-center border border-outline-variant/5">
                <div className="w-10 h-10 bg-primary-container rounded-full flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-5 h-5 text-tertiary-fixed-dim" />
                </div>
                <p className="text-xs text-on-surface-variant font-medium">
                  Cash on Delivery available city-wide. Pay after your medicine is delivered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
