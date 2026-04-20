import React from 'react';
import { Link, Button } from "@heroui/react";
import ThemeSwitch from '../toggole/ThemeSwitch';
const Navbar = () => {

  return (
    <div>
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
  <header className="flex h-16 items-center justify-between px-6">
    <div className="flex items-center gap-3">
      
      <p className="font-bold">ACME</p>
    </div>
    <ul className="flex items-center gap-7">
      <li><Link className="font-bold text-[17px]" href="/">Home</Link></li>
      <li><Link className="font-bold text-[17px]" href="/tasks">Tasks</Link></li>
      <li><Link className="font-bold text-[17px]" href="/profile">Profile</Link></li>
      <li><Link className="font-bold text-[17px]" href="/pricing">Pricing</Link></li>
    </ul>
    <div>
      <ThemeSwitch/>
    </div>
  </header>
</nav>
    </div>
  );
};

export default Navbar;