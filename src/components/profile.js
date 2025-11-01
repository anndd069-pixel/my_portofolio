import React from 'react';

export default function Profile() {
  return (
    <section id="profile" className="min-h-screen py-20 relative text-hogwarts-gold">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-hogwarts-red/95 to-[#2A0000] z-0"></div>
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-1">
        <img
          src="/images/koridor.jpg"
          alt="Hogwarts Background"
          className="w-full h-full object-cover opacity-25"
        />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden z-2">
        <div className="absolute w-24 h-24 bg-hogwarts-gold/10 rounded-full animate-float top-20 left-10"></div>
        <div className="absolute w-32 h-32 bg-hogwarts-red/20 rounded-full animate-float-delayed top-40 right-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <img
                src="/images/gua.jpg"
                alt="Gryffindor Crest"
                className="w-48 h-48 mx-auto rounded-full border-4 border-hogwarts-gold shadow-lg shadow-hogwarts-gold/30 mb-6 bg-black/40 p-3"
              />
              <div className="absolute -bottom-2 -right-2">
                <img
                  src="/images/owl.png"
                  alt="Magic Wand"
                  className="w-12 h-12 transform rotate-45 animate-float"
                />
              </div>
            </div>
            <h2 className="text-4xl font-serif font-bold mt-6 mb-2">My Magical Journey</h2>
            <p className="text-xl text-hogwarts-gold/80 font-serif">Axioo Class Program Member</p>
          </div>

          {/* Profile Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {['Watching', 'Listening Music', 'Reading'].map((trait) => (
              <div key={trait} className="bg-black/30 rounded-xl p-6 border border-hogwarts-gold/30 hover:border-hogwarts-gold/60 transition-all duration-300">
                <h3 className="text-xl font-serif mb-2">{trait}</h3>
                <div className="w-full h-2 bg-hogwarts-gold/20 rounded-full">
                  <div className="h-full bg-hogwarts-gold rounded-full animate-pulse" style={{width: '90%'}}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Profile Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* About Me */}
            <div className="bg-black/30 rounded-xl p-6 border border-hogwarts-gold/30">
              <h3 className="text-2xl font-serif mb-4">About Me</h3>
              <p className="text-hogwarts-gold/90 leading-relaxed text-justify">
                I am a student who is active in organizations and always eager to learn new things –
                Saya adalah seorang siswa yang aktif berorganisasi dan selalu bersemangat untuk mempelajari hal-hal baru.
                Saya suka bekerja sama dengan orang lain dan berusaha memberikan yang terbaik dalam setiap kegiatan.
                Selain itu, saya juga senang mencoba hal-hal baru, terutama yang bisa mengembangkan kreativitas saya.
                Di waktu luang, saya biasanya membaca, mendengarkan musik, atau membantu kegiatan di sekolah.
                Bagi saya, menjadi pelajar bukan hanya tentang belajar di kelas, tapi juga belajar dari pengalaman.
              </p>
            </div>

            {/* Magical Skills */}
            <div className="bg-black/30 rounded-xl p-6 border border-hogwarts-gold/30">
              <h3 className="text-2xl font-serif mb-4">Magical Skills</h3>
              <div className="space-y-4">
                {[
                  { skill: 'Numerical', level: '88%' },
                  { skill: 'Public Speaker', level: '87%' },
                  { skill: 'Graphic Designer', level: '85%' },
                  { skill: 'Photography', level: '80%' },
                ].map((item) => (
                  <div key={item.skill}>
                    <div className="flex justify-between mb-1">
                      <span className="font-serif">{item.skill}</span>
                      <span className="text-hogwarts-gold/80">{item.level}</span>
                    </div>
                    <div className="w-full h-2 bg-hogwarts-gold/20 rounded-full">
                      <div 
                        className="h-full bg-hogwarts-gold rounded-full" 
                        style={{width: item.level}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Magical Organization */}
          <div className="mt-12 bg-black/30 rounded-xl p-6 border border-hogwarts-gold/30">
            <h3 className="text-2xl font-serif mb-6 text-center">Magical organization</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'OSIS',
                  icon: '🏆',
                  description: 'Suatu Organisasi yang mengajarkan saya tentang rumah yang tekselalu berbentuk bangunan'
                },
                {
                  title: 'PMR',
                  icon: '⚡',
                  description: 'Membuat saya mengerti tentang pertolongan pertama pada kecelakaan'
                },
                {
                  title: 'Duta Genre',
                  icon: '👑',
                  description: 'Organisasi yang mengajarkan saya tentang pentingnya generasi muda dalam membangun bangsa'
                }
              ].map((organization) => (
                <div 
                  key={organization.title}
                  className="text-center p-4 rounded-lg hover:bg-hogwarts-gold/10 transition-all duration-300"
                >
                  <span className="text-4xl mb-4 block">{organization.icon}</span>
                  <h4 className="font-serif text-xl mb-2">{organization.title}</h4>
                  <p className="text-hogwarts-gold/80 text-sm">{organization.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}