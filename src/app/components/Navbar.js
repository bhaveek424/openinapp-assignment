'use client';
import { Menu } from 'lucide-react';
import Drawer from './Drawer';
import { useState } from 'react';

const items = ['Item 1', 'Item 2', 'Item 3'];

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  return (
    <div className="flex items-center p-4">
      <button onClick={openDrawer} className="md:hidden">
        <Menu />
      </button>
      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} items={items} />
    </div>
  );
};

export default Navbar;
