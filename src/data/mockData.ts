import {
  Story,
  Petition,
  GrassrootsCommunity,
  VoiceReport,
  DataSourceItem,
  FactSheetItem,
} from '@/types';

export const stories: Story[] = [
  {
    id: 'story-1',
    slug: 'di-balik-rencana-pemindahan-badak-jawa',
    title: 'Di Balik Rencana Pemindahan Badak Jawa: Penyelamatan atau Bencana Ekologis Baru?',
    excerpt:
      'Dengan populasi kurang dari 80 individu yang terkonsentrasi di semenanjung Ujung Kulon, usulan habitat kedua memicu polemik sengit antara ahli genetika dan pemangku kebijakan.',
    content: `
# Suaka Terakhir di Ujung Barat Pulau Jawa

Semenanjung Ujung Kulon, Banten, adalah benteng pertahanan terakhir bagi *Rhinoceros sondaicus*—salah satu mamalia darat paling terancam punah di muka bumi. Berdasarkan data pemantauan camera trap Kementerian Lingkungan Hidup dan Kehutanan (KLHK) bersama para mitra konservasi, angka populasi riil yang terpantau secara konsisten berada di bawah 80 individu. 

Kini, wacana pembentukan **habitat kedua (second population)** kembali memanas di meja para peneliti dan pengambil kebijakan di Jakarta. Satu kelompok pakar menegaskan bahwa menempatkan seluruh telur dalam satu keranjang adalah bunuh diri ekologis—terutama dengan ancaman letusan Gunung Anak Krakatau dan potensi tsunami Selat Sunda. Namun, kelompok lain memperingatkan bahwa pemindahan paksa satwa yang sangat rentan stres ini justru bisa memicu kematian fatal di perjalanan.

> "Ujung Kulon bukan sekadar hutan lindung. Ini adalah ruang hidup terakhir di mana badak jawa masih memiliki memori genetik untuk bertahan hidup. Salah langkah dalam relokasi berarti kita menulis bab penutup bagi spesies ini."
> — **Dr. Hendra Gunawan**, Peneliti Konservasi Satwa Liar.

### Mengapa Risiko Inbreeding Begitu Menghantui?
Populasi yang sangat kecil di wilayah terisolasi telah menyebabkan penurunan keanekaragaman genetik yang ekstrem. Penyakit menular atau depresi silang-dalam (inbreeding depression) dapat menyapu bersih seluruh generasi muda hanya dalam hitungan bulan.

### Suara Penolakan dari Garis Depan
Warga lokal dan ranger lapangan yang telah berpatroli puluhan tahun di semenanjung berpendapat bahwa fokus pemerintah seharusnya memperketat pengamanan buffer zone dari perburuan liar bersenjata api dan invasi tanaman langkap (*Arenga obtusifolia*) yang menekan ruang pakan alami badak, bukan terburu-buru melakukan translokasi berisiko tinggi.
    `,
    category: 'For the Animal',
    categoryLabel: 'Konservasi Satwa Kritis',
    author: {
      name: 'Rian Pratama',
      role: 'Investigative Environmental Journalist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026-11-18T08:30:00Z',
    readTime: '6 menit baca',
    coverImage: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1600&q=85',
    views: 48920,
    isFeaturedHome: true,
    isSpotlight: true,
    urgentBadge: 'EKSKLUSIF INVESTIGASI',
    scientificTooltips: [
      {
        term: 'Inbreeding Depression',
        explanation: 'Penurunan kebugaran biologis pada populasi akibat perkawinan sedarah yang terus menerus dalam kelompok kecil.',
        source: 'BRIN Ekologi Molekuler',
      },
      {
        term: 'Camera Trap Census',
        explanation: 'Metodologi pencacahan visual otomatis 24 jam dengan sensor inframerah untuk mengidentifikasi corak cula dan lipatan kulit individu.',
        source: 'Balai TN Ujung Kulon',
      },
      {
        term: 'Carrying Capacity',
        explanation: 'Kapasitas daya dukung habitat dalam menyediakan pakan alami dan teritori tanpa merusak keseimbangan rantai pakan.',
        source: 'IUCN Asian Rhino Specialist Group',
      },
    ],
  },
  {
    id: 'story-2',
    slug: 'hilangnya-2400-hektar-daratan-demak',
    title: 'Hilangnya 2.400 Hektar Daratan Demak: Ketika Laut Menelan Desa dan Makam Leluhur',
    excerpt:
      'Citra satelit rentang 15 tahun membuktikan laju penurunan tanah mencapai 10-14 cm per tahun di pesisir Timbulsloko dan Sriwulan. Warga hidup beralaskan jembatan papan yang terus ditinggikan.',
    content: `
# Saat Daratan Berubah Menjadi Selat Buatan

Di Desa Timbulsloko, Kabupaten Demak, Jawa Tengah, suara deburan ombak bukan lagi pemandangan pantai yang menenangkan, melainkan alarm ancaman air masuk ke dalam kamar tidur setiap kali pasang laut (rob) tiba. Sejak tahun 2010 hingga 2026, lebih dari 2.400 hektar sawah, tambak, jalan aspal, hingga pemakaman leluhur telah hilang permanen di bawah permukaan Laut Jawa.

### Penurunan Tanah dan Krisis Ekstraksi Air
Kombinasi antara kenaikan muka air laut global akibat krisis iklim dan laju penurunan tanah (land subsidence) masif yang dipicu oleh penyedotan air tanah industri di kawasan perbatasan Semarang-Demak menjadi pemicu utama.

Pemerintah daerah mengusulkan relokasi, namun ratusan keluarga menolak meninggalkan tanah kelahiran mereka tanpa kepastian kompensasi mata pencaharian nelayan.
    `,
    category: 'For the People',
    categoryLabel: 'Krisis Pesisir & Iklim',
    author: {
      name: 'Nadia Sitompul',
      role: 'Geospatial & Climate Field Reporter',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026-11-15T14:15:00Z',
    readTime: '8 menit baca',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
    views: 32410,
    isFeaturedHome: true,
    isSpotlight: false,
    urgentBadge: 'LAPORAN KHUSUS PANTURA',
    scientificTooltips: [
      {
        term: 'Land Subsidence',
        explanation: 'Amblesan vertikal permukaan tanah yang dipercepat oleh beban struktur berat dan pengambilan air tanah bawah tanah berlebihan.',
        source: 'Badan Geologi & BMKG',
      },
      {
        term: 'Tidal Inundation (Rob)',
        explanation: 'Genangan air laut berkala di kawasan pesisir rendah saat pasang tertinggi (Spring Tide).',
        source: 'Pusat Riset Kelautan BRIN',
      },
    ],
  },
  {
    id: 'story-3',
    slug: 'detak-bara-gambut-kahayan-hilir',
    title: 'Detak Bara Gambut Kahayan Hilir: Mengapa Api Bawah Tanah Tak Pernah Benar-Benar Padam?',
    excerpt:
      'Di kedalaman 4 meter di bawah permukaan rawa gambut Pulang Pisau, bara api terus membara tanpa asap terlihat hingga angin kemarau membangunkannya kembali.',
    content: `
# Karhutla: Tragedi yang Berulang Tiap Musim Kering

Kebakaran hutan dan lahan (karhutla) di Kalimantan Tengah bukan sekadar persoalan daun kering yang tersulut api di permukaan. Di kawasan gambut dalam Kahayan Hilir dan Pulang Pisau, pembakaran berlangsung lambat di bawah permukaan tanah (smoldering combustion).

Sensor termal satelit NASA VIIRS kerap mendeteksi anomali suhu tinggi meskipun di permukaan tanah tampak tenang. Ketika kubah gambut telah dikeringkan oleh kanal-kanal sawit dan proyek drainase, kadar air gambut turun drastis di bawah ambang batas aman 100%.
    `,
    category: 'For the Forest',
    categoryLabel: 'Hutan & Gambut Nusantara',
    author: {
      name: 'Bambang Triyono',
      role: 'Forest Fire Specialist & Ranger',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026-11-12T10:00:00Z',
    readTime: '5 menit baca',
    coverImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=85',
    views: 29150,
    isFeaturedHome: true,
    isSpotlight: false,
    urgentBadge: 'DATA SATELIT',
    scientificTooltips: [
      {
        term: 'Smoldering Combustion',
        explanation: 'Pembakaran tanpa api terbuka bersuhu rendah di pori-pori gambut kaya karbon yang sulit dipadamkan air permukaan biasa.',
        source: 'Pusat Studi Gambut IPB',
      },
    ],
  },
  {
    id: 'story-4',
    slug: 'jeritan-koridor-harimau-bukit-tigapuluh',
    title: 'Jeritan Koridor Harimau Terakhir di Hutan Lindung Bukit Tigapuluh',
    excerpt:
      'Fragmentasi habitat akibat jalan angkut batubara memotong jalur jelajah alami predator puncak Sumatra, memicu eskalasi konflik berdarah dengan pemukiman.',
    content: `
Ekosistem Bukit Tigapuluh di Riau-Jambi adalah bentang alam kritis yang menyatukan gajah sumatra, orangutan hasil reintroduksi, dan harimau sumatra (*Panthera tigris sumatrae*). Pembukaan konsesi jalan tambang telah mencabik koridor jelajah tradisional satwa.
    `,
    category: 'For the Animal',
    categoryLabel: 'Koridor Satwa Liar',
    author: {
      name: 'Rian Pratama',
      role: 'Investigative Environmental Journalist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026-11-09T09:00:00Z',
    readTime: '7 menit baca',
    coverImage: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=1600&q=85',
    views: 18450,
    isFeaturedHome: false,
    isSpotlight: false,
  },
  {
    id: 'story-5',
    slug: 'perjuangan-masyarakat-adat-awyu-papua',
    title: 'Perjuangan Masyarakat Adat Awyu Mempertahankan Hutan Terakhir Papua',
    excerpt:
      'Marga Woro dan suku Awyu melawan izin perkebunan sawit raksasa demi melindungi hutan adat yang menjadi lumbung obat, air bersih, dan identitas budaya.',
    content: `
Gugatan hukum warga adat Awyu sampai ke Mahkamah Agung menjadi simbol perlawanan masyarakat adat di garis terdepan terhadap deforestasi skala industri di Tanah Papua.
    `,
    category: 'For the People',
    categoryLabel: 'Kedaulatan Masyarakat Adat',
    author: {
      name: 'Nadia Sitompul',
      role: 'Geospatial & Climate Field Reporter',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026-11-05T11:20:00Z',
    readTime: '9 menit baca',
    coverImage: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1600&q=85',
    views: 24700,
    isFeaturedHome: false,
    isSpotlight: false,
    urgentBadge: 'HAK MASYARAKAT ADAT',
  },
  {
    id: 'story-6',
    slug: 'anomali-siklon-tropis-pesisir-selatan',
    title: 'Anomali Siklon Tropis di Dekat Garis Khatulistiwa: Alarm Krisis Samudera Hindia',
    excerpt:
      'Suhu permukaan laut yang melampaui 30°C di selatan Jawa melahirkan pusaran bibit siklon lebih sering. Nelayan tradisional kehilangan navigasi kalender pranata mangsa.',
    content: `
Kajian klimatologi BMKG mencatat frekuensi bibit siklon yang terbentuk di perairan dekat Jawa dan Nusa Tenggara meningkat 300% dalam dekade terakhir.
    `,
    category: 'For the Forest',
    categoryLabel: 'Klimatologi & Samudera',
    author: {
      name: 'Bambang Triyono',
      role: 'Forest Fire Specialist & Ranger',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    publishedAt: '2026-10-28T07:45:00Z',
    readTime: '6 menit baca',
    coverImage: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=1600&q=85',
    views: 15300,
    isFeaturedHome: false,
    isSpotlight: false,
  },
];

export const petitions: Petition[] = [
  {
    id: 'petisi-1',
    slug: 'moratorium-wisata-zona-penyangga-ujung-kulon',
    title: 'Tetapkan Zona Penyangga Darurat & Moratorium Proyek Komersial di Ujung Kulon',
    description:
      'Mendesak Kementerian LHK untuk segera menghentikan izin proyek pembangunan resort komersial di kawasan perbatasan Semenanjung Ujung Kulon dan memperluas patroli Rhino Protection Unit.',
    targetSignatures: 50000,
    currentSignatures: 38410,
    organizer: 'Aliansi Penyelamat Badak Jawa & Hutan Banten',
    targetEntity: 'Menteri Lingkungan Hidup dan Kehutanan RI',
    urgencyLevel: 'Critical',
    category: 'For the Animal',
    coverImage: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80',
    isFeaturedHome: true,
    daysLeft: 14,
  },
  {
    id: 'petisi-2',
    slug: 'moratorium-permanen-kanal-gambut-rawa-tripa',
    title: 'Keringkan dan Tutup Permanen Kanal Ilegal di Rawa Gambut Tripa & Kahayan',
    description:
      'Penutupan kanal buatan perkebunan sawit skala besar adalah kunci mutlak memulihkan muka air gambut agar bencana kebakaran hutan asap tahunan dapat diputus tuntas.',
    targetSignatures: 25000,
    currentSignatures: 19850,
    organizer: 'Masyarakat Peduli Gambut Nusantara',
    targetEntity: 'Badan Restorasi Gambut dan Mangrove (BRGM)',
    urgencyLevel: 'High',
    category: 'For the Forest',
    coverImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    isFeaturedHome: true,
    daysLeft: 22,
  },
  {
    id: 'petisi-3',
    slug: 'tanggul-laut-hijau-mangrove-demak',
    title: 'Bangun Tanggul Laut Hijau Berbasis Restorasi Mangrove di Pesisir Demak & Pekalongan',
    description:
      'Mendesak kementerian terkait menghentikan tanggul beton rapuh dan beralih ke sabuk hijau hutan mangrove selebar 500 meter yang terbukti menahan abrasi dan memulihkan ekosistem pesisir.',
    targetSignatures: 20000,
    currentSignatures: 16120,
    organizer: 'Jaringan Pemuda & Nelayan Pantura',
    targetEntity: 'Kementerian Pekerjaan Umum dan Perumahan Rakyat',
    urgencyLevel: 'High',
    category: 'For the People',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    isFeaturedHome: true,
    daysLeft: 9,
  },
  {
    id: 'petisi-4',
    slug: 'pengakuan-hutan-adat-papua-awyu',
    title: 'Sahkan SK Hutan Adat Suku Awyu dan Cabut Izin Deforestasi 36.000 Hektar',
    description:
      'Mendorong pemerintah pusat dan daerah segera menerbitkan surat keputusan penetapan hutan adat sebagai perlindungan hukum tertinggi bagi hak ulayat masyarakat Papua.',
    targetSignatures: 100000,
    currentSignatures: 84300,
    organizer: 'Koalisi Selamatkan Hutan Adat Papua',
    targetEntity: 'Pemerintah Provinsi Papua Selatan & KLHK',
    urgencyLevel: 'Critical',
    category: 'For the People',
    coverImage: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80',
    isFeaturedHome: false,
    daysLeft: 5,
  },
];

export const grassrootsCommunities: GrassrootsCommunity[] = [
  {
    id: 'comm-1',
    name: 'Masyarakat Peduli Api (MPA) Kahayan Hilir',
    location: 'Pulang Pisau, Kalimantan Tengah',
    region: 'Kalimantan Tengah',
    focus: 'Patroli Pemadaman Bawah Tanah & Pembasahan Ulang Gambut',
    contactUrl: 'https://instagram.com/icli.mpakahayan',
    memberCount: '120+ Relawan Lapangan',
    verified: true,
  },
  {
    id: 'comm-2',
    name: 'Jaringan Pemuda Pesisir Semarang & Demak',
    location: 'Demak & Semarang, Jawa Tengah',
    region: 'Jawa Tengah',
    focus: 'Penanaman Sabuk Mangrove & Advokasi Hak Rumah Tangga Terdampak Rob',
    contactUrl: 'https://instagram.com/icli.pemudapesisir',
    memberCount: '350+ Pemuda Pesisir',
    verified: true,
  },
  {
    id: 'comm-3',
    name: 'Rhino Protection Unit (RPU) Mitra Ujung Kulon',
    location: 'Sumur, Pandeglang, Banten',
    region: 'Banten',
    focus: 'Pencegahan Jerat Ilegal & Monitoring Satelit Camera Trap',
    contactUrl: 'https://instagram.com/icli.rpuujungkulon',
    memberCount: '80+ Jagawana & Tracker Adat',
    verified: true,
  },
  {
    id: 'comm-4',
    name: 'Koalisi Pemuda Adat Penjaga Lembah Baliem & Boven Digoel',
    location: 'Merauke & Boven Digoel, Papua',
    region: 'Papua Selatan',
    focus: 'Pemetaan Batas Wilayah Adat & Advokasi Keanekaragaman Hayati',
    contactUrl: 'https://instagram.com/icli.adatpapua',
    memberCount: '200+ Pemuda Adat',
    verified: true,
  },
];

export const voiceReports: VoiceReport[] = [
  {
    id: 'rep-001',
    ticketNumber: 'ICL-2026-0891',
    title: 'Aktivitas Alat Berat Ilegal di Buffer Zone TN Ujung Kulon',
    description:
      'Dua unit ekskavator terpantau membuka jalan rintis baru menuju kawasan penyangga dekat muara Cigenter. Tidak ada papan proyek resmi dari balai konservasi.',
    category: 'Pembalakan Liar',
    locationName: 'Blok Cigenter, Sumur, Pandeglang, Banten',
    coordinates: { lat: -6.7548, lng: 105.3421 },
    dateReported: '2026-11-19T06:45:00Z',
    isAnonymous: true,
    evidenceFiles: [
      {
        id: 'ev-1',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
        caption: 'Alat berat tanpa nomor polisi terparkir di batas hutan lindung.',
      },
    ],
    status: 'Pending',
    verificationSteps: {
      geoMatch: true,
      visualIntegrity: true,
      groundCorroboration: false,
    },
    adminNotes: 'Koordinat telah dicocokkan dengan peta zonasi KLHK. Menunggu konfirmasi kontak lapangan RPU.',
  },
  {
    id: 'rep-002',
    ticketNumber: 'ICL-2026-0884',
    title: 'Titik Asap Hitam Pekat di Lahan Gambut Bekas Kanal Sawit',
    description:
      'Warga mencium bau belerang dan melihat asap pekat keluar dari bawah permukaan tanah sejauh 500 meter dari pemukiman warga Desa Garung.',
    category: 'Kebakaran Gambut',
    locationName: 'Desa Garung, Jabiren Raya, Pulang Pisau, Kalimantan Tengah',
    coordinates: { lat: -2.3124, lng: 114.1567 },
    dateReported: '2026-11-18T13:20:00Z',
    isAnonymous: false,
    reporterName: 'Wayan Suwandi (Ketua RT 03)',
    reporterContact: 'wayan.rt03@pulangpisau.net',
    evidenceFiles: [
      {
        id: 'ev-2',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=600&q=80',
        caption: 'Rekaman asap bawah tanah yang mulai membakar akar pohon pelawan.',
      },
    ],
    status: 'Verified',
    verificationSteps: {
      geoMatch: true,
      visualIntegrity: true,
      groundCorroboration: true,
    },
    adminNotes: 'Telah terverifikasi silang dengan anomali panas VIIRS NASA FIRMS per tanggal 18 Nov.',
  },
  {
    id: 'rep-003',
    ticketNumber: 'ICL-2026-0879',
    title: 'Penemuan Jerat Kawat Baja di Jalur Jelajah Gajah Way Kambas',
    description:
      'Ditemukan 3 rangkaian jerat kawat seling baja yang dipasang sengaja di ketinggian kaki anak gajah pada jalur perlintasan air.',
    category: 'Satwa Liar',
    locationName: 'Resort Way Kanan, Balai TN Way Kambas, Lampung',
    coordinates: { lat: -4.9812, lng: 105.7891 },
    dateReported: '2026-11-17T11:00:00Z',
    isAnonymous: true,
    evidenceFiles: [
      {
        id: 'ev-3',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=600&q=80',
        caption: 'Kawat baja telah diamankan oleh warga dan diserahkan ke pos jaga.',
      },
    ],
    status: 'Investigating',
    verificationSteps: {
      geoMatch: true,
      visualIntegrity: true,
      groundCorroboration: false,
    },
  },
  {
    id: 'rep-004',
    ticketNumber: 'ICL-2026-0865',
    title: 'Limbah Pewarna Tekstil Mengalir Langsung ke Muara Morosari',
    description:
      'Air muara sungai berubah warna menjadi merah pekat dan ribuan ikan tambang mati terapung sejak pukul 03.00 dini hari.',
    category: 'Pencemaran Pesisir',
    locationName: 'Muara Morosari, Sayung, Demak, Jawa Tengah',
    coordinates: { lat: -6.9245, lng: 110.4938 },
    dateReported: '2026-11-15T09:15:00Z',
    isAnonymous: false,
    reporterName: 'Siti Rahmawati (Kelompok Petani Tambak)',
    reporterContact: 'siti.tambak@gmail.com',
    evidenceFiles: [
      {
        id: 'ev-4',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
        caption: 'Sampel air muara yang diambil warga pukul 06.00 WIB.',
      },
    ],
    status: 'Verified',
    verificationSteps: {
      geoMatch: true,
      visualIntegrity: true,
      groundCorroboration: true,
    },
    adminNotes: 'DLH Kabupaten Demak telah mengambil sampel resmi atas laporan ICLIMATE.',
  },
];

export const dataSources: DataSourceItem[] = [
  {
    id: 'src-1',
    name: 'Badan Meteorologi, Klimatologi, dan Geofisika',
    shortName: 'BMKG Indonesia',
    agency: 'Lembaga Pemerintah Nonkementerian RI',
    description:
      'Penyedia data radar cuaca nasional, anomali suhu muka laut Samudera Hindia dan Pasifik, pemantauan Indeks Standar Pencemar Udara (ISPU), serta peta potensi kekeringan meteorologis.',
    metrics: '34 Provinsi • 180 Stasiun Radar & Otomasi Cuaca',
    logo: 'https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?auto=format&fit=crop&w=120&q=80',
    url: 'https://www.bmkg.go.id',
    apiStatus: 'Realtime Live',
    lastSync: '10 menit yang lalu',
  },
  {
    id: 'src-2',
    name: 'Sipongi+ Karhutla Monitoring System',
    shortName: 'KLHK Sipongi+',
    agency: 'Kementerian Lingkungan Hidup dan Kehutanan RI',
    description:
      'Sistem pemantau titik panas (hotspot) kebakaran hutan dan lahan berbasis citra satelit NOAA-20, Terra/Aqua, dan SNPP-VIIRS yang diperbarui setiap 6 jam untuk seluruh teritorial RI.',
    metrics: 'Pemantauan Hotspot Harian • Analisis Luas Terbakar Hektaran',
    logo: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=120&q=80',
    url: 'https://sipongi.menlhk.go.id',
    apiStatus: 'Synchronized',
    lastSync: '25 menit yang lalu',
  },
  {
    id: 'src-3',
    name: 'NASA FIRMS & Global Forest Watch',
    shortName: 'NASA & WRI',
    agency: 'NASA Earth Science Data & World Resources Institute',
    description:
      'Data deteksi anomali termal global (Fire Information for Resource Management System) dengan resolusi spasial 375 meter dan pemetaan tutupan pohon historis dari Global Forest Watch.',
    metrics: 'Satelit VIIRS/MODIS • Glosarium Tutupan Pohon 2000-2026',
    logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=120&q=80',
    url: 'https://firms.modaps.eosdis.nasa.gov',
    apiStatus: 'Realtime Live',
    lastSync: '5 menit yang lalu',
  },
  {
    id: 'src-4',
    name: 'Badan Riset dan Inovasi Nasional & IUCN Red List',
    shortName: 'BRIN & IUCN',
    agency: 'Pusat Riset Biosistematika dan Evolusi BRIN & IUCN Global',
    description:
      'Rujukan otoritatif status kepunahan taksonomi flora fauna Nusantara, data sensus genetik badak jawa, harimau sumatra, dan inventarisasi keanekaragaman hayati lahan basah Indonesia.',
    metrics: 'Database 42.000 Spesies Nusantara • Kategori Keterancaman IUCN',
    logo: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=120&q=80',
    url: 'https://brin.go.id',
    apiStatus: 'Weekly Sync',
    lastSync: 'Kemarin, 21:00 WIB',
  },
];

export const factSheets: FactSheetItem[] = [
  {
    id: 'fact-1',
    title: 'Laporan Investigasi Khusus: Status Kritis Populasi Badak Jawa Ujung Kulon 2026',
    edition: 'Edisi November 2026 / Dokumen Ilmiah No. 11-ICL',
    organization: 'ICLIMATE Investigative Desk & Mitra Konservasi TNUK',
    fileSize: '4.8 MB',
    checksum: 'SHA-256: 8f4a...92bc',
    downloadCount: 3420,
    pdfUrl: '#',
    releaseDate: '18 November 2026',
    description:
      'Analisis demografi 78 individu badak jawa terpantau, ancaman invasi vegetasi langkap, dan simulasi dampak tsunami Selat Sunda terhadap habitat Ujung Kulon.',
  },
  {
    id: 'fact-2',
    title: 'Atlas Penurunan Muka Tanah Pesisir Pantura & Kerentanan Iklim 2024-2026',
    edition: 'Edisi Oktober 2026 / Monograf Geospasial',
    organization: 'Pusat Riset Geospasial Nusantara & ICLIMATE Data Hub',
    fileSize: '12.4 MB',
    checksum: 'SHA-256: d31e...44a1',
    downloadCount: 2890,
    pdfUrl: '#',
    releaseDate: '30 Oktober 2026',
    description:
      'Pemetaan spasial interferometri radar (InSAR) sepanjang 450 km pantai utara Jawa, merekam amblesan tanah di Pekalongan, Semarang, dan Demak.',
  },
  {
    id: 'fact-3',
    title: 'Buku Putih Restorasi Gambut: Mengukur Karbon yang Hilang Akibat Kanalisasi',
    edition: 'Edisi September 2026 / Buku Panduan Teknis',
    organization: 'Koalisi Peneliti Gambut Tropika Nusantara',
    fileSize: '7.1 MB',
    checksum: 'SHA-256: a66c...11ef',
    downloadCount: 1950,
    pdfUrl: '#',
    releaseDate: '15 September 2026',
    description:
      'Metodologi penutupan kanal dan pemulihan hidrologi gambut di Kalimantan Tengah, Riau, dan Jambi beserta estimasi emisi gas rumah kaca.',
  },
  {
    id: 'fact-4',
    title: 'Panduan Warga: Standar Verifikasi Bukti Pelaporan Kejahatan Lingkungan',
    edition: 'Edisi Khusus Aksi Sipil / Edisi Revisi II',
    organization: 'ICLIMATE Legal & Whistleblower Protection Cell',
    fileSize: '2.2 MB',
    checksum: 'SHA-256: 55da...78cb',
    downloadCount: 5120,
    pdfUrl: '#',
    releaseDate: '01 Agustus 2026',
    description:
      'Panduan langkah demi langkah bagi komunitas lokal dan jurnalis warga untuk merekam koordinat GPS, metadata EXIF gambar, dan enkripsi laporan anonim.',
  },
];
