'use client';

import React from 'react';
import { useShop } from '@/context/ShopContext';
import { CheckCircle2, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Toast: React.FC = () => {
  const { toastMessage } = useShop();

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-24 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center space-x-3 border border-slate-700 max-w-sm"
        >
          <div className="bg-emerald-500 text-white p-1.5 rounded-full shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <span className="text-xs font-semibold leading-tight">{toastMessage}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
