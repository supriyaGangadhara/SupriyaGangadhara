import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const WHATSAPP_NUMBER = "919972229161";
const WHATSAPP_MESSAGE = "Hi! I'm interested in your digital marketing services. Can we connect?";

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="fixed bottom-12 right-10 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white text-gray-800 text-sm font-medium px-4 py-3 rounded-xl shadow-lg max-w-[220px] text-center"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-0.5 transition-colors"
              aria-label="Close"
            >
              <X className="w-3 h-3 text-gray-600" />
            </button>
            Chat with us on WhatsApp!
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white rotate-45 shadow-sm" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onHoverStart={() => setShowTooltip(true)}
        onHoverEnd={() => setShowTooltip(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#1ebe57] transition-colors"
      >
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-white"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.77L0 32l8.43-2.01A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.77-1.853l-.486-.29-5.004 1.194 1.216-4.87-.318-.5A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.199-2.355-1.162-2.72-1.294-.365-.133-.631-.199-.897.199-.265.398-1.03 1.294-1.263 1.56-.232.265-.465.298-.863.1-.398-.2-1.681-.62-3.203-1.977-1.184-1.056-1.983-2.36-2.215-2.758-.232-.398-.025-.613.175-.811.18-.178.398-.465.597-.697.199-.232.265-.398.398-.664.133-.265.066-.498-.033-.697-.1-.199-.897-2.162-1.228-2.96-.324-.777-.652-.672-.897-.684l-.764-.013c-.265 0-.697.1-1.063.498-.365.398-1.394 1.362-1.394 3.322s1.427 3.853 1.626 4.118c.199.265 2.808 4.287 6.803 6.014.951.41 1.693.655 2.272.839.954.304 1.823.261 2.51.158.765-.114 2.355-.963 2.688-1.893.333-.93.333-1.727.232-1.893-.099-.166-.365-.265-.763-.464z" />
        </svg>

        {/* Pulse ring */}
        <span className="absolute inline-flex w-14 h-14 rounded-full bg-[#25D366] opacity-40 animate-ping" />
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
