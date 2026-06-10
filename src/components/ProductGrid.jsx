import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ShoppingCart, SearchX } from 'lucide-react';

const products = [
  // ── Pharmacy ──
  { id: 101, name: "Paracetamol 500mg", price: 45, category: "Pharmacy", image: "/products/paracetamol.png" },
  { id: 102, name: "Combiflam Tablet", price: 38, category: "Pharmacy", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80" },
  { id: 103, name: "Pan-D Capsule", price: 52, category: "Pharmacy", image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&q=80" },
  { id: 104, name: "Digene Antacid Gel", price: 65, category: "Pharmacy", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&q=80" },
  { id: 105, name: "Cetirizine 10mg (10 Tabs)", price: 28, category: "Pharmacy", image: "/products/cetirizine.png" },
  { id: 106, name: "Betadine Antiseptic 100ml", price: 130, category: "Pharmacy", image: "/products/betadine.png" },
  { id: 107, name: "Burnol Antiseptic Cream", price: 75, category: "Pharmacy", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80" },
  { id: 108, name: "Band-Aid Flexible 20s", price: 95, category: "Pharmacy", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80" },
  { id: 109, name: "Dr. Morepen Thermometer", price: 349, category: "Pharmacy", image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&q=80" },
  { id: 110, name: "BP Monitor Omron", price: 1299, category: "Pharmacy", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80" },

  // ── Cold & Flu ──
  { id: 111, name: "Vicks Vaporub 50g", price: 155, category: "Cold & Flu", image: "/products/vicks_vaporub.png" },
  { id: 112, name: "Dabur Honitus Syrup", price: 115, category: "Cold & Flu", image: "/products/dabur_honitus.png" },
  { id: 113, name: "Zandu Balm 25ml", price: 85, category: "Cold & Flu", image: "/products/zandu_balm.png" },
  { id: 114, name: "Strepsils Lozenges (16pcs)", price: 65, category: "Cold & Flu", image: "/products/strepsils.png" },
  { id: 115, name: "D-Cold Total Tablet", price: 42, category: "Cold & Flu", image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&q=80" },
  { id: 116, name: "Amrutanjan Balm 30ml", price: 70, category: "Cold & Flu", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&q=80" },
  { id: 117, name: "Nasivion Nasal Spray", price: 115, category: "Cold & Flu", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80" },
  { id: 118, name: "Otrivin Nasal Drops", price: 98, category: "Cold & Flu", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80" },
  { id: 119, name: "Disprin Tablet (10s)", price: 18, category: "Cold & Flu", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80" },
  { id: 120, name: "Crocin Cold & Flu", price: 55, category: "Cold & Flu", image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&q=80" },

  // ── Wellness ──
  { id: 121, name: "Dabur Chyawanprash 1kg", price: 450, category: "Wellness", image: "/products/dabur_chyawanprash.png" },
  { id: 122, name: "Volini Pain Relief Spray", price: 285, category: "Wellness", image: "/products/volini_spray.png" },
  { id: 123, name: "Electral ORS Sachet (10pcs)", price: 75, category: "Wellness", image: "/products/electral_ors.png" },
  { id: 124, name: "Himalaya Liv.52 DS 60 Tabs", price: 210, category: "Wellness", image: "/products/himalaya_liv52.png" },
  { id: 125, name: "Moov Fast Relief Cream", price: 145, category: "Wellness", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80" },
  { id: 126, name: "Revital H Capsules 30s", price: 390, category: "Wellness", image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&q=80" },
  { id: 127, name: "Centrum Multivitamin 30s", price: 545, category: "Wellness", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80" },
  { id: 128, name: "Patanjali Ashwagandha 60s", price: 175, category: "Wellness", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&q=80" },
  { id: 129, name: "Glucon-D Nimbu Pani 500g", price: 148, category: "Wellness", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80" },
  { id: 130, name: "Protinex Vanilla 400g", price: 599, category: "Wellness", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80" },

  // ── Baby Care ──
  { id: 131, name: "Himalaya Baby Oil 200ml", price: 220, category: "Baby Care", image: "/products/himalaya_baby_oil.png" },
  { id: 132, name: "Mamaearth Baby Lotion", price: 349, category: "Baby Care", image: "/products/mamaearth_lotion.png" },
  { id: 133, name: "Johnson's Baby Powder 200g", price: 185, category: "Baby Care", image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&q=80" },
  { id: 134, name: "Himalaya Baby Shampoo", price: 165, category: "Baby Care", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80" },
  { id: 135, name: "Johnson's Baby Soap 100g", price: 95, category: "Baby Care", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80" },
  { id: 136, name: "Pampers Baby Wipes 72s", price: 299, category: "Baby Care", image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&q=80" },
  { id: 137, name: "Mamy Poko Pants M (54pcs)", price: 799, category: "Baby Care", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&q=80" },
  { id: 138, name: "Cetaphil Baby Cream 250g", price: 449, category: "Baby Care", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80" },
  { id: 139, name: "Dabur Lal Tail 100ml", price: 135, category: "Baby Care", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80" },
  { id: 140, name: "WOW Baby Wash 200ml", price: 298, category: "Baby Care", image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&q=80" },

  // ── Personal Care ──
  { id: 141, name: "Dettol Liquid 500ml", price: 185, category: "Personal Care", image: "/products/dettol_liquid.png" },
  { id: 142, name: "Savlon Antiseptic 200ml", price: 145, category: "Personal Care", image: "/products/savlon.png" },
  { id: 143, name: "Odomos Mosquito Cream 50g", price: 95, category: "Personal Care", image: "/products/odomos_cream.png" },
  { id: 144, name: "Lifebuoy Hand Sanitizer", price: 99, category: "Personal Care", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80" },
  { id: 145, name: "Dove Moisturizing Body Lotion", price: 325, category: "Personal Care", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80" },
  { id: 146, name: "Nivea Men Face Wash 100ml", price: 249, category: "Personal Care", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&q=80" },
  { id: 147, name: "Lacto Calamine Lotion 120ml", price: 189, category: "Personal Care", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80" },
  { id: 148, name: "Vaseline Petroleum Jelly 100g", price: 125, category: "Personal Care", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80" },
  { id: 149, name: "Whisper Ultra Clean (15s)", price: 155, category: "Personal Care", image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&q=80" },
  { id: 150, name: "Pears Soft & Fresh Soap 75g", price: 65, category: "Personal Care", image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&q=80" },
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
        <p className="text-on-surface-variant text-sm font-medium">{products.length} Products</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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
              className="group bg-white rounded-3xl p-4 border border-outline-variant/10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-square rounded-2xl bg-surface-container overflow-hidden mb-4 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <button
                  onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
                  className="absolute bottom-3 right-3 bg-primary-container text-on-primary p-3 rounded-xl shadow-xl transform translate-y-0 opacity-100 md:translate-y-2 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 active:scale-90 hover:bg-[#f1be6e] hover:text-primary"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-1.5">
                <span className="text-[9px] font-black text-tertiary-fixed-dim uppercase tracking-widest">{product.category}</span>
                <h3 className="font-bold text-primary text-sm leading-tight line-clamp-2">{product.name}</h3>
                <div className="flex justify-between items-center pt-2 border-t border-outline-variant/5">
                  <span className="text-xl font-black text-primary">₹{product.price}</span>
                  <div className="flex items-center gap-1 text-tertiary-fixed-dim">
                    <ShoppingCart className="w-3 h-3 opacity-40" />
                    <span className="text-[9px] font-bold uppercase">Stock</span>
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
