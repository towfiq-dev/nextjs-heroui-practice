'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const ActiveNav = ({children, className, href}) => {
  const pathName = usePathname()
  const isActive = pathName;
  return (
    <li>
      <Link 
      className={`${className} font-bold text-[17px]
      ${isActive === href
            ? 'border-2 border-blue-500 rounded py-1 px-2 bg-green-300' 
            : ''
        }`} 
      href={href}>
        {children}
        </Link>
    </li>
  );
};

export default ActiveNav;