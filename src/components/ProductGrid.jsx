import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ShoppingCart, SearchX } from 'lucide-react';

const products = [
  {
    id: 101,
    name: "Paracetamol 500mg",
    price: 45,
    category: "Pharmacy",
    image: "/products/paracetamol.png"
  },
  {
    id: 102,
    name: "Vicks Vaporub 50g",
    price: 155,
    category: "Cold & Flu",
    image: "/products/vicks_vaporub.png"
  },
  {
    id: 103,
    name: "Dabur Honitus Syrup",
    price: 115,
    category: "Cold & Flu",
    image: "/products/dabur_honitus.png"
  },
  {
    id: 104,
    name: "Himalaya Baby Oil",
    price: 220,
    category: "Baby Care",
    image: "/products/himalaya_baby_oil.png"
  },
  {
    id: 105,
    name: "Mamaearth Baby Lotion",
    price: 349,
    category: "Baby Care",
    image: "/products/mamaearth_lotion.png"
  },
  {
    id: 106,
    name: "Dettol Liquid 500ml",
    price: 185,
    category: "Personal Care",
    image: "/products/dettol_liquid.png"
  },
  {
    id: 107,
    name: "Dabur Chyawanprash 1kg",
    price: 450,
    category: "Wellness",
    image: "/products/dabur_chyawanprash.png"
  },
  {
    id: 108,
    name: "Zandu Balm 25ml",
    price: 85,
    category: "Cold & Flu",
    image: "/products/zandu_balm.png"
  },
  {
    id: 109,
    name: "Volini Pain Relief Spray 100g",
    price: 285,
    category: "Wellness",
    image: "/products/volini_spray.png"
  },
  {
    id: 110,
    name: "Electral ORS Sachet (10pcs)",
    price: 75,
    category: "Wellness",
    image: "/products/electral_ors.png"
  },
  {
    id: 111,
    name: "Odomos Mosquito Cream 50g",
    price: 95,
    category: "Personal Care",
    image: "/products/odomos_cream.png"
  },
  {
    id: 112,
    name: "Strepsils Lozenges (16pcs)",
    price: 65,
    category: "Cold & Flu",
    image: "/products/strepsils.png"
  },
  {
    id: 113,
    name: "Himalaya Liv.52 DS 60 Tabs",
    price: 210,
    category: "Wellness",
    image: "/products/himalaya_liv52.png"
  },
  {
    id: 114,
    name: "Betadine Antiseptic 100ml",
    price: 130,
    category: "Pharmacy",
    image: "/products/betadine.png"
  },
  {
    id: 115,
    name: "Cetirizine 10mg (10 Tabs)",
    price: 28,
    category: "Pharmacy",
    image: "/products/cetirizine.png"
  },
  {
    id: 116,
    name: "Savlon Antiseptic Liquid 200ml",
    price: 145,
    category: "Personal Care",
    image: "/products/savlon.png"
  },
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
              whileTap={{ scale: 0.97 }}
              onClick={() => onAddToCart(product)}
              className="group bg-white rounded-3xl p-5 border border-outline-variant/10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-square rounded-2xl bg-surface-container overflow-hidden mb-6 relative">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <button 
                  onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
                  className="absolute bottom-4 right-4 bg-primary-container text-on-primary p-4 rounded-2xl shadow-xl transform translate-y-0 opacity-100 md:translate-y-2 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 active:scale-90 hover:bg-[#f1be6e] hover:text-primary"
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
