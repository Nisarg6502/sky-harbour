import React from 'react';
import { motion } from 'framer-motion';
import { WhatsappIcon } from './ui/SocialIcons';

export default function Whatsapp() {
    return (
        <motion.a
            href="https://wa.me/+918530489863"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="btn-press fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card-hover"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ scale: 1.06 }}
        >
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
            <WhatsappIcon size={30} className="relative" />
        </motion.a>
    );
}
