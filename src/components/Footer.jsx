import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, ArrowRight, Share2, Globe } from 'lucide-react';

const Footer = ({ onOpenPolicy }) => {
  const address = "134, Sahjanwa Market, Gorakhpur, Uttar Pradesh - 273209";
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Vijay Medical Store',
          text: 'Check out Vijay Medical Store for authentic medicines and premium care!',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share failed:', err);
      }
    } else {
      alert("Sharing is not supported on this browser. Copy the URL to share!");
    }
  };

  const handleGlobe = () => {
    window.open("https://www.vijaymedicalstore.com", "_blank");
  };

  const handleGetDirections = () => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, "_blank");
  };

  return (
    <footer id="footer" className="bg-[#001c19] text-[#fef9ef] pt-16 pb-8 px-8 border-t border-[#d1a154]/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-screen-2xl mx-auto font-body text-sm tracking-wide">
        <div className="space-y-6">
          <span className="text-xl font-black text-[#f1be6e] mb-4 block font-headline tracking-tighter">Vijay Medical Store</span>
          <p className="text-[#fef9ef]/60 leading-relaxed max-w-xs">
            Your trusted clinical atelier for premium healthcare and authentic medicines. Serving the community with integrity since 1984.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={handleShare}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f1be6e] hover:text-primary transition-all group"
            >
              <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
            <button 
              onClick={handleGlobe}
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f1be6e] hover:text-primary transition-all group"
            >
              <Globe className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-lg text-[#f1be6e] font-headline">Store Location</h4>
          <address className="not-italic text-[#fef9ef]/60 space-y-3">
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-[#f1be6e] flex-shrink-0" />
              <p>{address}</p>
            </div>
          </address>
          <button 
            onClick={handleGetDirections}
            className="flex items-center gap-2 text-[#f1be6e] font-bold group hover:underline"
          >
            Get Directions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-lg text-[#f1be6e] font-headline">Connect</h4>
          <div className="space-y-4">
            <a className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300 text-[#fef9ef]/60 hover:text-[#fef9ef]" href="https://wa.me/918738033229">
              <MessageCircle className="w-5 h-5 text-[#f1be6e]" />
              WhatsApp: +91 87380 33229
            </a>
            <a className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300 text-[#fef9ef]/60 hover:text-[#fef9ef]" href="tel:+918738033229">
              <Phone className="w-5 h-5 text-[#f1be6e]" />
              Phone: 8738033229
            </a>
            <a className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300 text-[#fef9ef]/60 hover:text-[#fef9ef]" href="mailto:support@vijaymedical.com">
              <Mail className="w-5 h-5 text-[#f1be6e]" />
              support@vijaymedical.com
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-lg text-[#f1be6e] font-headline">Quick Links</h4>
          <ul className="space-y-3 text-[#fef9ef]/60">
            <li><button onClick={() => onOpenPolicy('privacy')} className="hover:text-[#fef9ef] transition-colors text-left">Privacy Policy</button></li>
            <li><button onClick={() => onOpenPolicy('terms')} className="hover:text-[#fef9ef] transition-colors text-left">Terms of Service</button></li>
            <li><button onClick={() => onOpenPolicy('shipping')} className="hover:text-[#fef9ef] transition-colors text-left">Shipping Info</button></li>
            <li><button onClick={() => onOpenPolicy('returns')} className="hover:text-[#fef9ef] transition-colors text-left">Returns & Refunds</button></li>
          </ul>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[#fef9ef]/40 text-xs">
        <p>© 2026 Vijay Medical Store. The Clinical Atelier.</p>
        <div className="flex items-center gap-6">
          <span>Designed for Excellence</span>
          <span className="w-1 h-1 bg-white/20 rounded-full"></span>
          <span>ISO 9001:2015 Registered</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
