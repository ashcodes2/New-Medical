import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, ShieldCheck } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConsult = () => {
    window.open("https://wa.me/918738033229?text=Hi, I would like to consult with a pharmacist regarding my health.", "_blank");
  };

  return (
    <section className="relative bg-surface-container-low pt-40 pb-24 px-8 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container text-tertiary-fixed-dim text-xs font-bold tracking-widest uppercase">
            Trusted since 1984
          </span>
          <h1 className="text-6xl md:text-7xl font-headline font-extrabold text-primary leading-[1.1] tracking-tighter">
            Your Health is Our <span className="text-on-tertiary-container">Priority</span>, Always.
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl font-body leading-relaxed">
            Experience the gold standard in clinical care. From authentic medicines to expert consultations, we bring the premium apothecary experience to your doorstep.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => scrollToSection('medicines')}
              className="bg-primary-container text-on-primary px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all hover:scale-[1.02] active:scale-95"
            >
              Shop Medicines
            </button>
            <button
              onClick={handleConsult}
              className="bg-surface-container-highest text-primary px-8 py-4 rounded-xl font-bold hover:bg-surface-container-high transition-all flex items-center gap-2 border border-outline-variant/10"
            >
              <FileText className="w-5 h-5" />
              Consult Pharmacist
            </button>
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_32px_64px_-15px_rgba(0,0,0,0.2)]"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFgz2HCRw9TyVp3yJBGeHWlAPN0NzczJzwodcEhJMlH14fKpV0NJw-QOVsw7r_24h6aVw_RTg5HG3uvUuKxSxa1sTgVEq7vxPtYpr1yBfpbz_aDzTtmbpqCT7dIdRrXW5z7CbTiSzSeVNrwmqNerqOfkzLEF1ymltYvp7ffNvsMnt8rRaHWF-DtJumcv0afSbT4S1WnjAvgMoMFCD4KJF_ON2knShM3V4HeCEqt1y-klVM0u9oVXlonOPNUhIDu0Plnsao9nuU4bpz"
                alt="Professional pharmacist"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-8 -left-8 bg-surface p-8 rounded-2xl shadow-xl z-20 max-w-[280px] border border-outline-variant/10"
            >
              <div className="flex items-center gap-3 mb-2 text-tertiary-fixed-dim">
                <ShieldCheck className="w-6 h-6" />
                <span className="text-sm font-bold text-primary">ISO 9001:2015</span>
              </div>
              <p className="text-xs text-on-surface-variant leading-tight font-medium">Certified quality standards in pharmaceutical storage and distribution.</p>
            </motion.div>
          </motion.div>

          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-fixed-dim rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-tertiary-fixed-dim rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
