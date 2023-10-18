'use client';
import { X } from 'lucide-react';
import { Crosshair } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { routes } from './Sidebar';
import { cn } from '../lib/utils';
import { usePathname } from 'next/navigation';

const Drawer = ({ isOpen, onClose, items }) => {
  const pathname = usePathname();

  return (
    <div>
      {isOpen && (
        <div className="fixed top-0 left-0 h-[100vh] w-full backdrop-blur-sm z-50"></div>
      )}
      <div
        className={`fixed top-0 flex flex-col  left-0 h-[100vh] w-drawer justify-between bg-white rounded-lg transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } duration-300 ease-in-out z-50 backdrop-blur-sm`}>
        {/* Drawer content goes here */}
        <div className="p-4 flex-col">
          {/* List of items */}
          <div className="space-y-4 pt-7  ">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  'text-sm group py-2 flex  w-full justify-start text-[18px] cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',
                  pathname === route.href ? 'font-bold' : '',
                )}>
                <div className="flex items-center flex-1">{route.label}</div>
              </Link>
            ))}
          </div>

          {/* Bottom links */}
          <div className="flex flex-col gap-2 pt-5">
            <h1 className="text-sm">
              <Link href="#">Help</Link>
            </h1>
            <h1 className="text-sm">
              <Link href="#">Contact Us</Link>
            </h1>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X className="w-5 h-5 " />
        </button>
      </div>
    </div>
  );
};

export default Drawer;
