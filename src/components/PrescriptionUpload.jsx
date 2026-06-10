import React, { useState, useRef } from 'react';
import { Upload, CheckCircle, Clock, ShieldCheck, Send, X, FileText, ImageIcon, Smartphone, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Small helper: detect mobile ── */
const isMobileDevice = () =>
  /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

/* ─────────────────────────────────────────────────────────
   Desktop Guide Modal
   Shows numbered visual steps after file is sent on desktop
───────────────────────────────────────────────────────── */
const DesktopGuideModal = ({ fileName, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.85, opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
      className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
    >
      {/* Header */}
      <div className="bg-[#25D366] px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.522 5.828L.057 23.177a.75.75 0 0 0 .916.916l5.349-1.465A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.707 9.707 0 0 1-4.953-1.354l-.355-.211-3.695 1.012 1.012-3.695-.211-.355A9.707 9.707 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
          </svg>
          <div>
            <p className="text-white font-black text-base">Send Prescription via WhatsApp</p>
            <p className="text-white/80 text-xs">Follow these 3 simple steps</p>
          </div>
        </div>
        <button onClick={onClose} className="text-white/80 hover:text-white">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Steps */}
      <div className="px-6 py-6 space-y-5">
        {/* Step 1 */}
        <div className="flex gap-4 items-start">
          <div className="w-8 h-8 rounded-full bg-[#25D366] text-white font-black text-sm flex items-center justify-center flex-shrink-0">1</div>
          <div>
            <p className="font-bold text-gray-800 text-sm">Your file has been downloaded ✅</p>
            <p className="text-gray-500 text-xs mt-0.5">
              <span className="font-semibold text-gray-700">{fileName}</span> has been saved to your Downloads folder.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-4 items-start">
          <div className="w-8 h-8 rounded-full bg-[#25D366] text-white font-black text-sm flex items-center justify-center flex-shrink-0">2</div>
          <div>
            <p className="font-bold text-gray-800 text-sm">WhatsApp Web has opened</p>
            <p className="text-gray-500 text-xs mt-0.5">
              In the chat, click the <span className="font-bold text-[#25D366]">📎 Attachment (clip icon)</span> at the bottom.
            </p>
          </div>
        </div>

        {/* Attachment icon illustration */}
        <div className="bg-gray-100 rounded-2xl px-4 py-3 flex items-center gap-3 border border-gray-200">
          <div className="text-2xl">📎</div>
          <div>
            <p className="text-xs text-gray-500">Select <span className="font-bold text-gray-700">Document</span> or <span className="font-bold text-gray-700">Photos</span> from here</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex gap-4 items-start">
          <div className="w-8 h-8 rounded-full bg-[#25D366] text-white font-black text-sm flex items-center justify-center flex-shrink-0">3</div>
          <div>
            <p className="font-bold text-gray-800 text-sm">Go to Downloads → select the file → hit Send 🚀</p>
            <p className="text-gray-500 text-xs mt-0.5">File name: <span className="font-semibold text-gray-700">{fileName}</span></p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 pb-6">
        <button
          onClick={onClose}
          className="w-full bg-[#25D366] text-white font-black rounded-xl py-3 hover:bg-[#1ebe5a] transition-colors"
        >
          Got it! ✓
        </button>
      </div>
    </motion.div>
  </motion.div>
);

/* ─────────────────────────────────────────────────────────
   Main Component
───────────────────────────────────────────────────────── */
const PrescriptionUpload = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [done, setDone] = useState(false);
  const fileInputRef = useRef(null);

  const pickFile = (file) => {
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      alert('File is too large. Please upload a file under 10MB.');
      return;
    }
    setUploadedFile(file);
    setDone(false);
  };

  const handleFileInput = (e) => pickFile(e.target.files?.[0]);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    pickFile(e.dataTransfer.files?.[0]);
  };

  const handleClear = () => {
    setUploadedFile(null);
    setDone(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSend = async () => {
    if (!uploadedFile) return;

    const waText = `Hello! I would like to submit my prescription for review. File name: *${uploadedFile.name}*. Please review and dispatch the medicines. Thank you! 🙏`;
    const waUrl = `https://wa.me/918738033229?text=${encodeURIComponent(waText)}`;

    /* ── MOBILE: Web Share API → file directly WhatsApp mein ── */
    if (navigator.canShare && navigator.canShare({ files: [uploadedFile] })) {
      try {
        await navigator.share({
          files: [uploadedFile],
          text: waText,
          title: 'Prescription',
        });
        setDone(true);
        return;
      } catch (err) {
        if (err.name === 'AbortError') return; // user ne cancel kiya
      }
    }

    /* ── DESKTOP: Download + WhatsApp Web + Guide Modal ── */
    // 1. File download karo
    const blobUrl = URL.createObjectURL(uploadedFile);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = uploadedFile.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(blobUrl);

    // 2. WhatsApp Web kholo
    setTimeout(() => window.open(waUrl, '_blank'), 400);

    // 3. Guide modal dikhao
    setTimeout(() => setShowModal(true), 800);
    setDone(true);
  };

  const isImage = uploadedFile?.type.startsWith('image/');

  return (
    <>
      <AnimatePresence>
        {showModal && (
          <DesktopGuideModal
            fileName={uploadedFile?.name}
            onClose={() => setShowModal(false)}
          />
        )}
      </AnimatePresence>

      <section id="prescription" className="bg-primary-container relative overflow-hidden py-24 px-8">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-20">

          {/* ── Left: Content ── */}
          <div className="lg:w-1/2 space-y-8 z-10 text-on-primary">
            <h2 className="text-5xl font-headline font-bold leading-[1.1]">
              Skip the Queue. <br />
              <span className="text-tertiary-fixed-dim">Digitize Your Health.</span>
            </h2>
            <p className="text-lg text-on-primary-container leading-relaxed">
              Simply take a clear photo of your doctor's prescription, upload it here and send it via WhatsApp. Our pharmacists will review and dispatch your medicines instantly.
            </p>

            {/* Badges */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: <Clock className="w-6 h-6" />, label: '2-Hour Delivery' },
                { icon: <ShieldCheck className="w-6 h-6" />, label: 'Secure & Private' },
                { icon: <CheckCircle className="w-6 h-6" />, label: 'Pharmacist Review' },
              ].map((b) => (
                <div key={b.label} className="flex flex-col gap-2 text-tertiary-fixed-dim">
                  {b.icon}
                  <h4 className="font-bold text-sm text-white">{b.label}</h4>
                </div>
              ))}
            </div>

            {/* ── Device tip ── */}
            <div className="flex gap-4 flex-wrap text-xs">
              <div className="flex items-center gap-1.5 bg-white/10 rounded-lg px-3 py-2">
                <Smartphone className="w-4 h-4 text-[#25D366]" />
                <span className="text-white/80"><span className="font-bold text-white">Mobile:</span> File goes directly to WhatsApp ✅</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 rounded-lg px-3 py-2">
                <Monitor className="w-4 h-4 text-yellow-400" />
                <span className="text-white/80"><span className="font-bold text-white">Desktop:</span> A step-by-step guide will appear</span>
              </div>
            </div>

            {/* ── Drop Zone ── */}
            <div
              onDrop={handleDrop}
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onClick={() => !uploadedFile && fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-6 transition-all duration-300
                ${isDragging ? 'border-tertiary-fixed-dim bg-white/15 scale-[1.02]' : 'border-white/30 bg-white/5 hover:bg-white/10 hover:border-white/60'}
                ${!uploadedFile ? 'cursor-pointer' : ''}
              `}
            >
              <input ref={fileInputRef} type="file" className="hidden" onChange={handleFileInput} accept="image/*,.pdf" />

              <AnimatePresence mode="wait">
                {!uploadedFile ? (
                  <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-3 py-4 text-center">
                    <Upload className="w-10 h-10 text-tertiary-fixed-dim" />
                    <p className="font-bold text-white text-sm">Drag & drop your prescription or click to browse</p>
                    <p className="text-white/50 text-xs">JPG · PNG · PDF · Max 10MB</p>
                  </motion.div>
                ) : (
                  <motion.div key="file" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      {isImage
                        ? <ImageIcon className="w-6 h-6 text-tertiary-fixed-dim" />
                        : <FileText className="w-6 h-6 text-tertiary-fixed-dim" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-white text-sm truncate">{uploadedFile.name}</p>
                      <p className="text-white/50 text-xs">{(uploadedFile.size / 1024).toFixed(1)} KB · Ready to send</p>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleClear(); }}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-500/40 flex items-center justify-center transition-all flex-shrink-0"
                    >
                      <X className="w-4 h-4 text-white" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── Buttons ── */}
            <div className="flex flex-col sm:flex-row gap-4">
              <AnimatePresence>
                {uploadedFile && (
                  <motion.button
                    key="send"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    onClick={handleSend}
                    className="bg-[#25D366] text-white px-8 py-5 rounded-xl font-black tracking-widest uppercase hover:bg-[#1ebe5a] transition-all flex items-center justify-center gap-3 shadow-xl"
                  >
                    {/* WhatsApp icon */}
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.522 5.828L.057 23.177a.75.75 0 0 0 .916.916l5.349-1.465A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.707 9.707 0 0 1-4.953-1.354l-.355-.211-3.695 1.012 1.012-3.695-.211-.355A9.707 9.707 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                    </svg>
                    Send via WhatsApp
                  </motion.button>
                )}
              </AnimatePresence>

              <button
                onClick={() => window.open("https://wa.me/918738033229?text=Hello! I would like to submit my prescription for review.", '_blank')}
                className="bg-white/10 border border-white/20 text-white px-8 py-5 rounded-xl font-black tracking-widest uppercase hover:bg-white/20 transition-all flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                Chat Only
              </button>
            </div>

            {/* ── Success ── */}
            <AnimatePresence>
              {done && !showModal && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3 bg-[#25D366]/20 border border-[#25D366]/40 rounded-xl px-5 py-4"
                >
                  <CheckCircle className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                  <p className="text-sm font-medium text-white">
                    {isMobileDevice()
                      ? 'Prescription shared directly to WhatsApp! ✅'
                      : 'File downloaded. Please attach it in WhatsApp Web and send! 👆'}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Right: Image ── */}
          <div className="lg:w-1/2 relative">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black relative group border-4 border-white/10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS4d_fjV7S1oTZIUHwXFG_EEb6-WmY9KhlTKMkvM3dzqe350NQi-4ESc0Q0ZN663iZFukGFXDURrOCwLAoIqYPwx8WZXcLmZdHzF6MhiOe8vU4IzWfHvqus_Lc7iemOsRddRtovK5foXfR3YxWxMkpCvj43nlLdar7SkR81HUrG_2MGbV404DfZkWIwjCpIEXHV85T-5th2J1-hJ2s9zQO7MG-HOK-qJzNRrrPQkcsxF0WFjFpasAr934aaWPjsZE796X--n0nHpbh"
                alt="Pharmacy lab"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-tertiary-fixed-dim/20 rounded-full filter blur-2xl" />
          </div>

        </div>
      </section>
    </>
  );
};

export default PrescriptionUpload;
