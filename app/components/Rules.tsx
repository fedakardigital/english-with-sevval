export default function Rules() {
  return (
    <section className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/20 pb-4">
        Ders İptalleri ve Ertelemeler
      </h2>
      
      <ul className="space-y-4 text-gray-200 list-disc pl-5">
        <li>Ders iptali veya erteleme talepleri en az 24 saat önceden bildirilmelidir.</li>
        <li>Son dakika yapılan iptal bildirimleri telafi dersi hakkını etkileyebilir.</li>
        <li>Öğretmen kaynaklı iptallerde ders için uygun bir telafi günü belirlenir.</li>
        <li>Öğrenci derse mazeretsiz katılmazsa ders yapılmış sayılabilir.</li>
        <li>Online derslerde teknik sorun yaşanması durumunda ders süresi telafi edilir.</li>
        <li>Ertelenen dersler, tarafların ortak uygunluğuna göre planlanır.</li>
        <li>Ders saatine geç kalınması durumunda ders süresi uzatılmayabilir.</li>
        <li>Tüm değişiklikler yazılı mesaj veya e-posta yoluyla bildirilmelidir.</li>
      </ul>

      <div className="mt-6 p-4 bg-red-500/20 rounded-lg border border-red-500/30 text-red-100 font-semibold text-center">
        !! Yüzyüze ön görüşme yapılmamaktadır.
      </div>
    </section>
  );
}