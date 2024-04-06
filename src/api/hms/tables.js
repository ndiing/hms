const db = {};

db.praktisi = [
    //
    { kode: 1, nama: "andi" },
    { kode: 2, nama: "budi" },
    { kode: 3, nama: "santi" },
];
db.pasien = [
    //
    { kode: 1, nama: "risma" },
    { kode: 2, nama: "ridho" },
];
db.organisasi = [
    //
    { kode: 1, nama: "direktur", kode_organisasi: null },
    { kode: 2, nama: "poli", kode_organisasi: null },
];
db.lokasi = [
    //
    { kode: 1, nama: "poli kandungan", kode_organisasi: 1, kode_lokasi: null },
    { kode: 2, nama: "poli umum", kode_organisasi: 2, kode_lokasi: null },
];
db.kunjungan = [
    //
    { kode: 1, status: "", kode_pasien: 1, waktu_mulai: null, waktu_akhir: null, kode_lokasi: 1 },
    { kode: 2, status: "", kode_pasien: 2, waktu_mulai: null, waktu_akhir: null, kode_lokasi: 2 },
    { kode: 3, status: null, kode_pasien: null, waktu_mulai: null, waktu_akhir: null, kode_lokasi: null },
    { kode: 4, status: null, kode_pasien: null, waktu_mulai: null, waktu_akhir: null, kode_lokasi: null },
];
db.peserta_kunjungan = [
    //
    { kode_kunjungan: 1, kode_praktisi: 1 },
    { kode_kunjungan: 2, kode_praktisi: 3 },
];
db.kondisi = [
    //
    { kode: 1, waktu_catat: "2024-04-05T00:00:00+07:00", catatan: "kontraksi" },
];
db.diagnosa = [
    //
    { kode_kunjungan: 1, kode_kondisi: 1 },
    { kode_kunjungan: 1, kode_kondisi: 2 },
];
