import React, { useState } from 'react';
import { ShoppingBag, Search, FileText, Menu, X, MessageSquare, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ cartCount, onCartClick, onSearchChange }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchValue("");
      onSearchChange("");
    }
  };

  const handleSearchInput = (e) => {
    const val = e.target.value;
    setSearchValue(val);
    onSearchChange(val);
    
    // Auto-scroll to results if searching
    if (val.length > 0) {
      const element = document.getElementById('medicines');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleChat = () => {
    window.open("https://wa.me/918738033229?text=Hello! I have a question about my medication.", "_blank");
  };

  const navLinks = [
    { name: "Pharmacy", href: "#medicines" },
    { name: "Wellness", href: "#wellness" },
    { name: "Prescription", href: "#prescription" },
    { name: "Contact", href: "#footer" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/85 backdrop-blur-md shadow-[0_32px_64px_-15px_rgba(29,28,22,0.06)]">
      <nav className="flex justify-between items-center w-full px-6 py-4 max-w-screen-2xl mx-auto font-headline tracking-tight font-semibold">
        <div className="text-2xl font-bold tracking-tighter text-primary-container">
          Vijay Medical Store
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a 
              key={link.name}
              className="text-primary/70 hover:text-primary transition-all hover:border-b-2 border-tertiary-fixed-dim" 
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 lg:gap-6">
          <div className="relative flex items-center">
            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 280, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="relative overflow-hidden"
                >
                  <input
                    type="text"
                    value={searchValue}
                    placeholder="Search medicines, wellness..."
                    className="w-full bg-surface-container-low border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary-fixed-dim outline-none text-primary"
                    onChange={handleSearchInput}
                    autoFocus
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/40" />
                  {searchValue && (
                    <button 
                      onClick={() => { setSearchValue(""); onSearchChange(""); }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-surface-container rounded-full"
                    >
                      <X className="w-3 h-3 text-on-surface-variant" />
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
            {!isSearchOpen && (
              <button 
                onClick={handleSearchToggle}
                className="hover:bg-surface-container-high rounded-full transition-colors p-2 flex items-center"
              >
                <Search className="w-5 h-5 text-primary" />
              </button>
            )}
            {isSearchOpen && (
              <button 
                onClick={handleSearchToggle}
                className="ml-2 text-xs font-bold text-on-surface-variant hover:text-primary transition-colors"
              >
                CLOSE
              </button>
            )}
          </div>

          <button 
            onClick={onCartClick}
            className="hover:bg-surface-container-high rounded-full transition-colors p-2 flex items-center relative"
          >
            <ShoppingBag className="w-5 h-5 text-primary" />
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-0 right-0 bg-tertiary-fixed-dim text-primary text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold"
              >
                {cartCount}
              </motion.span>
            )}
          </button>

          <button 
            onClick={handleChat}
            className="hidden lg:flex items-center gap-2 text-primary/70 hover:text-primary transition-all"
          >
            <MessageSquare className="w-5 h-5" />
            <span className="text-sm">Chat</span>
          </button>

          <a 
            className="hidden lg:flex bg-primary-container text-on-primary px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide scale-100 hover:scale-[1.02] active:scale-95 transition-all items-center gap-2 border border-tertiary-fixed-dim/20" 
            href="#prescription"
          >
            <FileText className="w-4 h-4 text-tertiary-fixed-dim" />
            UPLOAD PRESCRIPTION
          </a>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-surface-container-high rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-t border-outline-variant/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map(link => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-primary py-2 border-b border-outline-variant/5"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={handleChat}
                className="flex items-center gap-3 text-primary font-bold py-2"
              >
                <MessageSquare className="w-5 h-5" />
                Chat with Pharmacist
              </button>
              <a 
                href="#prescription"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary-container text-on-primary text-center py-4 rounded-xl font-bold mt-4"
              >
                Upload Prescription
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
