// Data Silsilah Nabi
const prophets = [
  { name: "Adam", timeline: "Manusia pertama", info: "Diciptakan dari tanah, diturunkan ke bumi setelah melanggar larangan Allah." },
  { name: "Idris", timeline: "Generasi ke-2", info: "Dikenal sebagai ahli ilmu, diangkat ke langit tanpa meninggal." },
  { name: "Nuh", timeline: "Generasi ke-10", info: "Membangun bahtera untuk menyelamatkan umat beriman dari banjir besar." },
  { name: "Ibrahim", timeline: "Generasi ke-20", info: "Bapak monoteisme, ujian besar (penyembelihan Ismail)." },
  { name: "Muhammad ﷺ", timeline: "Generasi terakhir", info: "Penutup para nabi, lahir di Makkah tahun 570 M." }
];

// Data Makhluk sebelum Adam
const creaturesBeforeAdam = {
  malaikat: {
    title: "Malaikat",
    description: "Diciptakan dari cahaya (nur), tidak memiliki nafsu, selalu taat kepada Allah. Contoh: Jibril (penyampai wahyu), Mikail (pengatur rezeki).",
    source: "QS Al-Baqarah: 30-34"
  },
  jin: {
    title: "Jin",
    description: "Diciptakan dari api, memiliki nafsu dan pilihan (ada yang muslim dan kafir). Iblis adalah golongan jin yang menolak sujud kepada Adam.",
    source: "QS Al-Hijr: 26-27"
  }
};

// Fungsi untuk menampilkan detail
function showDetail(creature) {
  const detail = creaturesBeforeAdam[creature];
  alert(`${detail.title}\n\n${detail.description}\n\nSumber: ${detail.source}`);
}

// Fungsi untuk membuat timeline
function renderTimeline() {
  const container = document.getElementById('timeline-container');
  let html = '<div class="timeline">';

  prophets.forEach(prophet => {
    html += `
      <div class="timeline-item">
        <h3>${prophet.name}</h3>
        <p><em>${prophet.timeline}</em></p>
        <p>${prophet.info}</p>
      </div>
    `;
  });

  html += '</div>';
  container.innerHTML = html;
}

// Inisialisasi
document.addEventListener('DOMContentLoaded', () => {
  renderTimeline();
});
