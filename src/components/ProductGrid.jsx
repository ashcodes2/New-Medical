import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ShoppingCart, SearchX } from 'lucide-react';

const products = [
  {
    id: 101,
    name: "Paracetamol 500mg",
    price: 45,
    category: "Pharmacy",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZPRN9qLPH4tmsFur-PEgUQpzzyOmEXxdlzMRU93sPexKzfd5FhXemHKLvwU-CCqV2UKcCdvqLEqSGpto6lw9r4w7ndcBeKDebsM4K-eSMiDmR_gx_4Sn2pPI6GDBekOAlkDcYg3r3DYCRJ6dAjqocWjwDePpR4QhEDEDboZwE5BaAQ7QQawg7Q4FtcjZFpkiWYHRCriTPOJAFvuEYJQQIKeKJb_IkJ7rv-BXC-0DPrUQ1ypmJbIUlfLUrg2tWTLN-wADMn6ooWjMT"
  },
  {
    id: 102,
    name: "Vicks Vaporub 50g",
    price: 155,
    category: "Cold & Flu",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZPRN9qLPH4tmsFur-PEgUQpzzyOmEXxdlzMRU93sPexKzfd5FhXemHKLvwU-CCqV2UKcCdvqLEqSGpto6lw9r4w7ndcBeKDebsM4K-eSMiDmR_gx_4Sn2pPI6GDBekOAlkDcYg3r3DYCRJ6dAjqocWjwDePpR4QhEDEDboZwE5BaAQ7QQawg7Q4FtcjZFpkiWYHRCriTPOJAFvuEYJQQIKeKJb_IkJ7rv-BXC-0DPrUQ1ypmJbIUlfLUrg2tWTLN-wADMn6ooWjMT"
  },
  {
    id: 103,
    name: "Dabur Honitus Syrup",
    price: 115,
    category: "Cold & Flu",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZPRN9qLPH4tmsFur-PEgUQpzzyOmEXxdlzMRU93sPexKzfd5FhXemHKLvwU-CCqV2UKcCdvqLEqSGpto6lw9r4w7ndcBeKDebsM4K-eSMiDmR_gx_4Sn2pPI6GDBekOAlkDcYg3r3DYCRJ6dAjqocWjwDePpR4QhEDEDboZwE5BaAQ7QQawg7Q4FtcjZFpkiWYHRCriTPOJAFvuEYJQQIKeKJb_IkJ7rv-BXC-0DPrUQ1ypmJbIUlfLUrg2tWTLN-wADMn6ooWjMT"
  },
  {
    id: 104,
    name: "Himalaya Baby Oil",
    price: 220,
    category: "Baby Care",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsCJP3I_Js0pY8FhgiPcIiRxTNCfXDjhV9cA1mazYNthwLNsGJh6OFXExhdjfeIDc7A2d1BZQg8GTmprAoTBDSMUDhPMTRzHgmG-cDrMMl73GIODiVLfX4RFggvZq_6gQ0x6SInY1RtpTisrVzbIWQdKEfoISzx5t71EshJcnCI5ek8lW-U5ikDf4i7EyNgSbmzCz334ahTNnaubpVEQkUicrD0orEdsohKrol5GfvB-RacWECbVfZdSTZCHX6o1aenS89z48mZkhd"
  },
  {
    id: 105,
    name: "Mamaearth Baby Lotion",
    price: 349,
    category: "Baby Care",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsCJP3I_Js0pY8FhgiPcIiRxTNCfXDjhV9cA1mazYNthwLNsGJh6OFXExhdjfeIDc7A2d1BZQg8GTmprAoTBDSMUDhPMTRzHgmG-cDrMMl73GIODiVLfX4RFggvZq_6gQ0x6SInY1RtpTisrVzbIWQdKEfoISzx5t71EshJcnCI5ek8lW-U5ikDf4i7EyNgSbmzCz334ahTNnaubpVEQkUicrD0orEdsohKrol5GfvB-RacWECbVfZdSTZCHX6o1aenS89z48mZkhd"
  },
  {
    id: 106,
    name: "Dettol Liquid 500ml",
    price: 185,
    category: "Personal Care",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPuZdGyOHwlhFNCVliUe8qe4YIZEdYjs5pjOspe4UN3TdT9ySFiwEnlpPFlZc9yAIA9UG6qacxzvBYD8_MWM1yROGfQd1SKu4ZcDzGF4_rHRRZmSKY-kJ4WYqYor5GmAuxOXqB_oDkyWeMg781gtX4c3s96_0VL9E5j1Zx_V_zoyjujXoTWA8vB7VC4KABs6uEmhiJHYnLVRpgvNDZ7NWEUen192TKUnYzbE4Z4fUhSj9BHUPsu9B2OTZOuv88zL42TVkd3SicBNqa"
  },
  {
    id: 107,
    name: "Dabur Chyawanprash 1kg",
    price: 450,
    category: "Wellness",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsCJP3I_Js0pY8FhgiPcIiRxTNCfXDjhV9cA1mazYNthwLNsGJh6OFXExhdjfeIDc7A2d1BZQg8GTmprAoTBDSMUDhPMTRzHgmG-cDrMMl73GIODiVLfX4RFggvZq_6gQ0x6SInY1RtpTisrVzbIWQdKEfoISzx5t71EshJcnCI5ek8lW-U5ikDf4i7EyNgSbmzCz334ahTNnaubpVEQkUicrD0orEdsohKrol5GfvB-RacWECbVfZdSTZCHX6o1aenS89z48mZkhd"
  },
  {
    id: 108,
    name: "Zandu Balm 25ml",
    price: 85,
    category: "Cold & Flu",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZPRN9qLPH4tmsFur-PEgUQpzzyOmEXxdlzMRU93sPexKzfd5FhXemHKLvwU-CCqV2UKcCdvqLEqSGpto6lw9r4w7ndcBeKDebsM4K-eSMiDmR_gx_4Sn2pPI6GDBekOAlkDcYg3r3DYCRJ6dAjqocWjwDePpR4QhEDEDboZwE5BaAQ7QQawg7Q4FtcjZFpkiWYHRCriTPOJAFvuEYJQQIKeKJb_IkJ7rv-BXC-0DPrUQ1ypmJbIUlfLUrg2tWTLN-wADMn6ooWjMT"
  }
];

const ProductGrid = ({ onAddToCart, searchQuery }) => {
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="medicines" className="py-20 px-8 max-w-screen-2xl mx-auto scroll-mt-24">
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
        <div className="space-y-2">
          <h2 className="text-4xl font-headline font-bold text-primary">
            {searchQuery ? 'Search Results' : 'Best Sellers'}
          </h2>
          {searchQuery && (
            <p className="text-on-surface-variant font-medium">
              Found {filteredProducts.length} items for "{searchQuery}"
            </p>
          )}
        </div>
        <div className="h-px flex-grow mx-8 bg-outline-variant/20 hidden lg:block" />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div 
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group bg-white rounded-3xl p-5 border border-outline-variant/10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
            >
              <div className="aspect-square rounded-2xl bg-surface-container overflow-hidden mb-6 relative">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <button 
                  onClick={() => onAddToCart(product)}
                  className="absolute bottom-4 right-4 bg-primary-container text-on-primary p-4 rounded-2xl shadow-xl transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 active:scale-90 hover:bg-[#f1be6e] hover:text-primary"
                >
                  <Plus className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-black text-tertiary-fixed-dim uppercase tracking-widest">{product.category}</span>
                <h3 className="font-bold text-primary text-lg truncate">{product.name}</h3>
                <div className="flex justify-between items-center pt-3 border-t border-outline-variant/5">
                  <span className="text-2xl font-black text-primary">₹{product.price}</span>
                  <div className="flex items-center gap-1 text-tertiary-fixed-dim">
                    <ShoppingCart className="w-4 h-4 opacity-40" />
                    <span className="text-[10px] font-bold uppercase">In Stock</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {filteredProducts.length === 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-32 space-y-6"
        >
          <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-4">
            <SearchX className="w-12 h-12 text-on-surface-variant/40" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-primary">No results found</h3>
            <p className="text-on-surface-variant max-w-sm mx-auto">We couldn't find anything matching "{searchQuery}". Try searching for another medicine or category.</p>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default ProductGrid;
