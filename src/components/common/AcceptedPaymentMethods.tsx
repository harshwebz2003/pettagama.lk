'use client';

import React from 'react';

interface AcceptedPaymentMethodsProps {
  variant?: 'footer' | 'checkout';
}

export const AcceptedPaymentMethods: React.FC<AcceptedPaymentMethodsProps> = ({
  variant = 'footer',
}) => {
  return (
    <div className={`flex flex-col items-center space-y-2 ${variant === 'checkout' ? 'mt-4 pt-4 border-t border-rose-100' : ''}`}>
      <a
        href="https://www.payhere.lk"
        target="_blank"
        rel="noopener noreferrer"
        title="PayHere — Secure Online Payments"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.payhere.lk/downloads/images/payhere_short_banner_dark.png"
          alt="PayHere"
          width={250}
        />
      </a>
    </div>
  );
};
