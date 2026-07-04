"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranslator, setShowTranslator] = useState(false);
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <button onClick={() => setShowTranslator(!showTranslator)} className="bg-white text-pink-400 p-4 rounded-full shadow-lg hover:scale-110 transition border border-pink-200 hover:animate-spin">🌐</button>
      {showTranslator && (
        <div className="absolute bottom-20 right-0 bg-white p-5 rounded-2xl shadow-2xl border border-pink-100 w-72 animate-in fade-in zoom-in">
          <h3 className="text-pink-400 font-bold mb-3 text-sm">Hızlı Çeviri (TR-EN)</h3>
          <input value={text} onChange={async (e) => { const val = e.target.value; setText(val); if (val.length > 1) { const res = await fetch(`https://api.mymemory.translated.net/get?q=${val}&langpair=tr|en`); const data = await res.json(); setTranslatedText(data.responseData.translatedText); } else { setTranslatedText(""); } }} placeholder="Kelime yaz..." className="w-full border border-pink-200 rounded-lg p-2 text-sm mb-3 text-gray-800 outline-none" />
          <div className="bg-pink-50 p-3 rounded-lg text-pink-500 font-bold text-center min-h-[40px] flex items-center justify-center">{translatedText || "..."}</div>
        </div>
      )}
      <audio ref={audioRef} src="/music.mp3" loop />
      <button onClick={toggleMusic} className="bg-pink-400 text-white p-4 rounded-full shadow-lg hover:scale-110 transition animate-bounce">{isPlaying ? "🎶" : "🎵"}</button>
    </div>
  );
};

const Navbar = ({ onHakkimdaClick, onBlogClick, onDerslerClick, onKurslarClick, onMailClick }: any) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showIletisimDropdown, setShowIletisimDropdown] = useState(false); // Dropdown için state

  return (
    <header className="flex flex-col relative z-[100]">
      <div className="bg-pink-200 text-black text-xs py-2 px-6 md:px-12 flex justify-between items-center animate-pulse overflow-hidden">
        <span className="truncate">✉️ sevvalakkoc3@gmail.com | 📍 Online Ders – Her yerden katıl!</span>
      </div>
      
      <nav className="flex justify-between items-center py-4 px-6 md:px-12 bg-[#FFF9FB] border-b border-pink-100">
        <div className="flex items-center gap-2">
          <span className="text-2xl animate-bounce">🧸</span>
          <div className="text-xl md:text-3xl font-bold text-pink-400 font-hand">English with Şevval</div>
        </div>

        <div className="flex items-center gap-3 relative">
          {/* Dropdown içeren İletişim Butonu */}
          <button 
            onClick={() => setShowIletisimDropdown(!showIletisimDropdown)} 
            className="bg-pink-400 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-pink-500 transition"
          >
            İletişim ❤️
          </button>
          
          {showIletisimDropdown && (
            <div className="absolute top-12 right-0 w-48 bg-white border-2 border-pink-400 rounded-3xl p-4 shadow-2xl z-[110]">
              <a href="https://www.instagram.com/sevvalkocs" target="_blank" rel="noopener noreferrer" className="block p-2 text-pink-500 font-bold hover:bg-pink-50 rounded-lg">❤️ Instagram</a>
              <button onClick={() => { setShowIletisimDropdown(false); onMailClick(); }} className="block w-full p-2 text-pink-500 font-bold hover:bg-pink-50 rounded-lg text-left">❤️ Mail</button>
            </div>
          )}

          <button 
            className="md:hidden text-3xl text-pink-400 z-[110] relative" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        <div className={`${mobileMenuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-white p-6 shadow-2xl border-b border-pink-100 z-[105]' : 'hidden'} md:flex md:static md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-gray-700 font-bold items-center`}>
          <a href="#" className="hover:text-pink-400 transition" onClick={() => setMobileMenuOpen(false)}>Ana Sayfa</a>
          <button onClick={() => { onDerslerClick(); setMobileMenuOpen(false); }}>Dersler</button>
          <button onClick={() => { onKurslarClick(); setMobileMenuOpen(false); }}>Kurslar</button>
          <button onClick={() => { onHakkimdaClick(); setMobileMenuOpen(false); }}>Hakkımda</button>
          <button onClick={() => { onBlogClick(); setMobileMenuOpen(false); }}>Blog</button>
        </div>
      </nav>
    </header>
  );
};
const Hero = ({ onDerslerClick, onRulesClick }: any) => {
  const [showCard, setShowCard] = useState(false);

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-10 md:py-16 gap-8 z-10 relative">
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
          İngilizce öğrenmek artık çok daha <span className="text-pink-400 font-hand">eğlenceli!</span>
        </h1>
        <p className="text-base md:text-lg text-gray-600">Sana özel, eğlenceli ve etkili online İngilizce dersleriyle hedeflerine birlikte ulaşalım! ❤️</p>
        
        {/* Kapsayıcıya relative verdik, absolute olan kart bunun içinde kalacak */}
        <div className="flex flex-col gap-3 w-full max-w-[280px] mx-auto md:flex-row md:w-auto md:mx-0 relative">
          <button onClick={onDerslerClick} className="bg-pink-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-500 shadow-lg w-full">Derslerimi İncele ❤️</button>
          <button onClick={onRulesClick} className="bg-white text-pink-400 border-2 border-pink-400 px-6 py-3 rounded-full font-semibold hover:bg-pink-50 shadow-md w-full">Rules</button>
          
          <button onClick={() => setShowCard(!showCard)} className="bg-pink-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-500 shadow-lg w-full">Bilgi Al ❤️</button>
          
          {showCard && (
            <div className="absolute top-full mt-3 left-0 md:left-auto md:right-0 w-64 bg-white p-6 rounded-3xl shadow-2xl border-2 border-pink-100 z-[70] animate-in fade-in zoom-in">
              <h3 className="text-pink-400 font-bold mb-3 text-center border-b border-pink-50 pb-2">İletişim Bilgileri</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Mail:</strong> sevvalakkoc3@gmail.com</p>
                <p><strong>İnstagram:</strong> sevvalkocs</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative bg-white p-4 rounded-3xl shadow-xl rotate-2 border border-gray-100 scale-90 md:scale-100">
          <div className="w-64 h-80 md:w-80 md:h-96 relative overflow-hidden rounded-2xl">
            <Image src="/svvl.png" alt="Şevval Hoca" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Courses = () => {
  const courseList = [
    { title: "Kişiye Özel Dersler", desc: "Seviyene ve ihtiyacına uygun özel programlar.", emoji: "❤️" },
    { title: "Etkili & Eğlenceli", desc: "Oyunlar, aktiviteler ve modern içeriklerle öğrenme.", emoji: "📖" },
    { title: "Konuşma Odaklı", desc: "Bol konuşma pratiği ile özgüven kazan!", emoji: "🐻" },
    { title: "Online & Esnek", desc: "Dilediğin yerden, dilediğin zaman katıl.", emoji: "💻" },
  ];
  return (
    <section className="py-20 px-12 bg-white relative">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0">
        {courseList.map((course, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center text-center space-y-4 md:px-8 group">
              <span className="text-6xl mb-2 transition-transform duration-300 group-hover:scale-125 animate-bounce">{course.emoji}</span>
              <h3 className="text-xl font-bold text-gray-800 font-hand">{course.title}</h3>
              <p className="text-gray-600 text-sm max-w-[200px]">{course.desc}</p>
            </div>
            {index < courseList.length - 1 && (<div className="hidden md:block h-32 border-l-2 border-dashed border-pink-300 mx-4 relative"><span className="text-pink-300 absolute -left-3 top-1/2 animate-pulse">❤️</span></div>)}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section className="bg-[#FFC6E0] pt-20 pb-16 px-12 relative overflow-hidden">
    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-30 animate-fly"><Image src="/butterfly.png" alt="Kelebek" width={200} height={200} className="drop-shadow-2xl animate-pulse" /></div>
    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-30 animate-fly [animation-delay:2s]"><Image src="/butterfly.png" alt="Kelebek" width={120} height={120} className="drop-shadow-lg" /></div>
    <h2 className="text-3xl font-bold text-center mb-10 text-white font-modern mt-10">Öğrencilerim Ne Diyor?</h2>
    <div className="flex gap-6 overflow-x-auto pb-4 justify-center">
      {[ { text: "İngilizce korkumu Şevval Hoca ile yendim!", name: "Ayşe Y." }, { text: "Çok keyifli geçiyor dersler.", name: "Fatma K." }, { text: "Online derslerden çok verim aldım!", name: "Mehmet A." } ].map((item, i) => (
        <div key={i} className="min-w-[300px] max-w-[400px] p-6 bg-white rounded-2xl shadow-sm border border-pink-50 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
          <p className="italic text-gray-600 font-modern">"{item.text}"</p>
          <span className="block mt-4 font-bold text-pink-400 font-modern">— {item.name}</span>
        </div>
      ))}
    </div>
  </section>
);

const HeartDoodle = ({ className }: { className: string }) => (
  <div className={`absolute pointer-events-none opacity-20 ${className}`}>
    <svg width="40" height="40" viewBox="0 0 24 24" fill="#FF85A2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
  </div>
);

export default function Home() {
  const [showHakkimda, setShowHakkimda] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [showDersler, setShowDersler] = useState(false);
  const [showKurslar, setShowKurslar] = useState(false);
  const [showMailForm, setShowMailForm] = useState(false);
  const [showRules, setShowRules] = useState(false);

  return (
    <main className="min-h-screen bg-[#FFF9FB] relative overflow-hidden">
      <HeartDoodle className="top-5 left-5 rotate-12 scale-75" /><HeartDoodle className="top-32 right-10 -rotate-12" />
      <Navbar
        onHakkimdaClick={() => setShowHakkimda(true)}
        onBlogClick={() => setShowBlog(true)}
        onDerslerClick={() => setShowDersler(true)}
        onKurslarClick={() => setShowKurslar(true)}
        onMailClick={() => setShowMailForm(true)}
      />
      <Hero 
        onDerslerClick={() => setShowDersler(true)} 
        onRulesClick={() => setShowRules(true)} 
        onIletisimClick={() => setModal("iletisim")}
      />
      <Courses />
      <Testimonials />
      
      {/* Rules Modalı */}
      {showRules && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 animate-in fade-in">
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-2xl w-full relative animate-in zoom-in duration-300 overflow-y-auto max-h-[80vh]">
            <button onClick={() => setShowRules(false)} className="absolute top-4 right-4 text-gray-400 hover:text-pink-400 text-2xl">×</button>
            <h2 className="text-3xl font-bold text-pink-400 mb-6 font-hand">Ders İptalleri ve Ertelemeler</h2>
            <ul className="space-y-4 text-gray-700 list-disc pl-5">
              <li>Ders iptali veya erteleme talepleri en az 24 saat önceden bildirilmelidir.</li>
              <li>Son dakika yapılan iptal bildirimleri telafi dersi hakkını etkileyebilir.</li>
              <li>Öğretmen kaynaklı iptallerde ders için uygun bir telafi günü belirlenir.</li>
              <li>Öğrenci derse mazeretsiz katılmazsa ders yapılmış sayılabilir.</li>
              <li>Online derslerde teknik sorun yaşanması durumunda ders süresi telafi edilir.</li>
              <li>Ertelenen dersler, tarafların ortak uygunluğuna göre planlanır.</li>
              <li>Ders saatine geç kalınması durumunda ders süresi uzatılmayabilir.</li>
              <li>Tüm değişiklikler yazılı mesaj veya e-posta yoluyla bildirilmelidir.</li>
            </ul>
            <div className="mt-8 p-4 bg-red-100/50 rounded-lg border border-red-200 text-red-600 font-bold text-center">
              !! Yüzyüze ön görüşme yapılmamaktadır.
            </div>
          </div>
        </div>
      )}

      {showHakkimda && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 animate-in fade-in">
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-lg w-full relative animate-in zoom-in duration-300">
            <button onClick={() => setShowHakkimda(false)} className="absolute top-4 right-4 text-gray-400 hover:text-pink-400 text-2xl">×</button>
            <h2 className="text-3xl font-bold text-pink-400 mb-4 font-hand">Hakkımda</h2>
            <p className="text-gray-600">Tutkulu bir İngilizce eğitmeniyim. Seninle birlikte bu dili en eğlenceli ve etkili şekilde öğrenmek için buradayım! ❤️</p>
          </div>
        </div>
      )}

      {showBlog && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 animate-in fade-in">
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-lg w-full relative animate-in zoom-in duration-300">
            <button onClick={() => setShowBlog(false)} className="absolute top-4 right-4 text-gray-400 hover:text-pink-400 text-2xl">×</button>
            <h2 className="text-3xl font-bold text-pink-400 mb-4 font-hand">Blog Yazıları</h2>
            <p className="text-gray-600">Henüz yeni bir blog yazısı eklenmedi! Yakında burada harika içerikler olacak. ❤️</p>
          </div>
        </div>
      )}

      {showKurslar && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 animate-in fade-in">
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-lg w-full relative animate-in zoom-in duration-300">
            <button onClick={() => setShowKurslar(false)} className="absolute top-4 right-4 text-gray-400 hover:text-pink-400 text-2xl">×</button>
            <h2 className="text-3xl font-bold text-pink-400 mb-4 font-hand">Kurslar</h2>
            <p className="text-gray-600">Şu anda hazırlık aşamasında olan harika kurslar yolda! Takipte kal. ❤️</p>
          </div>
        </div>
      )}

      {showDersler && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 animate-in fade-in">
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-4xl w-full relative animate-in zoom-in duration-300">
            <button onClick={() => setShowDersler(false)} className="absolute top-4 right-4 text-gray-400 hover:text-pink-400 text-2xl">×</button>
            <h2 className="text-3xl font-bold text-pink-400 mb-8 font-hand text-center">Ders Seçenekleri</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "VIP Ders", fiyatlar: ["1 Ders (60 dk): 1.000 ₺", "Aylık Paket (8 Ders): 6.000 ₺"], link: "https://ig.me/m/sevvalkocs" },
                { title: "Grup Dersleri (2 Kişi)", fiyatlar: ["1 Ders (Kişi Başı / Seans): 800 ₺", "Aylık Paket: 4.500 ₺"], link: "https://ig.me/m/sevvalkocs" },
                { title: "Grup Dersleri (3 Kişi)", fiyatlar: ["1 Ders (Kişi Başı / Seans): 700 ₺", "Aylık Paket: 4.000 ₺"], link: "https://ig.me/m/sevvalkocs" },
              ].map((ders, i) => (
                <a key={i} href={ders.link} target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-pink-50 border border-pink-100 hover:border-pink-300 transition-all cursor-pointer hover:shadow-lg group block text-center">
                  <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform">🧸</span>
                  <h3 className="text-lg font-bold text-gray-800">{ders.title}</h3>
                  <div className="text-sm text-gray-600 mt-2 space-y-1">{ders.fiyatlar.map((f, j) => (<p key={j} className="bg-white p-1 rounded shadow-sm">{f}</p>))}</div>
                </a>
              ))}
              <a href="https://ig.me/m/sevvalkocs" target="_blank" className="p-6 rounded-2xl bg-pink-100 border border-pink-200 hover:border-pink-300 transition-all cursor-pointer hover:shadow-lg group block text-center flex flex-col justify-center">
                <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform">✨</span>
                <h3 className="text-lg font-bold text-gray-800">Şevval Koç</h3>
                <p className="text-sm text-gray-600 mt-2">Detaylı bilgi ve soruların için bana buradan ulaşabilirsin!</p>
                <span className="mt-4 text-pink-500 font-bold underline">Mesaj Gönder</span>
              </a>
            </div>
          </div>
        </div>
      )}
      
      <footer className="py-12 border-t border-pink-100 flex flex-col items-center gap-6">
        <div className="inline-block animate-pulse text-2xl font-bold text-pink-400 font-hand tracking-widest">ŞEVVAL KOÇ</div>
        <div className="flex gap-6 text-gray-500 font-semibold">
          <a href="https://www.instagram.com/sevvalkocs" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">Instagram</a>
          <a href="https://www.tiktok.com/@sevvalkocs" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">TikTok</a>
          <a href="https://www.youtube.com/@sevvalkocs" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">YouTube</a>
        </div>
        <p className="text-sm text-gray-400">© 2026 Tüm Hakları Saklıdır.</p>
      </footer>
      <MusicPlayer />
    </main>
  );
}