import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DailyEssentials from './components/DailyEssentials';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';
import CartSection from './components/CartSection';
import PrescriptionUpload from './components/PrescriptionUpload';
import Footer from './components/Footer';
import PolicyModal from './components/PolicyModal';
import { sendOrderToWhatsApp } from './services/WhatsAppService';
import { Upload, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Rajesh Malhotra",
    role: "Regular Customer",
    text: "The only pharmacy where I can trust the medicine's authenticity. Their doorstep delivery has been a lifesaver for my parents during the pandemic. 40 years of trust is visible in their service.",
    rating: 5
  },
  {
    name: "Ananya Sharma",
    role: "Fitness Enthusiast",
    text: "Their wellness section is amazing. I get all my supplements here. The pharmacists are very knowledgeable and helped me understand my dosage schedule perfectly. Highly recommended!",
    rating: 5
  },
  {
    name: "Dr. Vikram Sethi",
    role: "Local Physician",
    text: "As a doctor, I always recommend Vijay Medical Store to my patients. Their storage standards (especially for temperature-sensitive drugs) are the best in the city. Truly a clinical atelier.",
    rating: 5
  },
  {
    name: "Priya Das",
    role: "New Mother",
    text: "The baby care range is extensive and they always have the latest Indian and international brands in stock. The WhatsApp ordering is so convenient when you have a toddler at home!",
    rating: 5
  }
];

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [policyModal, setPolicyModal] = useState({ isOpen: false, type: null });

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveItem(id);
      return;
    }
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleConfirmOrder = () => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const gst = subtotal * 0.12;
    const delivery = 20;
    sendOrderToWhatsApp(cartItems, subtotal + gst + delivery);
  };

  const handleScrollToPrescription = () => {
    document.getElementById('prescription')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openPolicy = (type) => {
    setPolicyModal({ isOpen: true, type });
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-primary-fixed selection:text-primary scroll-smooth">
      <Navbar 
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} 
        onCartClick={() => setIsCartOpen(true)}
        onSearchChange={setSearchQuery}
      />
      
      <main>
        <Hero />
        <DailyEssentials />
        <ProductGrid onAddToCart={handleAddToCart} searchQuery={searchQuery} />
        <CartSection 
          cartItems={cartItems} 
          onUpdateQuantity={handleUpdateQuantity}
          onRemove={handleRemoveItem}
          onConfirm={handleConfirmOrder}
        />
        <PrescriptionUpload />
        
        {/* Authentic Testimonials */}
        <section className="bg-surface-container-low py-32 px-8 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">Voices of Trust</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">Hear from our community of long-standing customers who rely on us for their daily well-being.</p>
            </div>
            <div className="flex overflow-x-auto gap-8 pb-12 no-scrollbar px-4 snap-x">
              {testimonials.map((t, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="min-w-[320px] md:min-w-[450px] bg-white p-10 rounded-3xl shadow-xl border border-outline-variant/10 text-left snap-center hover:shadow-2xl transition-shadow duration-500"
                >
                  <div className="flex gap-1 text-tertiary-fixed-dim mb-6">
                    {Array(t.rating).fill(0).map((_, idx) => (
                      <Star key={idx} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg text-primary italic leading-relaxed mb-8">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-4 border-t border-outline-variant/10 pt-6">
                    <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-on-primary font-black text-lg">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-primary text-xl">{t.name}</div>
                      <div className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Sticky FAB */}
      <motion.button
        initial={{ scale: 0, y: 100 }}
        animate={{ scale: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileActive={{ scale: 0.9 }}
        onClick={handleScrollToPrescription}
        className="fixed bottom-8 right-8 z-40 bg-primary-container text-tertiary-fixed-dim p-5 rounded-2xl shadow-2xl md:hidden border border-tertiary-fixed-dim/20"
      >
        <Upload className="w-6 h-6" />
      </motion.button>

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveItem}
        onConfirm={handleConfirmOrder}
      />

      <PolicyModal 
        isOpen={policyModal.isOpen} 
        type={policyModal.type} 
        onClose={() => setPolicyModal({ ...policyModal, isOpen: false })} 
      />
      
      <Footer onOpenPolicy={openPolicy} />
    </div>
  );
}

export default App;
