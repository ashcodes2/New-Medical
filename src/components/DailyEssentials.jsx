import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: "Cold & Flu",
    desc: "Vicks, Honitus, and symptom relief for the whole family.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZPRN9qLPH4tmsFur-PEgUQpzzyOmEXxdlzMRU93sPexKzfd5FhXemHKLvwU-CCqV2UKcCdvqLEqSGpto6lw9r4w7ndcBeKDebsM4K-eSMiDmR_gx_4Sn2pPI6GDBekOAlkDcYg3r3DYCRJ6dAjqocWjwDePpR4QhEDEDboZwE5BaAQ7QQawg7Q4FtcjZFpkiWYHRCriTPOJAFvuEYJQQIKeKJb_IkJ7rv-BXC-0DPrUQ1ypmJbIUlfLUrg2tWTLN-wADMn6ooWjMT"
  },
  {
    id: 2,
    name: "Baby Care",
    desc: "Gentle Himalaya and Mamaearth formulations.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsCJP3I_Js0pY8FhgiPcIiRxTNCfXDjhV9cA1mazYNthwLNsGJh6OFXExhdjfeIDc7A2d1BZQg8GTmprAoTBDSMUDhPMTRzHgmG-cDrMMl73GIODiVLfX4RFggvZq_6gQ0x6SInY1RtpTisrVzbIWQdKEfoISzx5t71EshJcnCI5ek8lW-U5ikDf4i7EyNgSbmzCz334ahTNnaubpVEQkUicrD0orEdsohKrol5GfvB-RacWECbVfZdSTZCHX6o1aenS89z48mZkhd"
  },
  {
    id: 3,
    name: "Wellness",
    desc: "Chyawanprash, Ashwagandha and immunity boosters.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp6DwIXJ-K7ssUoRK0FQGDjUVix6Fgw5mfdlWE9ZKZk97rI_BkEh_1gymtX5oMU26q5S5oah0mbKq7T7geIYTwAnXFam807OzVubPeNXQA_oDcNDOglL4hSfyPFpTYFEzPVceJyRGaB_TejqGWegNhp9654DwYEy2wI01z1B2aFttWvh7udiSILdq66UXqyKx1qWS2m1zLsm7RCJ0GSp_-Ew0tV_CYGTt9YoicMXmeWeOaCywwlENJMSgYgYyPMxv_jqJB5Ps0urex"
  },
  {
    id: 4,
    name: "Personal Care",
    desc: "Dettol, Lifebuoy and daily hygiene essentials.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPuZdGyOHwlhFNCVliUe8qe4YIZEdYjs5pjOspe4UN3TdT9ySFiwEnlpPFlZc9yAIA9UG6qacxzvBYD8_MWM1yROGfQd1SKu4ZcDzGF4_rHRRZmSKY-kJ4WYqYor5GmAuxOXqB_oDkyWeMg781gtX4c3s96_0VL9E5j1Zx_V_zoyjujXoTWA8vB7VC4KABs6uEmhiJHYnLVRpgvNDZ7NWEUen192TKUnYzbE4Z4fUhSj9BHUPsu9B2OTZOuv88zL42TVkd3SicBNqa"
  }
];

const DailyEssentials = () => {
  const scrollToProducts = () => {
    document.getElementById('medicines')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="wellness" className="bg-surface py-32 px-8">
      <div className="max-w-screen-2xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-headline font-bold text-primary mb-4 tracking-tight">Curated Daily Essentials</h2>
            <p className="text-on-surface-variant leading-relaxed">Precision-picked categories for your family's health and wellness journey.</p>
          </div>
          <button 
            onClick={scrollToProducts}
            className="text-primary font-bold flex items-center gap-2 group"
          >
            Browse All Categories <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div 
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group glass-morphic rounded-3xl p-8 transition-all duration-300 cursor-pointer"
              onClick={scrollToProducts}
            >
              <div className="aspect-square mb-8 rounded-2xl overflow-hidden bg-white/50 shadow-inner flex items-center justify-center p-8 group-hover:scale-[1.02] transition-transform">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">{cat.name}</h3>
              <p className="text-sm text-on-surface-variant mb-6">{cat.desc}</p>
              <motion.div 
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-tertiary-fixed-dim"
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailyEssentials;
