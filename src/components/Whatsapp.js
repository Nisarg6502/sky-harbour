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
            className="btn-press fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))] sm:right-6 sm:h-14 sm:w-14"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ scale: 1.06 }}
        >
            <WhatsappIcon size={26} className="relative sm:h-[30px] sm:w-[30px]" />
        </motion.a>
    );
}
