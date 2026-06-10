# 🏥 Vijay Medical Store — Official Website

A modern, fully responsive medical store website built with **React + Vite**, featuring online prescription upload, WhatsApp ordering, product browsing (16 products), and a seamless cart experience.

## 🌐 Live Demo

**[https://vijay-medical.vercel.app](https://vijay-medical.vercel.app)**

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel&style=for-the-badge)](https://vijay-medical.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&style=for-the-badge)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&style=for-the-badge)](https://vitejs.dev)

---

## ✨ Features

- 🛍️ **Product Catalog** — 16 products: medicines, wellness, baby care, personal care & more
- 🛒 **Cart System** — Click any product card or the `+` button to add to cart; slide-out cart drawer
- 📋 **Prescription Upload** — Upload prescription image/PDF and send directly to WhatsApp
  - 📱 **Mobile:** File is shared directly via native share sheet (Web Share API)
  - 💻 **Desktop:** File auto-downloads + WhatsApp Web opens with step-by-step attach guide
- 💬 **WhatsApp Ordering** — One-click order confirmation sent to store's WhatsApp
- 🔍 **Search** — Real-time product search via navbar
- 📱 **Fully Responsive** — Optimized for mobile, tablet & desktop
- ⭐ **Testimonials** — Customer reviews carousel
- 📜 **Policy Modals** — Privacy policy & terms displayed in modal overlays

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI Framework |
| Vite | Build Tool & Dev Server |
| Framer Motion | Animations |
| Lucide React | Icon Library |
| Tailwind CSS v4 | Styling |
| WhatsApp API | Order & Prescription Delivery |
| Vercel | Hosting & Deployment |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/ashcodes2/New-Medical.git
cd New-Medical

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Navigation + search + cart icon
│   ├── Hero.jsx                # Landing hero section
│   ├── DailyEssentials.jsx     # Category quick links
│   ├── ProductGrid.jsx         # 16 products with search filter & cart
│   ├── CartDrawer.jsx          # Slide-out cart drawer
│   ├── CartSection.jsx         # Full cart view section
│   ├── PrescriptionUpload.jsx  # Prescription upload + WhatsApp send
│   ├── Footer.jsx              # Footer with store info & policy links
│   └── PolicyModal.jsx         # Privacy & terms modals
├── services/
│   └── WhatsAppService.js      # WhatsApp order message builder
├── App.jsx                     # Root component
└── main.jsx                    # Entry point
```

---

## 📦 Deployment

This project is deployed on **Vercel**. Every push to the `main` branch auto-deploys via Vercel's GitHub integration.

**Live URL:** [https://vijay-medical.vercel.app](https://vijay-medical.vercel.app)

---

## 🏪 Store Info

**Vijay Medical Store**  
📍 134, Sahjanwa Market, Gorakhpur, Uttar Pradesh — 273209  
📞 Phone: [8738033229](tel:+918738033229)  
💬 WhatsApp: [+91 87380 33229](https://wa.me/918738033229)

---

*Built with ❤️ for Vijay Medical Store — Serving since 1984*
