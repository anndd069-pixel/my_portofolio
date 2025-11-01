export default function Projects() {
  const achievements = [
    { 
      name: "Participated in Learning X",
      desc: "Mengembangkan kemampuan dalam desain dasar UI/UX",
      icon: "📚",
      year: "2024",
      image: "/images/learningx.jpg"
    },
    { 
      name: "Influencer Putra Duta Genre 2025 Kota Probolinggo",
      desc: "Memberikan edukasi kepada remaja serta masyarakat tentang substansi genre",
      icon: "🎓",
      year: "2025",
      image: "/images/dugen.jpg"
    },
    { 
      name: "Coming Soon",
      desc: "...",
      icon: "�",
      year: "2xxx",
      image: "/images/achievements/research.jpg"
    },
  ];

  return (
    <section id="projects" className="py-20 relative"> {/* Ravenclaw blue */}
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[#0E1A40] z-0"></div>
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-1">
        <img
          src="/images/biru.jpg"
          alt="Ravenclaw Background"
          className="w-full h-full object-cover opacity-25"
        />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl font-serif font-bold mb-10 text-[#B87333] drop-shadow-lg">
          Pencapaian Akademis
          <div className="h-1 w-32 mx-auto mt-2 bg-gradient-to-r from-transparent via-[#B87333] to-transparent"></div>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 px-4">
          {achievements.map((achievement, i) => (
            <div 
              key={i} 
              className="bg-[#222F5B]/95 rounded-xl overflow-hidden border-2 border-[#B87333] hover:border-[#CD7F32] shadow-lg hover:shadow-[#B87333]/30 transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="h-48 overflow-hidden bg-[#172454] group-hover:bg-[#1C2E6E] transition-colors">
                <img 
                  src={achievement.image} 
                  alt={achievement.name}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300">{achievement.icon}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3 text-[#CD7F32] group-hover:text-[#B87333] transition-colors">
                  {achievement.name}
                </h3>
                <p className="text-[#E8E5E1] text-base leading-relaxed mb-4 group-hover:text-white">
                  {achievement.desc}
                </p>
                <div className="flex items-center justify-between mt-4 border-t border-[#B87333]/30 pt-4">
                  <span className="text-[#CD7F32] text-sm font-serif font-semibold">Anno {achievement.year}</span>
                  <span className="text-[#B87333] text-sm font-medium">Ravenclaw Achievement</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}