'use client';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';

const Avatar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown} className="focus:outline-none">
        <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center">
          <Image
            src={session?.user?.image}
            alt={session?.user?.name}
            layout="fill"
            objectFit="cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Settings
            </a>
            <a
              href="#"
              onClick={() => signOut()}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Sign out
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Avatar;
