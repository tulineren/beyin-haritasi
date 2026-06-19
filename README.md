<<<<<<< HEAD
# 🧠 Beynimin Haritası

Kişisel ilgi ve düşünce ağım — React + react-force-graph-2d ile yapılmış interaktif portfolyo.

## 🚀 Kurulum (5 adım)

```bash
# 1. Klasörü aç
cd beyin-haritasi

# 2. Bağımlılıkları yükle
npm install

# 3. Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcıda `http://localhost:5173` adresini aç.

---

## ✏️ Kendi Bilgilerini Gir

**`src/data/graphData.js`** dosyasını aç ve:

| Alan | Yapılacak |
|------|-----------|
| `label: "Adın Soyadın"` | Kendi adını yaz |
| `description: "..."` | Her düğümün açıklamasını yaz |
| `emoji: "🎸"` | Beğendiğin emojiyi koy |
| `link: "..."` | GitHub/proje linkini ekle |
| `// img: "/foto.jpg"` | Başındaki `//` yi kaldır, `public/` e fotoğrafını koy |
| Yeni düğüm ekle | `nodes` ve `links` dizisine ekle |

---

## 🌍 GitHub Pages'e Yayınlama

```bash
# 1. package.json'da "homepage" alanını ekle:
#    "homepage": "https://KULLANICI-ADIN.github.io/beyin-haritasi"

# 2. Tek komutla deploy et:
npm run deploy
```

---

## 📁 Proje Yapısı

```
src/
├── data/
│   └── graphData.js      ← Buraya kendi verilerini gir!
├── components/
│   ├── DetailPanel.jsx   ← Sağdaki açıklama paneli
│   ├── DetailPanel.css
│   └── Legend.jsx        ← Renk göstergesi
├── App.jsx               ← Ana bileşen (graf + state yönetimi)
├── App.css
└── main.jsx
public/
└── foto.jpg              ← Kendi fotoğrafını buraya koy
```

---

## 🎨 Renk Şeması

| Kategori | Renk |
|----------|------|
| Beceri | 🔵 Mavi `#60a5fa` |
| İlgi | 🟣 Mor `#a78bfa` |
| Proje | 🟠 Turuncu `#fb923c` |
| Hobi | 🟢 Yeşil `#4ade80` |
=======
# beyin-haritasi
>>>>>>> 8139360aa1dda998d816785cff70af40d54742d3
