import React from 'react';

export default function Education() {
  const educationHistory = [
    {
      period: "2015 - 2021",
      school: "SDN Laweyan 1",
      degree: "Sekolah Dasar",
      description: "Memberikan dasar pengetahuan, keterampilan, dan sikap dalam kehidupan sehari-hari",
      achievements: ["Top 3 Overall Student Award"],
      icon: "📚"
    },
    {
      period: "2021 - 2024",
      school: "MTSs Sunan Giri",
      degree: "Madrasah Tsanawiyah",
      description: "Cerdas secara akademik, serta memiliki akhlak yang baik, dan memahami ajaran Islam",
      achievements: ["Participated in 'Jelajah Santri III' Scouting Event – 2023", "Top 3 Overall Student Award"],
      icon: "🎓"
    },
    {
      period: "2024 - SEKARANG",
      school: "SMKN 1 Probolinggo",
      degree: "Sekolah Menengah Kejuruan",
      description: "Dasar-dasar pemrograman dan logika aritmatika komputasi",
      achievements: ["Active member of the school organizations", "Actively involved in external organizations"],
      icon: "💻"
    }
  ];

  return (
    <section id="education" className="py-20 min-h-screen relative overflow-hidden bg-black">
      {/* Magical Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-black opacity-85"></div>
        
        {/* Animated Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(60deg, 
            rgba(255, 215, 0, 0.15) 0px, 
            rgba(255, 215, 0, 0.15) 1px, 
            transparent 1px, 
            transparent 12px
          ),
          repeating-linear-gradient(-60deg, 
            rgba(255, 215, 0, 0.15) 0px, 
            rgba(255, 215, 0, 0.15) 1px, 
            transparent 1px, 
            transparent 12px
          )`,
          backgroundSize: '30px 52px'
        }}></div>
        
        {/* Enhanced Golden Shine */}
        <div className="absolute inset-0 bg-gradient-radial from-hogwarts-gold/20 via-transparent to-hogwarts-gold/10"></div>
        
        {/* Additional Golden Accents */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/15 via-transparent to-[#B8860B]/15"></div>
        
        {/* Magical Golden Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-[#FFD700]/20 to-transparent rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-radial from-[#DAA520]/15 to-transparent rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-gradient-radial from-[#B8860B]/20 to-transparent rounded-full blur-2xl animate-float-slow"></div>
        
        {/* Golden Sparkles */}
        {[...Array(8)].map((_, i) => (
          <div key={i} 
               className={`absolute w-1.5 h-1.5 bg-[#FFD700] rounded-full 
                         animate-[twinkle_${2 + i}s_ease-in-out_infinite_${i * 0.3}s]`}
               style={{
                 top: `${15 + i * 10}%`,
                 left: `${5 + i * 12}%`,
                 boxShadow: '0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700'
               }}>
          </div>
        ))}
        
        {/* Elegant Golden Accents */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#FFD700]/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#FFD700]/10 to-transparent"></div>
        <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-[#FFD700]/10 to-transparent"></div>
        <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-[#FFD700]/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#FFD700] relative inline-block px-4">
            <span className="relative">
              Pendidikan Sihir
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFD700] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {educationHistory.map((edu, index) => (
            <div 
              key={index}
              className="mb-12 transform hover:-translate-y-1 transition-all duration-300 px-4 sm:px-6"
            >
              <div className="relative bg-black/80 backdrop-blur-lg rounded-xl p-8 border border-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] group">
                {/* Decorative Corner Elements */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#FFD700] rounded-tl-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[#FFD700] rounded-br-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      {/* Icon */}
                      <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-[#B8860B] to-[#FFD700] rounded-full shadow-[0_0_15px_rgba(255,215,0,0.3)] group-hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] group-hover:scale-110 transition-all duration-300">
                        <span className="text-3xl md:text-4xl transform group-hover:rotate-12 transition-transform duration-300">{edu.icon}</span>
                      </div>
                      {/* Period */}
                      <span className="flex-shrink-0 whitespace-nowrap bg-[#FFD700]/10 text-[#FFD700] px-4 md:px-6 py-1.5 md:py-2 rounded-full border border-[#FFD700]/30 font-serif text-base md:text-lg shadow-inner">
                        {edu.period}
                      </span>
                    </div>
                    {/* School & Degree */}
                    <div className="flex-grow">
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-[#FFD700] group-hover:text-[#FFD700]">
                        {edu.school}
                      </h3>
                      <p className="text-[#DAA520] font-medium text-base md:text-lg">{edu.degree}</p>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 md:ml-24 pl-4 md:pl-6 border-l border-[#FFD700]/60 group-hover:border-[#FFD700] transition-colors duration-300">
                    <p className="text-[#DAA520] text-base md:text-lg mb-4 leading-relaxed">{edu.description}</p>
                    
                    <ul className="space-y-2 md:space-y-3">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start md:items-center text-[#B8860B] group-hover:text-[#DAA520] transition-colors duration-300">
                          <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-3 mt-2 md:mt-0 shadow-[0_0_8px_rgba(255,215,0,0.6)] group-hover:scale-125 transition-transform duration-300"></span>
                          <span className="text-base md:text-lg">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Decorative Elements */}
        <div className="absolute -left-12 top-1/4 w-24 h-24 bg-gradient-radial from-[#FFDB00]/40 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -right-12 bottom-1/4 w-32 h-32 bg-gradient-radial from-[#FFDB00]/40 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
}
