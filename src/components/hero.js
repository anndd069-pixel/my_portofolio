import React from 'react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1A472A] via-[#2A623D] to-[#0B1D11] text-white overflow-hidden">
      {/* Snake Scale Pattern Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(42, 98, 61, 0.2) 20%, transparent 20.5%),
          radial-gradient(circle at 50% 50%, rgba(42, 98, 61, 0.2) 20%, transparent 20.5%)
        `,
        backgroundSize: '48px 48px',
        backgroundPosition: '0 0, 24px 24px',
      }}></div>

      {/* Animated Snake Paths */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-1 bg-gradient-to-r from-transparent via-[#AAAAAA]/20 to-transparent animate-snake"
              style={{
                top: `${30 + i * 20}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Magical Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full animate-twinkle"
          style={{
            backgroundColor: i % 2 === 0 ? '#AAAAAA' : '#2A623D',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.2}s`,
            boxShadow: `0 0 10px ${i % 2 === 0 ? '#AAAAAA' : '#2A623D'}`
          }}
        />
      ))}

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Logo */}
        <img 
          src="/images/logo.png" 
          alt="Hogwarts Crest" 
          className="w-40 h-43 mx-auto mb-8"
        />

        {/* Title */}
        <div className="relative inline-block">
          <h1 className="text-6xl font-serif mb-4 text-[#D4AF37]">
            <span className="block transform hover:scale-105 transition-transform duration-300">
              Welcome to My
            </span>
            <span className="block mt-2 transform hover:scale-105 transition-transform duration-300">
              Magical Portfolio
            </span>
          </h1>
          <div className="absolute -left-8 -right-8 top-1/2 h-1 bg-[#D4AF37] transform -translate-y-1/2 z-0 opacity-30"></div>
        </div>

        {/* Subtitle */}
        <p className="text-xl text-[#D4AF37] font-serif my-6">
          Creative Desainer • Organisator • Power Of Magic
        </p>

        {/* CTA Button */}
        <div className="relative group mt-8">
          <a 
            href="#profile" 
            className="inline-block px-8 py-3 text-lg font-serif text-[#D4AF37] bg-[#1A472A] border-2 border-[#D4AF37] rounded-lg 
                     transform hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] 
                     hover:bg-[#2A623D] relative z-10"
            onClick={() => document.querySelector('button[aria-label="Toggle menu"]')?.click()}
          >
            Explore My Profile
            <span className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/10 to-[#D4AF37]/0 
                           transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000">
            </span>
          </a>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#AAAAAA] opacity-20"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-[#AAAAAA] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-[#AAAAAA] opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#AAAAAA] opacity-20"></div>
      </div>

      {/* Slytherin-themed Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1A472A] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1A472A] to-transparent"></div>
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#1A472A] to-transparent"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#1A472A] to-transparent"></div>
    </section>
  );
}