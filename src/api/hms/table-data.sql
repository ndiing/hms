-- Tabel Pasien
CREATE TABLE pasien (
    id INT PRIMARY KEY,
    nama VARCHAR(255),
    jenis_kelamin VARCHAR(10),
    tanggal_lahir DATE,
    alamat VARCHAR(255)
);

-- Contoh data untuk Tabel Pasien
INSERT INTO pasien (id, nama, jenis_kelamin, tanggal_lahir, alamat)
VALUES (1, 'Ani', 'Perempuan', '1990-05-15', 'Jl. Merdeka No. 10'),
       (2, 'Budi', 'Laki-laki', '1985-10-20', 'Jl. Pahlawan No. 25');

-- Tabel Praktisi
CREATE TABLE praktisi (
    id INT PRIMARY KEY,
    nama VARCHAR(255),
    spesialisasi VARCHAR(255)
);

-- Contoh data untuk Tabel Praktisi
INSERT INTO praktisi (id, nama, spesialisasi)
VALUES (1, 'Dr. Indra', 'Dokter Umum'),
       (2, 'Dr. Siti', 'Dokter Gigi');

-- Tabel Peran_Praktisi
CREATE TABLE peran_praktisi (
    id INT PRIMARY KEY,
    id_praktisi INT,
    peran VARCHAR(255),
    CONSTRAINT FK_Peran_Praktisi_Praktisi FOREIGN KEY (id_praktisi) REFERENCES praktisi(id)
);

-- Contoh data untuk Tabel Peran_Praktisi
INSERT INTO peran_praktisi (id, id_praktisi, peran)
VALUES (1, 1, 'Dokter Umum'),
       (2, 2, 'Dokter Gigi');

-- Tabel Hubungan_Keluarga
CREATE TABLE hubungan_keluarga (
    id INT PRIMARY KEY,
    id_pasien INT,
    nama VARCHAR(255),
    hubungan VARCHAR(255),
    CONSTRAINT FK_Hubungan_Keluarga_Pasien FOREIGN KEY (id_pasien) REFERENCES pasien(id)
);

-- Contoh data untuk Tabel Hubungan_Keluarga
INSERT INTO hubungan_keluarga (id, id_pasien, nama, hubungan)
VALUES (1, 1, 'Bapak', 'Ayah'),
       (2, 1, 'Ibu', 'Ibu'),
       (3, 2, 'Saudara', 'Saudara Kandung');

-- Tabel Organisasi
CREATE TABLE organisasi (
    id INT PRIMARY KEY,
    nama VARCHAR(255),
    tipe VARCHAR(100)
);

-- Contoh data untuk Tabel Organisasi
INSERT INTO organisasi (id, nama, tipe)
VALUES (1, 'Rumah Sakit ABC', 'Rumah Sakit'),
       (2, 'Klinik XYZ', 'Klinik');

-- Tabel Layanan_Kesehatan
CREATE TABLE layanan_kesehatan (
    id INT PRIMARY KEY,
    nama VARCHAR(255),
    deskripsi TEXT
);

-- Contoh data untuk Tabel Layanan_Kesehatan
INSERT INTO layanan_kesehatan (id, nama, deskripsi)
VALUES (1, 'Poli Umum', 'Pemeriksaan umum oleh dokter umum'),
       (2, 'Poli Gigi', 'Pemeriksaan gigi oleh dokter gigi');

-- Tabel Lokasi
CREATE TABLE lokasi (
    id INT PRIMARY KEY,
    id_organisasi INT,
    nama VARCHAR(255),
    alamat VARCHAR(255),
    kota VARCHAR(100),
    provinsi VARCHAR(100),
    negara VARCHAR(100),
    kode_pos VARCHAR(20),
    CONSTRAINT FK_Lokasi_Organisasi FOREIGN KEY (id_organisasi) REFERENCES organisasi(id)
);

-- Contoh data untuk Tabel Lokasi
INSERT INTO lokasi (id, id_organisasi, nama, alamat, kota, provinsi, negara, kode_pos)
VALUES (1, 1, 'Poli Umum RS ABC', 'Jl. Medan Merdeka No. 1', 'Jakarta', 'DKI Jakarta', 'Indonesia', '10110'),
       (2, 1, 'Poli Gigi RS ABC', 'Jl. Medan Merdeka No. 1', 'Jakarta', 'DKI Jakarta', 'Indonesia', '10110');

-- Tabel Janji_Temu
CREATE TABLE janji_temu (
    id INT PRIMARY KEY,
    id_pasien INT,
    id_praktisi INT,
    tanggal_mulai_waktu DATETIME,
    tanggal_selesai_waktu DATETIME,
    status VARCHAR(20),
    CONSTRAINT FK_Janji_Temu_Pasien FOREIGN KEY (id_pasien) REFERENCES pasien(id),
    CONSTRAINT FK_Janji_Temu_Praktisi FOREIGN KEY (id_praktisi) REFERENCES praktisi(id)
);

-- Contoh data untuk Tabel Janji_Temu
INSERT INTO janji_temu (id, id_pasien, id_praktisi, tanggal_mulai_waktu, tanggal_selesai_waktu, status)
VALUES (1, 1, 1, '2024-04-10 09:00:00', '2024-04-10 10:00:00', 'Scheduled'),
       (2, 2, 2, '2024-04-11 10:00:00', '2024-04-11 11:00:00', 'Scheduled');

-- Tabel Respon_Janji_Temu
CREATE TABLE respon_janji_temu (
    id INT PRIMARY KEY,
    id_janji_temu INT,
    id_partisipan INT,
    status_respon VARCHAR(20),
    CONSTRAINT FK_Respon_Janji_Temu_Janji_Temu FOREIGN KEY (id_janji_temu) REFERENCES janji_temu(id),
    CONSTRAINT FK_Respon_Janji_Temu_Partisipan FOREIGN KEY (id_partisipan) REFERENCES pasien(id)
);

-- Contoh data untuk Tabel Respon_Janji_Temu
INSERT INTO respon_janji_temu (id, id_janji_temu, id_partisipan, status_respon)
VALUES (1, 1, 1, 'Accepted'),
       (2, 2, 2, 'Accepted');

-- Tabel Slot
CREATE TABLE slot (
    id INT PRIMARY KEY,
    id_layanan_kesehatan INT,
    tanggal_mulai_waktu DATETIME,
    tanggal_selesai_waktu DATETIME,
    status VARCHAR(20),
    CONSTRAINT FK_Slot_Layanan_Kesehatan FOREIGN KEY (id_layanan_kesehatan) REFERENCES layanan_kesehatan(id)
);

-- Contoh data untuk Tabel Slot
INSERT INTO slot (id, id_layanan_kesehatan, tanggal_mulai_waktu, tanggal_selesai_waktu, status)
VALUES (1, 1, '2024-04-10 09:00:00', '2024-04-10 10:00:00', 'Available'),
       (2, 2, '2024-04-11 10:00:00', '2024-04-11 11:00:00', 'Available');

-- Tabel Pertemuan
CREATE TABLE pertemuan (
    id INT PRIMARY KEY,
    id_pasien INT,
    id_praktisi INT,
    id_lokasi INT,
    tanggal_mulai_waktu DATETIME,
    tanggal_selesai_waktu DATETIME,
    status VARCHAR(20),
    CONSTRAINT FK_Pertemuan_Pasien FOREIGN KEY (id_pasien) REFERENCES pasien(id),
    CONSTRAINT FK_Pertemuan_Praktisi FOREIGN KEY (id_praktisi) REFERENCES praktisi(id),
    CONSTRAINT FK_Pertemuan_Lokasi FOREIGN KEY (id_lokasi) REFERENCES lokasi(id)
);

-- Contoh data untuk Tabel Pertemuan
INSERT INTO pertemuan (id, id_pasien, id_praktisi, id_lokasi, tanggal_mulai_waktu, tanggal_selesai_waktu, status)
VALUES (1, 1, 1, 1, '2024-04-10 09:00:00', '2024-04-10 10:00:00', 'Confirmed'),
       (2, 2, 2, 2, '2024-04-11 10:00:00', '2024-04-11 11:00:00', 'Confirmed');

-- Tabel Episode_Perawatan
CREATE TABLE episode_perawatan (
    id INT PRIMARY KEY,
    id_pasien INT,
    tanggal_mulai DATE,
    tanggal_selesai DATE,
    CONSTRAINT FK_Episode_Perawatan_Pasien FOREIGN KEY (id_pasien) REFERENCES pasien(id)
);

-- Contoh data untuk Tabel Episode_Perawatan
INSERT INTO episode_perawatan (id, id_pasien, tanggal_mulai, tanggal_selesai)
VALUES (1, 1, '2024-04-01', '2024-04-30'),
       (2, 2, '2024-04-05', '2024-04-25');

-- Tabel Alergi_Intoleransi
CREATE TABLE alergi_intoleransi (
    id INT PRIMARY KEY,
    id_pasien INT,
    zat VARCHAR(255),
    reaksi VARCHAR(255),
    CONSTRAINT FK_Alergi_Intoleransi_Pasien FOREIGN KEY (id_pasien) REFERENCES pasien(id)
);

-- Contoh data untuk Tabel Alergi_Intoleransi
INSERT INTO alergi_intoleransi (id, id_pasien, zat, reaksi)
VALUES (1, 1, 'Aspirin', 'Ruam kulit'),
       (2, 2, 'Amoksisilin', 'Mual dan muntah');

-- Tabel Kondisi
CREATE TABLE kondisi (
    id INT PRIMARY KEY,
    id_pertemuan INT,
    deskripsi VARCHAR(255),
    CONSTRAINT FK_Kondisi_Pertemuan FOREIGN KEY (id_pertemuan) REFERENCES pertemuan(id)
);

-- Contoh data untuk Tabel Kondisi
INSERT INTO kondisi (id, id_pertemuan, deskripsi)
VALUES (1, 1, 'Flu'),
       (2, 2, 'Sakit gigi');

-- Tabel Prosedur
CREATE TABLE prosedur (
    id INT PRIMARY KEY,
    id_pertemuan INT,
    deskripsi VARCHAR(255),
    CONSTRAINT FK_Prosedur_Pertemuan FOREIGN KEY (id_pertemuan) REFERENCES pertemuan(id)
);

-- Contoh data untuk Tabel Prosedur
INSERT INTO prosedur (id, id_pertemuan, deskripsi)
VALUES (1, 1, 'Pemeriksaan fisik umum'),
       (2, 2, 'Penambalan gigi');

-- Tabel Riwayat_Kesehatan_Keluarga
CREATE TABLE riwayat_kesehatan_keluarga (
    id INT PRIMARY KEY,
    id_pasien INT,
    nama_anggota_keluarga VARCHAR(255),
    hubungan VARCHAR(255),
    kondisi_kesehatan VARCHAR(255),
    CONSTRAINT FK_Riwayat_Kesehatan_Keluarga_Pasien FOREIGN KEY (id_pasien) REFERENCES pasien(id)
);

-- Contoh data untuk Tabel Riwayat_Kesehatan_Keluarga
INSERT INTO riwayat_kesehatan_keluarga (id, id_pasien, nama_anggota_keluarga, hubungan, kondisi_kesehatan)
VALUES (1, 1, 'Bapak', 'Ayah', 'Hipertensi'),
       (2, 1, 'Ibu', 'Ibu', 'Diabetes'),
       (3, 2, 'Saudara', 'Saudara Kandung', 'Asma');

-- Tabel Kesan_Klinis
CREATE TABLE kesan_klinis (
    id INT PRIMARY KEY,
    id_pertemuan INT,
    deskripsi TEXT,
    CONSTRAINT FK_Kesan_Klinis_Pertemuan FOREIGN KEY (id_pertemuan) REFERENCES pertemuan(id)
);

-- Contoh data untuk Tabel Kesan_Klinis
INSERT INTO kesan_klinis (id, id_pertemuan, deskripsi)
VALUES (1, 1, 'Infeksi saluran pernapasan akut'),
       (2, 2, 'Karies gigi');

-- Tabel Observasi
CREATE TABLE observasi (
    id INT PRIMARY KEY,
    id_pertemuan INT,
    deskripsi TEXT,
    CONSTRAINT FK_Observasi_Pertemuan FOREIGN KEY (id_pertemuan) REFERENCES pertemuan(id)
);

-- Contoh data untuk Tabel Observasi
INSERT INTO observasi (id, id_pertemuan, deskripsi)
VALUES (1, 1, 'Tekanan darah: 120/80 mmHg'),
       (2, 2, 'Tingkat nyeri: 3/10');

-- Tabel Laporan_Diagnostik
CREATE TABLE laporan_diagnostik (
    id INT PRIMARY KEY,
    id_pertemuan INT,
    deskripsi TEXT,
    CONSTRAINT FK_Laporan_Diagnostik_Pertemuan FOREIGN KEY (id_pertemuan) REFERENCES pertemuan(id)
);

-- Contoh data untuk Tabel Laporan_Diagnostik
INSERT INTO laporan_diagnostik (id, id_pertemuan, deskripsi)
VALUES (1, 1, 'Rontgen dada normal'),
       (2, 2, 'Pemeriksaan darah rutin: Normal');

-- Tabel Spesimen
CREATE TABLE spesimen (
    id INT PRIMARY KEY,
    id_pertemuan INT,
    deskripsi TEXT,
    CONSTRAINT FK_Spesimen_Pertemuan FOREIGN KEY (id_pertemuan) REFERENCES pertemuan(id)
);

-- Contoh data untuk Tabel Spesimen
INSERT INTO spesimen (id, id_pertemuan, deskripsi)
VALUES (1, 1, 'Darah lengkap'),
       (2, 2, 'Sputum');

-- Tabel Pencitraan
CREATE TABLE pencitraan (
    id INT PRIMARY KEY,
    id_pertemuan INT,
    deskripsi TEXT,
    CONSTRAINT FK_Pencitraan_Pertemuan FOREIGN KEY (id_pertemuan) REFERENCES pertemuan(id)
);

-- Contoh data untuk Tabel Pencitraan
INSERT INTO pencitraan (id, id_pertemuan, deskripsi)
VALUES (1, 1, 'CT scan kepala normal'),
       (2, 2, 'Rontgen gigi menunjukkan karies');

-- Tabel Respon_Kuesioner
CREATE TABLE respon_kuesioner (
    id INT PRIMARY KEY,
    id_pasien INT,
    id_kuesioner INT,
    data_respon TEXT,
    CONSTRAINT FK_Respon_Kuesioner_Pasien FOREIGN KEY (id_pasien) REFERENCES pasien(id)
);

-- Contoh data untuk Tabel Respon_Kuesioner
INSERT INTO respon_kuesioner (id, id_pasien, id_kuesioner, data_respon)
VALUES (1, 1, 1, 'Baik'),
       (2, 2, 1, 'Cukup baik');

-- Tabel Permintaan_Obat
CREATE TABLE permintaan_obat (
    id INT PRIMARY KEY,
    id_pasien INT,
    jenis_obat VARCHAR(255),
    tanggal_permintaan DATETIME,
    CONSTRAINT FK_Permintaan_Obat_Pasien FOREIGN KEY (id_pasien) REFERENCES pasien(id)
);

-- Contoh data untuk Tabel Permintaan_Obat
INSERT INTO permintaan_obat (id, id_pasien, jenis_obat, tanggal_permintaan)
VALUES (1, 1, 'Parasetamol', '2024-04-10 08:00:00'),
       (2, 2, 'Amoksisilin', '2024-04-11 09:00:00');

-- Tabel Obat
CREATE TABLE obat (
    id INT PRIMARY KEY,
    nama VARCHAR(255),
    bentuk_dosis VARCHAR(100),
    kekuatan VARCHAR(100),
    satuan VARCHAR(50)
);

-- Contoh data untuk Tabel Obat
INSERT INTO obat (id, nama, bentuk_dosis, kekuatan, satuan)
VALUES (1, 'Parasetamol', 'Tablet', '500 mg', 'Tablet'),
       (2, 'Amoksisilin', 'Kapsul', '250 mg', 'Kapsul');

-- Tabel Administrasi_Obat
CREATE TABLE administrasi_obat (
    id INT PRIMARY KEY,
    id_pertemuan INT,
    id_obat INT,
    tanggal_administrasi DATETIME,
    CONSTRAINT FK_Administrasi_Obat_Pertemuan FOREIGN KEY (id_pertemuan) REFERENCES pertemuan(id),
    CONSTRAINT FK_Administrasi_Obat_Obat FOREIGN KEY (id_obat) REFERENCES obat(id)
);

-- Contoh data untuk Tabel Administrasi_Obat
INSERT INTO administrasi_obat (id, id_pertemuan, id_obat, tanggal_administrasi)
VALUES (1, 1, 1, '2024-04-10 09:30:00'),
       (2, 2, 2, '2024-04-11 10:30:00');

-- Tabel Imunisasi
CREATE TABLE imunisasi (
    id INT PRIMARY KEY,
    id_pasien INT,
    vaksin VARCHAR(255),
    tanggal_pemberian DATE,
    CONSTRAINT FK_Imunisasi_Pasien FOREIGN KEY (id_pasien) REFERENCES pasien(id)
);

-- Contoh data untuk Tabel Imunisasi
INSERT INTO imunisasi (id, id_pasien, vaksin, tanggal_pemberian)
VALUES (1, 1, 'Hepatitis B', '2024-04-10'),
       (2, 2, 'Influenza', '2024-04-11');

-- Tabel Rencana_Perawatan
CREATE TABLE rencana_perawatan (
    id INT PRIMARY KEY,
    id_pasien INT,
    deskripsi_rencana TEXT,
    status VARCHAR(20),
    CONSTRAINT FK_Rencana_Perawatan_Pasien FOREIGN KEY (id_pasien) REFERENCES pasien(id)
);

-- Contoh data untuk Tabel Rencana_Perawatan
INSERT INTO rencana_perawatan (id, id_pasien, deskripsi_rencana, status)
VALUES (1, 1, 'Istirahat dan minum obat', 'Aktif'),
       (2, 2, 'Pemeriksaan lanjutan', 'Aktif');

-- Tabel Permintaan_Layanan
CREATE TABLE permintaan_layanan (
    id INT PRIMARY KEY,
    id_pasien INT,
    jenis_layanan VARCHAR(255),
    tanggal_permintaan DATETIME,
    CONSTRAINT FK_Permintaan_Layanan_Pasien FOREIGN KEY (id_pasien) REFERENCES pasien(id)
);

-- Contoh data untuk Tabel Permintaan_Layanan
INSERT INTO permintaan_layanan (id, id_pasien, jenis_layanan, tanggal_permintaan)
VALUES (1, 1, 'Tes Darah', '2024-04-10 08:00:00'),
       (2, 2, 'Rontgen Gigi', '2024-04-11 09:00:00');
