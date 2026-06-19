export const graphData = {
  nodes: [
    // ── MERKEZ ──────────────────────────────────────
    {
      id: "me",
      label: "Tülin Eren",
      group: "center",
      description: "Merhaba! Ben Tülin Eren. Bilgisayar Mühendisliği 3. sınıf öğrencisiyim. Merak etmeyi, yeni şeyler öğrenmeyi ve öğrendiklerimi bir şeyler üretmek için kullanmayı seviyorum. Bu harita da aslında kafamın içindeki küçük bir özet; ilgilendiğim alanları, yaptığım projeleri, deneyimlerimi ve bana keyif veren şeyleri keşfedebilirsin.",
      emoji: "🧠",
      images: ["/beyin-haritasi/profile/tulin.jpeg"],
    },

    // ── TEKNİK YETENEKLER ───────────────────────────
    {
      id: "skills",
      label: "Teknik Yetenekler",
      group: "skill",
      description: "Yazılım geliştirme, veri analizi ve sistem yönetimi alanlarında edindiğim teknik becerileri kapsıyor.",
      emoji: "🛠️",
    },
    {
      id: "python",
      label: "Python",
      group: "skill",
      description: "Veri analizi, otomasyon ve makine öğrenmesi projelerinde aktif olarak kullanıyorum. Pandas, Matplotlib ve Scikit-learn kütüphanelerine hakimim. Bootcamp projelerimde Python ile uçtan uca veri analizi gerçekleştirdim.",
      emoji: "🐍",
    },
    {
      id: "sql",
      label: "SQL",
      group: "skill",
      description: "Veritabanı tasarımı ve sorgulama konularında deneyimliyim. İlişkisel veritabanlarında veri modelleme, JOIN işlemleri ve performans optimizasyonu üzerine çalışmalar yaptım.",
      emoji: "🗄️",
      images: ["/beyin-haritasi/profile/sql.png"],
    },
    {
      id: "react",
      label: "React",
      group: "skill",
      description: "Bileşen tabanlı UI geliştirme için kullanıyorum. useState, useEffect ve custom hook'larla çalışıyorum. Bu portfolyo sitesi de React ile geliştirildi!",
      emoji: "⚛️",
    },
    {
      id: "unity",
      label: "Unity",
      group: "skill",
      description: "GameJam 2025 etkinliğinde Unity ile oyun geliştirme sürecinde yer aldım. UI tasarımı ve kullanıcı deneyimi akışlarının oluşturulmasında katkı sağladım.",
      emoji: "🎮",
      images: ["/beyin-haritasi/profile/unity.jpeg"],
    },
    {
      id: "dataanalysis",
      label: "Veri Analizi",
      group: "skill",
      description: "Gerçek veri setleri üzerinde temizleme, görselleştirme ve yorum süreçlerini uçtan uca yürüttüm. Hacker News projemde trendleri ve ani değişimleri analiz ettim.",
      emoji: "📈",
    },
    {
      id: "sysadmin",
      label: "Sistem Yönetimi",
      group: "skill",
      description: "Sarten Ambalaj stajımda Windows kurulumu, Active Directory, VPN, disk klonlama ve uzaktan erişim çözümleri üzerinde çalıştım. Kurumsal BT süreçlerini yakından deneyimledim.",
      emoji: "🖥️",
      images: ["/beyin-haritasi/profile/sysadmin.jpeg"],
    },

    // ── PROJELER ────────────────────────────────────
    {
      id: "projects",
      label: "Projeler",
      group: "project",
      description: "Geliştirdiğim ve katkıda bulunduğum yazılım projelerini kapsıyor.",
      emoji: "🚀",
    },
    {
      id: "lara",
      label: "Lara Pilates",
      group: "project",
      description: "Şu anda aktif olarak geliştirdiğim yönetim sistemi. Pilates stüdyolarının üyelik, ders planlama, eğitmen takibi ve öğrenci yönetimi süreçlerini dijitalleştiriyor. Kullanıcı deneyimi ve veri yönetimi açısından değerli bir gerçek dünya projesi.",
      emoji: "🧘‍♀️",
    },
    {
      id: "hackernews",
      label: "Hacker News Analizi",
      group: "project",
      description: "Data & AI Bootcamp kapsamında geliştirdiğim veri analizi projesi. Hacker News verilerini inceleyerek teknoloji dünyasında hangi konuların yükselişte olduğunu analiz ettim. Bu proje ile bootcampte 2.'lik ödülü kazandım. 🥈",
      emoji: "📊",
      link: "https://github.com/tulineren/Hacker_News_Technology_Earthquakes_Analysis",
    },
    {
      id: "simshield",
      label: "SimShield",
      group: "project",
      description: "Code Night 2025 yarışmasında ekibimle geliştirdiğimiz proje. IoT cihazlarındaki SIM kartların veri kullanımını analiz ederek anormal davranışları tespit eden bir sistem. 19 takım arasından ilk 5'e girdik! 🏅",
      emoji: "🛡️",
      link: "https://github.com/tulineren/SimShield.git",
    },
    {
      id: "lightyear",
      label: "10th Light Year",
      group: "project",
      description: "GameJam 2025 etkinliğinde geliştirilen oyun projesinde UI tasarımı ve kullanıcı deneyimi süreçlerinde görev aldım. Oyun arayüzleri ve kullanıcı akışlarının tasarımında katkı sağladım.",
      emoji: "🎮",
      link: "https://github.com/tulineren/GameJam2025.git",
    },

    // ── DENEYİM ─────────────────────────────────────
    {
      id: "experience",
      label: "Deneyim",
      group: "experience",
      description: "Gerçek iş ortamında edindiğim staj ve pratik deneyimlerim.",
      emoji: "💼",
    },
    {
      id: "sarten",
      label: "Sarten",
      group: "experience",
      description: "Bilgi Teknolojileri Stajyeri olarak görev yaptım. Windows kurulumu, Active Directory, VPN bağlantıları, yazıcı tanımlamaları ve kullanıcı destek süreçlerinde aktif rol aldım. Disk klonlama ve uzaktan erişim çözümleri üzerinde de çalıştım.",
      emoji: "🏭",
    },
    {
      id: "bootcamp",
      label: "Data & AI Bootcamp",
      group: "experience",
      description: "Balıkesir Teknokent ve Global Maksimum tarafından düzenlenen Veri ve Yapay Zeka Bootcamp programını başarıyla tamamladım. Veri analizi, SQL, Python ve makine öğrenmesi konularında uygulamalı eğitim aldım.",
      emoji: "🎓",
    },

    // ── İLGİ ALANLARI ───────────────────────────────
    {
      id: "interests",
      label: "İlgi Alanları",
      group: "interest",
      description: "Beni heyecanlandıran ve daha fazlasını öğrenmek istediğim teknoloji alanları.",
      emoji: "🔭",
    },
    {
      id: "ai",
      label: "Yapay Zeka",
      group: "interest",
      description: "Makine öğrenmesi ve büyük dil modellerinin nasıl çalıştığını merak ediyorum. AI araçlarını projelerimde ve günlük hayatımda aktif olarak kullanıyorum.",
      emoji: "🤖",
    },
    {
      id: "cybersec",
      label: "Siber Güvenlik",
      group: "interest",
      description: "Ağ güvenliği, tehdit analizi ve güvenli sistem tasarımı konularına ilgi duyuyorum. SimShield projemde IoT güvenliği alanında pratik deneyim kazandım.",
      emoji: "🔐",
    },
    {
      id: "uiux",
      label: "UI/UX Tasarım",
      group: "interest",
      description: "Kullanıcı odaklı arayüz tasarımı ve deneyim tasarımı ilgi alanlarım arasında. GameJam projesinde oyun UI'ı tasarlayarak bu alanda deneyim kazandım.",
      emoji: "🎨",
    },
    {
      id: "datasci",
      label: "Veri Bilimi",
      group: "interest",
      description: "Veriden anlam çıkarmak ve tahminler yapmak beni heyecanlandırıyor. Makine öğrenmesi algoritmaları ve istatistiksel modelleme üzerine çalışmaya devam ediyorum.",
      emoji: "📊",
    },

    // ── HOBİLER ─────────────────────────────────────
    {
      id: "hobbies",
      label: "Hobiler",
      group: "hobby",
      description: "Yoğun derslerden, projelerden ve kod yazmaktan biraz uzaklaşıp kafamı dağıttığım şeyler. Bana iyi gelen aktivitelerle enerjimi topluyorum.",
      emoji: "🌿",
    },
    {
      id: "fitness",
      label: "Pilates & Fitness",
      group: "hobby",
      description: "Düzenli olarak spor yapıyorum, hayatımın vazgeçilmez bir parçası haline geldi. Pilates ve fitness aktiviteleri hem fiziksel sağlığımı korumama hem de yoğun çalışma dönemlerinde zihinsel olarak dengede kalmama yardımcı oluyor.",
      emoji: "🏋️‍♀️",
      images: ["/beyin-haritasi/profile/fitness.jpeg"],
    },
    {
      id: "bike",
      label: "Bisiklet",
      group: "hobby",
      description: "Fırsat buldukça bisiklet sürmeyi seviyorum. Balıkesir'de yeni rotalar keşfetmek ve açık havada vakit geçirmek bana iyi geliyor. Hatta bir keresinde akademisyen hocalarımla birlikte sürüş yapma fırsatım olmuştu, benim için oldukça keyifli ve güzel bir anıydı.",
      emoji: "🚴‍♀️",
      images: ["/beyin-haritasi/profile/bike.jpeg"],
    },
    {
      id: "travel",
      label: "Seyahat",
      group: "hobby",
      description: "Yeni şehirler görmek, farklı kültürleri tanımak ve yeni deneyimler kazanmak beni en mutlu eden hobilerden. Seyahatlerim bana farklı bakış açıları kazandırıyor.",
      emoji: "✈️",
      images: [
    "/beyin-haritasi/profile/travel1.jpeg",
    "/beyin-haritasi/profile/travel2.jpeg",
    "/beyin-haritasi/profile/travel3.jpeg",
  ],
    },
    {
      id: "friends",
      label: "Sosyal Hayat",
      group: "hobby",
      description: "Arkadaşlarımla vakit geçirmek, yeni yerler keşfetmek ve güzel anılar biriktirmek benim için önemli. Güçlü iletişim becerilerim ekip çalışmalarında da bana avantaj sağlıyor.",
      emoji: "👭",
    },
  ],

  links: [
    { source: "me", target: "skills" },
    { source: "me", target: "projects" },
    { source: "me", target: "experience" },
    { source: "me", target: "interests" },
    { source: "me", target: "hobbies" },

    { source: "skills", target: "python" },
    { source: "skills", target: "sql" },
    { source: "skills", target: "react" },
    { source: "skills", target: "unity" },
    { source: "skills", target: "dataanalysis" },
    { source: "skills", target: "sysadmin" },

    { source: "projects", target: "lara" },
    { source: "projects", target: "hackernews" },
    { source: "projects", target: "simshield" },
    { source: "projects", target: "lightyear" },

    { source: "experience", target: "sarten" },
    { source: "experience", target: "bootcamp" },

    { source: "interests", target: "ai" },
    { source: "interests", target: "cybersec" },
    { source: "interests", target: "uiux" },
    { source: "interests", target: "datasci" },

    { source: "hobbies", target: "fitness" },
    { source: "hobbies", target: "bike" },
    { source: "hobbies", target: "travel" },
    { source: "hobbies", target: "friends" },

    { source: "python", target: "hackernews" },
    { source: "python", target: "datasci" },
    { source: "sql", target: "lara" },
    { source: "react", target: "lara" },
    { source: "unity", target: "lightyear" },
    { source: "sysadmin", target: "sarten" },
    { source: "bootcamp", target: "hackernews" },
    { source: "cybersec", target: "simshield" },
    { source: "uiux", target: "lightyear" },
    { source: "ai", target: "datasci" },
    { source: "fitness", target: "lara" },
  ],
};

export const GROUP_COLORS = {
  center:     "#ffffff",
  skill:      "#60a5fa",
  interest:   "#a78bfa",
  project:    "#fb923c",
  hobby:      "#4ade80",
  experience: "#f472b6",
};

export const GROUP_LABELS = {
  center:     "Merkez",
  skill:      "Beceri",
  interest:   "İlgi",
  project:    "Proje",
  hobby:      "Hobi",
  experience: "Deneyim",
};