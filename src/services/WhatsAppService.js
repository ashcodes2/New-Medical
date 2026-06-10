const WHATSAPP_NUMBER = "918738033229"; // Vijay Medical Store

export const sendOrderToWhatsApp = (cartItems, total) => {
  const itemSummary = cartItems
    .map((item) => `• ${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}`)
    .join("\n");

  const message = `*Vijay Medical Store - New Order*\n\n` +
    `*Order Details:*\n${itemSummary}\n\n` +
    `*Grand Total:* ₹${total.toFixed(2)}\n\n` +
    `Please confirm the availability and dispatch timing.`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};
