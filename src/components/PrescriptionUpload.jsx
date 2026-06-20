import React, { useState, useRef } from 'react';
import { Upload, CheckCircle, Clock, ShieldCheck, X, FileText, ImageIcon, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─────────────────────────────────────────────────────────
   WhatsApp Icon SVG
───────────────────────────────────────────────────────── */
const WhatsAppIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={`fill-current ${className}`} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.522 5.828L.057 23.177a.75.75 0 0 0 .916.916l5.349-1.465A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.707 9.707 0 0 1-4.953-1.354l-.355-.211-3.695 1.012 1.012-3.695-.211-.355A9.707 9.707 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
  </svg>
);

/* ─────────────────────────────────────────────────────────
   Unsupported Browser Modal
   Firefox / Safari desktop — Web Share not available
───────────────────────────────────────────────────────── */
const UnsupportedModal = ({ fileName, onClose, onDownloadAndOpen }) => (
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
          <WhatsAppIcon className="w-7 h-7 text-white" />
          <div>
            <p className="text-white font-black text-base">Send via WhatsApp</p>
            <p className="text-white/80 text-xs">Your browser needs 2 quick steps</p>
          </div>
        </div>
        <button onClick={onClose} className="text-white/80 hover:text-white p-1">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Info */}
      <div className="px-6 py-5 space-y-4">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex gap-3 items-start">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            <span className="font-bold">Your browser</span> doesn't support direct file sharing.
            Use <span className="font-bold">Chrome</span> for a one-click experience,
            or follow the 2 steps below.
          </p>
        </div>

        {/* Step 1 */}
        <div className="flex gap-4 items-start">
          <div className="w-8 h-8 rounded-full bg-[#25D366] text-white font-black text-sm flex items-center justify-center flex-shrink-0">1</div>
          <div>
            <p className="font-bold text-gray-800 text-sm">Download the file</p>
            <p className="text-gray-500 text-xs mt-0.5">
              <span className="font-semibold text-gray-700">{fileName}</span> will be saved to your Downloads.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-4 items-start">
          <div className="w-8 h-8 rounded-full bg-[#25D366] text-white font-black text-sm flex items-center justify-center flex-shrink-0">2</div>
          <div>
            <p className="font-bold text-gray-800 text-sm">WhatsApp Web will open — attach & send</p>
            <p className="text-gray-500 text-xs mt-0.5">
              In the chat, click <span className="font-bold text-[#25D366]">📎</span> → select the downloaded file → hit <span className="font-bold text-[#25D366]">Send</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 pb-6 flex gap-3">
        <button
          onClick={onDownloadAndOpen}
          className="flex-1 bg-[#25D366] text-white font-black rounded-xl py-3.5 hover:bg-[#1ebe5a] transition-colors flex items-center justify-center gap-2 text-sm"
        >
          <WhatsAppIcon className="w-5 h-5 text-white" />
          Download & Open WhatsApp
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
  const [showUnsupportedModal, setShowUnsupportedModal] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sharing | done | error
  const fileInputRef = useRef(null);

  const WA_NUMBER  = "918738033229";
  const WA_TEXT    = (fileName) =>
    `Hello! I would like to submit my prescription for review.\n*File:* ${fileName}\nPlease review and dispatch the medicines. Thank you! 🙏`;

  /* ── pick file ── */
  const pickFile = (file) => {
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      alert('File too large. Please upload under 10 MB.');
      return;
    }
    setUploadedFile(file);
    setStatus('idle');
  };

  const handleFileInput = (e) => pickFile(e.target.files?.[0]);
  const handleDrop = (e) => { e.preventDefault(); setIsDragging(false); pickFile(e.dataTransfer.files?.[0]); };
  const handleClear = () => { setUploadedFile(null); setStatus('idle'); if (fileInputRef.current) fileInputRef.current.value = ''; };

  /* ── fallback: download + open WhatsApp Web ── */
  const downloadAndOpenWhatsApp = () => {
    if (!uploadedFile) return;
    // download file
    const blobUrl = URL.createObjectURL(uploadedFile);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = uploadedFile.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(blobUrl);
    // open WhatsApp Web with prefilled text
    setTimeout(() => {
      const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT(uploadedFile.name))}`;
      window.open(url, '_blank');
    }, 400);
    setShowUnsupportedModal(false);
    setStatus('done');
  };

  /* ── main send handler ── */
  const handleSend = async () => {
    if (!uploadedFile) return;
    setStatus('sharing');

    const text = WA_TEXT(uploadedFile.name);

    /* ── Strategy 1: Web Share API with files
          Works on: Chrome desktop (86+), all Android browsers, iOS Safari 15+
          This is the BEST path — image + text go directly into WhatsApp
    ── */
    if (navigator.canShare && navigator.canShare({ files: [uploadedFile] })) {
      try {
        await navigator.share({
          files: [uploadedFile],
          text: text,
          title: 'Prescription — Vijay Medical Store',
        });
        setStatus('done');
        return;
      } catch (err) {
        if (err.name === 'AbortError') {
          // user cancelled the share sheet — reset quietly
          setStatus('idle');
          return;
        }
        // share failed — fall through to fallback
      }
    }

    /* ── Strategy 2: Fallback modal (Firefox / older Safari / unsupported browsers)
          Show download + WhatsApp Web guide
    ── */
    setStatus('idle');
    setShowUnsupportedModal(true);
  };

  const isImage = uploadedFile?.type.startsWith('image/');

  return (
    <>
      <AnimatePresence>
        {showUnsupportedModal && (
          <UnsupportedModal
            fileName={uploadedFile?.name}
            onClose={() => setShowUnsupportedModal(false)}
            onDownloadAndOpen={downloadAndOpenWhatsApp}
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
              Take a clear photo of your doctor's prescription, upload it here — and with one tap, it goes directly to our pharmacist on WhatsApp.
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

            {/* Browser tip */}
            <div className="flex items-center gap-2.5 bg-white/10 rounded-xl px-4 py-3 text-sm">
              <span className="text-2xl">💡</span>
              <p className="text-white/80">
                <span className="font-bold text-white">Best experience:</span> Use <span className="font-bold text-[#25D366]">Google Chrome</span> — image goes directly into WhatsApp with one click.
              </p>
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
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                onChange={handleFileInput}
                accept="image/*,.pdf"
              />

              <AnimatePresence mode="wait">
                {!uploadedFile ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-3 py-4 text-center"
                  >
                    <Upload className="w-10 h-10 text-tertiary-fixed-dim" />
                    <p className="font-bold text-white text-sm">Drag & drop your prescription or click to browse</p>
                    <p className="text-white/50 text-xs">JPG · PNG · PDF · Max 10 MB</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="file"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-4"
                  >
                    {/* Preview thumbnail for images */}
                    <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 overflow-hidden border border-white/20">
                      {isImage ? (
                        <img
                          src={URL.createObjectURL(uploadedFile)}
                          alt="preview"
                          className="w-full h-full object-cover rounded-xl"
                        />
                      ) : (
                        <FileText className="w-7 h-7 text-tertiary-fixed-dim" />
                      )}
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

            {/* ── Single Action Button ── */}
            <AnimatePresence>
              {uploadedFile && (
                <motion.div
                  key="send-btn"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <button
                    id="whatsapp-send-btn"
                    onClick={handleSend}
                    disabled={status === 'sharing'}
                    className={`w-full py-5 rounded-2xl font-black tracking-widest uppercase transition-all flex items-center justify-center gap-3 shadow-xl text-base
                      ${status === 'sharing'
                        ? 'bg-[#25D366]/60 text-white/70 cursor-not-allowed'
                        : 'bg-[#25D366] text-white hover:bg-[#1ebe5a] hover:scale-[1.02] active:scale-95 shadow-[0_20px_40px_-10px_rgba(37,211,102,0.4)]'
                      }`}
                  >
                    {status === 'sharing' ? (
                      <>
                        <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3V4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z" />
                        </svg>
                        Opening WhatsApp…
                      </>
                    ) : (
                      <>
                        <WhatsAppIcon className="w-6 h-6 text-white" />
                        Send Prescription on WhatsApp
                      </>
                    )}
                  </button>

                  {/* Status feedback */}
                  <AnimatePresence>
                    {status === 'done' && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-4 flex items-center gap-3 bg-[#25D366]/20 border border-[#25D366]/40 rounded-xl px-5 py-3"
                      >
                        <CheckCircle className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                        <p className="text-sm font-medium text-white">
                          Prescription sent! Our pharmacist will review it shortly. ✅
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
