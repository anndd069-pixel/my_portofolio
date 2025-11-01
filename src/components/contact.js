import React, { useState } from 'react';

export default function Contact() {
  const [activeHouse, setActiveHouse] = useState('gryffindor');
  
  const houses = {
    gryffindor: {
      name: 'Gryffindor',
      colors: {
        primary: '#740001',
        secondary: '#D3A625',
        text: '#FFF',
        accent: '#D3A625'
      },
      icon: '/images/gryffindor.png',
      pattern: `repeating-linear-gradient(45deg, 
        rgba(211, 166, 37, 0.1) 0px, 
        rgba(211, 166, 37, 0.1) 2px,
        transparent 2px, 
        transparent 12px)`
    },
    slytherin: {
      name: 'Slytherin',
      colors: {
        primary: '#1A472A',
        secondary: '#2A623D',
        text: '#FFF',
        accent: '#AAAAAA'
      },
      icon: '/images/slytherin.png',
      pattern: `repeating-linear-gradient(-45deg, 
        rgba(170, 170, 170, 0.1) 0px, 
        rgba(170, 170, 170, 0.1) 2px,
        transparent 2px, 
        transparent 12px)`
    },
    hufflepuff: {
      name: 'Hufflepuff',
      colors: {
        primary: '#FFD700',
        secondary: '#60605C',
        text: '#000',
        accent: '#60605C'
      },
      icon: '/images/hufflepuff.png',
      pattern: `repeating-linear-gradient(60deg, 
        rgba(96, 96, 92, 0.1) 0px, 
        rgba(96, 96, 92, 0.1) 2px,
        transparent 2px, 
        transparent 12px)`
    },
    ravenclaw: {
      name: 'Ravenclaw',
      colors: {
        primary: '#0E1A40',
        secondary: '#946B2D',
        text: '#FFF',
        accent: '#946B2D'
      },
      icon: '/images/revenclaw.png',
      pattern: `repeating-linear-gradient(-60deg, 
        rgba(148, 107, 45, 0.1) 0px, 
        rgba(148, 107, 45, 0.1) 2px,
        transparent 2px, 
        transparent 12px)`
    }
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'mariffirmansyah629@gmail.com',
      link: 'mailto:mariffirmansyah629@gmail.com'
    },
    {
      icon: '\u{1F4AC}',
      title: 'WhatsApp',
      value: '+62 881-0265-92629',
      link: 'https://wa.me/62881026592629'
    },
    {
      icon: '📸',
      title: 'Instagram',
      value: '@a_nd08',
      link: 'https://instagram.com/a_nd08'
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: 'github.com/anndd069-pixel',
      link: 'https://github.com/anndd069-pixel'
    }
  ];

  return (
    <section id="contact" className="min-h-screen relative overflow-hidden py-20">
      {/* Dynamic Background based on active house */}
      <div 
        className="absolute inset-0 transition-all duration-700"
        style={{
          backgroundColor: houses[activeHouse].colors.primary,
          backgroundImage: houses[activeHouse].pattern
        }}
      >
        {/* Magical Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-[twinkle_2s_ease-in-out_infinite]"
            style={{
              backgroundColor: houses[activeHouse].colors.accent,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.1}s`,
              boxShadow: `0 0 10px ${houses[activeHouse].colors.accent}`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* House Selection */}
        <div className="flex justify-center gap-6 mb-16">
          {Object.entries(houses).map(([key, house]) => (
            <button
              key={key}
              onClick={() => setActiveHouse(key)}
              className={`p-6 rounded-full transition-all duration-300 transform hover:scale-110
                ${activeHouse === key ? 'scale-110 shadow-lg' : 'opacity-70 hover:opacity-100'}
              `}
              style={{
                backgroundColor: house.colors.primary,
                border: `2px solid ${house.colors.secondary}`
              }}
            >
              <img 
                src={house.icon} 
                alt={`${house.name} Icon`} 
                className="w-12 h-12 object-contain"
              />
            </button>
          ))}
        </div>

        {/* Contact Content */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4 inline-block">
              <img 
                src={houses[activeHouse].icon} 
                alt={`${houses[activeHouse].name} Icon`}
                className="w-16 h-16 object-contain"
              />
            </div>
            <h2 
              className="text-5xl font-serif font-bold relative inline-block"
              style={{ color: houses[activeHouse].colors.text }}
            >
              Hubungi Saya
              <div 
                className="absolute -bottom-2 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ backgroundColor: houses[activeHouse].colors.secondary }}
              />
            </h2>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div 
                  className="relative p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                  style={{
                    backgroundColor: `${houses[activeHouse].colors.primary}dd`,
                    borderColor: houses[activeHouse].colors.secondary,
                    boxShadow: `0 4px 20px ${houses[activeHouse].colors.secondary}33`
                  }}
                >
                  {/* Decorative Corners */}
                  <div 
                    className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 rounded-tl-xl transition-opacity duration-300 opacity-60 group-hover:opacity-100"
                    style={{ borderColor: houses[activeHouse].colors.secondary }}
                  />
                  <div 
                    className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 rounded-br-xl transition-opacity duration-300 opacity-60 group-hover:opacity-100"
                    style={{ borderColor: houses[activeHouse].colors.secondary }}
                  />

                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                      style={{ 
                        background: `linear-gradient(135deg, ${houses[activeHouse].colors.primary}, ${houses[activeHouse].colors.secondary})`,
                        boxShadow: `0 0 15px ${houses[activeHouse].colors.secondary}66`
                      }}
                    >
                      <span className="text-2xl">{method.icon}</span>
                    </div>
                    <div>
                      <h3 
                        className="text-xl font-serif font-bold mb-1"
                        style={{ color: houses[activeHouse].colors.text }}
                      >
                        {method.title}
                      </h3>
                      <p 
                        className="transition-colors duration-300"
                        style={{ color: houses[activeHouse].colors.accent }}
                      >
                        {method.value}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <form className="mt-12 bg-black/20 backdrop-blur-lg p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label 
                  className="block mb-2 font-serif"
                  style={{ color: houses[activeHouse].colors.text }}
                >
                  Nama
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-black/20 border-2 transition-colors duration-300 focus:outline-none"
                  style={{ 
                    borderColor: houses[activeHouse].colors.secondary,
                    color: houses[activeHouse].colors.text
                  }}
                  placeholder="Harry Potter"
                />
              </div>
              <div>
                <label 
                  className="block mb-2 font-serif"
                  style={{ color: houses[activeHouse].colors.text }}
                >
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-black/20 border-2 transition-colors duration-300 focus:outline-none"
                  style={{ 
                    borderColor: houses[activeHouse].colors.secondary,
                    color: houses[activeHouse].colors.text
                  }}
                  placeholder="harry@hogwarts.edu"
                />
              </div>
            </div>
            <div className="mb-6">
              <label 
                className="block mb-2 font-serif"
                style={{ color: houses[activeHouse].colors.text }}
              >
                Pesan
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-black/20 border-2 transition-colors duration-300 focus:outline-none"
                style={{ 
                  borderColor: houses[activeHouse].colors.secondary,
                  color: houses[activeHouse].colors.text
                }}
                placeholder="Tulis pesan Anda di sini..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-serif text-lg transition-all duration-300 transform hover:scale-105"
              style={{ 
                backgroundColor: houses[activeHouse].colors.secondary,
                color: houses[activeHouse].colors.text,
                boxShadow: `0 4px 20px ${houses[activeHouse].colors.secondary}66`
              }}
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}