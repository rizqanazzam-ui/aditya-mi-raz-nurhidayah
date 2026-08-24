# Template Website Buat Ulang Tahun Mantan

<p align="center">
  <img
    src="./assets/eza-profile.webp"
    width="280"
    alt="Ilustrasi profil yang digunakan pada website ulang tahun"
  />
</p>

<p align="center">
  Sebuah <strong>digital keepsake</strong> berupa website ulang tahun personal
  dengan pembuka interaktif, rangkaian doa, musik latar, dan sepucuk surat.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-18181B?style=for-the-badge&logo=html5&logoColor=EC4899" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-18181B?style=for-the-badge&logo=css&logoColor=EC4899" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-18181B?style=for-the-badge&logo=javascript&logoColor=EC4899" alt="JavaScript" />
  <img src="https://img.shields.io/badge/No_Build-EC4899?style=for-the-badge&logoColor=white" alt="Tanpa build process" />
</p>

<p align="center">
  <a href="https://website-ulang-tahun-buat-mantan.vercel.app">
    <img src="https://img.shields.io/badge/Lihat_Website-EC4899?style=for-the-badge&logo=vercel&logoColor=white" alt="Buka website yang sudah di-deploy" />
  </a>
</p>

---

## Deskripsi

**Template Website Buat Ulang Tahun Mantan** adalah microsite bergaya
editorial-romantis yang dapat dipersonalisasi menjadi hadiah ulang tahun
digital. Penerima diajak membuka pesan, melihat rangkaian harapan baik, lalu
membaca surat panjang dalam tampilan seperti kertas fisik.

Proyek ini dibuat hanya dengan HTML, CSS, dan JavaScript vanilla. Tidak ada
framework, database, akun pengguna, proses build, atau dependency aplikasi.
Karena itu, template dapat dijalankan dan dipersonalisasi dengan mudah, bahkan
oleh pengguna yang baru belajar web development.

> [!IMPORTANT]
> Repository ini memuat nama dan isi surat yang bersifat personal. Ganti semua
> data pribadi sebelum menggunakan template untuk orang lain atau membagikannya
> secara publik.

## Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Teknologi](#teknologi)
- [Struktur Proyek](#struktur-proyek)
- [Cara Menjalankan](#cara-menjalankan)
- [Cara Personalisasi](#cara-personalisasi)
- [Cara Deploy](#cara-deploy)
- [Aksesibilitas dan Responsivitas](#aksesibilitas-dan-responsivitas)
- [Troubleshooting](#troubleshooting)
- [Checklist Sebelum Dibagikan](#checklist-sebelum-dibagikan)
- [Kontribusi](#kontribusi)
- [Lisensi dan Penggunaan](#lisensi-dan-penggunaan)
- [Tag](#tag)

## Fitur Utama

- **Pembuka interaktif**
  Pengunjung dapat memilih untuk langsung membuka website atau mengambil waktu
  sebentar sebelum melanjutkan.

- **Hero ulang tahun sinematik**
  Foto utama, nama penerima, tanggal ulang tahun, dan ucapan ditampilkan dengan
  komposisi editorial.

- **Rangkaian doa dan harapan**
  Tiga kartu berisi harapan tentang kebahagiaan, pertumbuhan, dan orang-orang
  baik.

- **Sepucuk surat personal**
  Surat panjang ditampilkan dalam layout kertas dengan tipografi yang nyaman
  dibaca.

- **Musik latar**
  Musik mulai diputar setelah interaksi pengguna dan dapat dijeda atau
  dilanjutkan melalui tombol yang tersedia.

- **Progress membaca**
  Garis berwarna di bagian atas layar menunjukkan posisi pembaca di dalam
  halaman.

- **Animasi yang tetap aksesibel**
  Animasi masuk, paper burst, dan micro-interaction otomatis dikurangi apabila
  perangkat menggunakan pengaturan `prefers-reduced-motion`.

- **Responsive design**
  Layout telah disiapkan untuk ponsel, tablet, laptop, dan desktop.

- **Tanpa proses build**
  Cukup buka `index.html` atau jalankan static server.

## Teknologi

| Teknologi | Kegunaan |
| --- | --- |
| HTML5 | Struktur konten dan semantic markup |
| CSS3 | Design system, layout, animasi, serta responsive styling |
| JavaScript | Pembuka interaktif, musik, scroll progress, dan reveal animation |
| Google Fonts | Playfair Display, Source Serif 4, dan JetBrains Mono |
| WebP | Format foto yang ringan dan tetap tajam |

Tidak ada package aplikasi yang harus di-install dan tidak ada data yang
dikirim ke backend.

## Struktur Proyek

```text
Website-Ulang-Tahun-Buat-Mantan/
├── assets/
│   ├── eza-profile.webp       # Foto/ilustrasi profil utama
│   └── favicon.svg            # Ikon tab browser
├── design-system/
│   └── eza-birthday-keepsake/
│       └── MASTER.md          # Referensi warna, tipografi, dan aturan desain
├── index.html                 # Seluruh struktur dan isi website
├── styles.css                 # Tampilan, layout, breakpoint, dan animasi
├── script.js                  # Interaksi dan kontrol musik
└── README.md                  # Dokumentasi proyek
```

Folder `design-system` tidak diperlukan oleh browser ketika website berjalan.
Folder tersebut disimpan sebagai dokumentasi agar gaya visual tetap konsisten
saat website dikembangkan lebih lanjut.

## Cara Menjalankan

### 1. Clone repository

```bash
git clone https://github.com/MizukiClover/Website-Ulang-Tahun-Buat-Mantan.git
cd Website-Ulang-Tahun-Buat-Mantan
```

### 2. Pilih salah satu cara berikut

#### Cara paling sederhana

Buka berkas `index.html` langsung melalui browser.

#### Menggunakan Node.js

```bash
npx serve .
```

Setelah server aktif, buka alamat yang ditampilkan di terminal. Biasanya:

```text
http://localhost:3000
```

#### Menggunakan Python

```bash
python -m http.server 8000
```

Kemudian buka:

```text
http://localhost:8000
```

Menggunakan static server lebih direkomendasikan karena perilakunya lebih mirip
dengan website yang sudah di-deploy.

## Cara Personalisasi

Semua perubahan utama dapat dilakukan tanpa mengubah arsitektur website.

### 1. Mengganti nama dan tanggal

Buka [`index.html`](./index.html), lalu cari teks berikut:

```text
Faeza
Eza
Ezaaa
8 Juli
08 · 07
```

Ganti seluruh kemunculannya dengan nama panggilan dan tanggal penerima yang
baru. Gunakan fitur **Find and Replace** pada editor agar tidak ada bagian yang
terlewat.

Bagian metadata yang sebaiknya ikut diganti berada di dalam elemen `<head>`:

```html
<meta name="description" content="..." />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<title>...</title>
```

Metadata tersebut menentukan judul tab browser dan preview saat tautan
dibagikan ke aplikasi sosial.

### 2. Mengganti foto profil

Cara termudah:

1. Siapkan foto berbentuk persegi.
2. Konversikan ke format WebP jika memungkinkan.
3. Beri nama `eza-profile.webp`.
4. Timpa berkas lama di folder `assets`.

Jika ingin menggunakan nama berkas lain, ganti seluruh path berikut di
`index.html`:

```html
./assets/eza-profile.webp
```

Ukuran yang disarankan:

- Rasio: `1:1`
- Resolusi: `720 × 720` piksel atau lebih
- Format: WebP
- Ukuran berkas: di bawah 300 KB

Jangan lupa memperbarui teks `alt` agar sesuai dengan foto baru.

### 3. Mengganti isi ucapan dan surat

Isi surat berada di dalam:

```html
<article class="letter">
  ...
</article>
```

Setiap paragraf menggunakan elemen `<p>`. Untuk membuat kalimat penekanan,
gunakan class berikut:

```html
<p class="letter__highlight">Kalimat penting di sini.</p>
```

Untuk membuat kutipan besar:

```html
<aside class="letter__pullquote">
  Tuliskan pesan atau doa utama di sini.
</aside>
```

Pertahankan paragraf tetap pendek agar nyaman dibaca di layar ponsel.

### 4. Mengganti musik

Sumber musik berada di bagian bawah `index.html`:

```html
<audio id="bgMusic" loop preload="none">
  <source src="ALAMAT-MUSIK.mp3" type="audio/mpeg" />
</audio>
```

Ada dua pilihan:

#### Menggunakan URL eksternal

Ganti `ALAMAT-MUSIK.mp3` dengan direct link menuju berkas MP3.

#### Menyimpan musik di repository

1. Simpan berkas sebagai `assets/music.mp3`.
2. Ubah sumber audio menjadi:

```html
<source src="./assets/music.mp3" type="audio/mpeg" />
```

> [!NOTE]
> Browser modern melarang autoplay audio tanpa interaksi pengguna. Website ini
> memang memulai musik setelah tombol pembuka ditekan agar sesuai dengan aturan
> browser.

Pastikan musik yang digunakan dimiliki sendiri, bebas royalti, atau telah
mendapatkan izin penggunaan.

### 5. Mengganti warna

Token warna utama berada di bagian atas [`styles.css`](./styles.css):

```css
:root {
  --color-primary: #18181b;
  --color-on-primary: #ffffff;
  --color-accent: #ec4899;
  --color-background: #fafafa;
  --color-foreground: #09090b;
  --color-blush: #fce7f1;
}
```

Ubah nilai token tersebut agar seluruh komponen mengikuti palet baru secara
konsisten. Pastikan kontras teks tetap mudah dibaca.

### 6. Mengganti font

Font dimuat melalui Google Fonts di `index.html`, kemudian dipetakan menjadi
token di `styles.css`:

```css
--font-display: "Playfair Display", Georgia, serif;
--font-body: "Source Serif 4", Georgia, serif;
--font-mono: "JetBrains Mono", Consolas, monospace;
```

Setelah mengganti link Google Fonts, sesuaikan ketiga token tersebut.

### 7. Mengubah perilaku interaksi

Seluruh logika berada di [`script.js`](./script.js), meliputi:

- membuka pengalaman utama;
- pesan ketika penerima belum siap;
- play/pause musik;
- paper burst;
- scroll progress;
- reveal saat elemen masuk viewport.

Ubah file ini hanya jika ingin mengganti perilaku, bukan sekadar isi atau warna.

## Cara Deploy

Website ini adalah static site sehingga dapat di-host di hampir semua layanan.

### GitHub Pages

1. Push project ke repository GitHub.
2. Buka pengaturan **Pages** repository.
3. Pilih branch `main` dan folder root sebagai sumber publikasi.
4. Simpan dan tunggu hingga URL website tersedia.

### Netlify

Import repository dari GitHub atau drag-and-drop folder project. Karena tidak
ada proses build, gunakan root project sebagai publish directory.

### Vercel

Import repository sebagai project baru. Pilih konfigurasi static site tanpa
build command dan gunakan root project sebagai output.

### Hosting biasa

Upload `index.html`, `styles.css`, `script.js`, dan folder `assets` ke folder
publik hosting. Pertahankan struktur direktorinya agar path aset tidak rusak.

## Aksesibilitas dan Responsivitas

Proyek telah menerapkan:

- semantic heading dari `h1` hingga `h3`;
- skip link menuju konten utama;
- label aksesibel pada tombol musik;
- teks alternatif pada gambar bermakna;
- focus ring untuk navigasi keyboard;
- touch target minimal 44 × 44 piksel;
- kontras teks yang jelas pada permukaan terang dan gelap;
- `prefers-reduced-motion`;
- lazy loading untuk gambar di bawah fold;
- dimensi gambar untuk mengurangi layout shift;
- safe-area pada header perangkat mobile;
- breakpoint untuk ponsel, tablet, laptop, dan desktop.

Breakpoint utama yang digunakan:

```text
Mobile        : di bawah 700 px
Tablet/laptop : mulai 700 px
Desktop lebar : mulai 1000 px
```

## Troubleshooting

### Musik tidak berbunyi

- Pastikan tombol pembuka sudah ditekan.
- Periksa volume perangkat dan tab browser.
- Pastikan URL MP3 masih aktif dan dapat diakses langsung.
- Jika menggunakan berkas lokal, periksa nama serta path file.
- Coba jalankan website melalui static server.

### Foto tidak tampil

- Pastikan berkas berada di folder `assets`.
- Periksa penggunaan huruf besar dan kecil pada nama file.
- Pastikan path pada `src` sesuai dengan nama berkas.
- Gunakan format yang didukung browser seperti WebP, JPEG, atau PNG.

### Font tidak tampil

- Pastikan perangkat memiliki koneksi internet karena font berasal dari Google
  Fonts.
- Periksa apakah link font di dalam `<head>` masih valid.
- Website tetap menggunakan font fallback apabila Google Fonts gagal dimuat.

### Animasi tidak berjalan

Periksa apakah perangkat mengaktifkan pengaturan **Reduce Motion**. Jika aktif,
website sengaja mengurangi atau menonaktifkan animasi demi kenyamanan pengguna.

### Tampilan berubah setelah isi surat diganti

- Hindari menaruh seluruh surat dalam satu paragraf.
- Jangan menghapus penutup elemen seperti `</p>` atau `</article>`.
- Gunakan editor dengan HTML validation.
- Uji kembali pada layar ponsel setelah menambahkan teks.

### Preview tautan tidak berubah

Platform sosial dapat menyimpan cache metadata. Pastikan `og:title`,
`og:description`, dan `og:image` sudah diganti, lalu tunggu cache diperbarui.

## Checklist Sebelum Dibagikan

- [ ] Nama penerima sudah diganti di seluruh halaman.
- [ ] Tanggal ulang tahun sudah benar.
- [ ] Foto profil sudah diganti dan terkompresi.
- [ ] Isi surat sudah diperiksa ulang.
- [ ] Tidak ada data pribadi yang seharusnya dirahasiakan.
- [ ] Musik dapat diputar dan memiliki izin penggunaan.
- [ ] Metadata judul, deskripsi, dan Open Graph sudah disesuaikan.
- [ ] Favicon sudah disesuaikan jika diperlukan.
- [ ] Website diuji pada ponsel dan desktop.
- [ ] Semua tombol dapat digunakan dengan keyboard.
- [ ] Tidak ada horizontal scroll pada layar kecil.
- [ ] Seluruh aset berhasil dimuat setelah deployment.

## Kontribusi

Kontribusi, perbaikan bug, dan peningkatan aksesibilitas dipersilakan.

1. Fork repository ini.
2. Buat branch baru:

   ```bash
   git checkout -b feature/nama-perubahan
   ```

3. Commit perubahan:

   ```bash
   git commit -m "Menambahkan fitur baru"
   ```

4. Push branch:

   ```bash
   git push origin feature/nama-perubahan
   ```

5. Buat Pull Request dan jelaskan perubahan yang dilakukan.

Jangan menyertakan data pribadi milik orang lain di dalam Pull Request.

## Lisensi dan Penggunaan

Template dapat dipelajari, dipersonalisasi, dan digunakan untuk hadiah atau
proyek personal. Repository ini belum menyertakan berkas lisensi open-source
formal.

Konten surat, nama, foto, musik, dan aset personal tetap menjadi tanggung jawab
masing-masing pengguna. Pastikan telah mendapatkan izin sebelum menggunakan
atau mempublikasikan konten milik orang lain.

Jika proyek akan didistribusikan sebagai template open-source, pemilik
repository disarankan menambahkan lisensi formal seperti MIT pada pembaruan
berikutnya.

## Tag

`birthday-website` · `birthday-card` · `digital-keepsake` ·
`romantic-website` · `interactive-letter` · `microsite` · `html` · `css` ·
`javascript` · `vanilla-javascript` · `responsive-design` · `web-animation` ·
`indonesian` · `personal-gift`

---

<p align="center">
  Dibuat sebagai hadiah kecil yang disiapkan dengan tulus.
</p>
