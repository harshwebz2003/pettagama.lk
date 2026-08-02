'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Grid, Heart, ShoppingBag, User } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export const MobileBottomNav: React.FC = () => {
  const pathname = usePathname();
  const { wishlistCount, cartCount } = useShop();

  const navItems = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Shop', href: '/shop', icon: Grid },
    { label: 'Wishlist', href: '/wishlist', icon: Heart, badge: wishlistCount },
    { label: 'Cart', href: '/cart', icon: ShoppingBag, badge: cartCount },
    { label: 'Account', href: '/login', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/97 backdrop-blur-xl border-t border-rose-100 lg:hidden shadow-[0_-4px_20px_rgba(160,97,109,0.1)]">
      <div className="grid grid-cols-5 h-16 max-w-md mx-auto px-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center relative transition-colors pt-1 ${
                isActive ? 'text-amber-600 font-bold' : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              {/* Active top indicator bar */}
              {isActive && (
                <span className="absolute top-0 w-6 h-0.5 bg-amber-500 rounded-full" />
              )}

              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'fill-amber-100' : ''}`} />
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-rose-500 text-white text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] mt-0.5 font-semibold">{item.label}</span>
            </Link>
          );
        })}
      </div>
      {/* Safe area spacer for iOS */}
      <div className="h-safe-area-inset-bottom bg-white/97" />
    </div>
  );
};
