import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "#top", text: "Home", icon: "⚡" },
    { href: "#profile", text: "Wizard Profile" },
    { href: "#education", text: "Riwayat Sihir" },
    { href: "#projects", text: "Pencapaian Magis" },
    { href: "#contact", text: "Owl Post" }
  ];
  
  return (
    <nav className="bg-hogwarts-black/90 text-hogwarts-gold py-4 border-b-2 border-hogwarts-gold/30 fixed w-full top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#top" className="group flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300">
          <img src="/images/934.png" alt="Magic Wand" className="w-10 h-13 transform group-hover:rotate-12 transition-transform duration-300" />
          <h1 className="text-xl font-serif relative">
            Magical Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hogwarts-gold transition-all duration-300 group-hover:w-full"></span>
          </h1>
        </a>
        
        {/* Hamburger Menu Button for Mobile */}
        <button 
          className="lg:hidden text-hogwarts-gold hover:text-white transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href} 
                className="font-serif hover:text-white transition-colors duration-300 relative group"
              >
                <span>{item.text}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hogwarts-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`
          lg:hidden fixed left-1/2 top-[80px] transform -translate-x-1/2
          w-[90%] max-w-md rounded-xl overflow-hidden
          bg-gradient-to-b from-hogwarts-black/95 to-[#1a0f00]/95 
          backdrop-blur-lg shadow-2xl border border-hogwarts-gold/20
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-b from-hogwarts-gold/20 to-transparent bg-repeat"></div>
        </div>

        {/* Menu Items */}
        <div className="relative z-10 py-6">
          <ul className="flex flex-col items-center space-y-4">
            {menuItems.map((item, index) => (
              <li key={index} className="w-full">
                <a 
                  href={item.href}
                  className="block px-8 py-2 font-serif text-lg text-center hover:text-white transition-colors duration-300 relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.text}</span>
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-hogwarts-gold transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}