/* 
Patient
Practitioner
Organization
Location
Appointment
Schedule
Slot
Encounter
EpisodeOfCare
AllergyIntolerance
Condition
Procedure
ClinicalImpression
Observation
DiagnosticReport
MedicationRequest
MedicationDispense
Medication
ServiceRequest
Claim
Invoice
PaymentNotice
PaymentReconciliation
*/

const db = {
    pasien: [
        { id: 1, identifier: "P001", nama_depan: "John", nama_belakang: "Doe", jenis_kelamin: "Laki-laki", tanggal_lahir: "1990-05-15", telepon: "123456789", email: "john.doe@example.com", alamat: "123 Main St" },
        { id: 2, identifier: "P002", nama_depan: "Jane", nama_belakang: "Smith", jenis_kelamin: "Perempuan", tanggal_lahir: "1985-08-25", telepon: "987654321", email: "jane.smith@example.com", alamat: "456 Elm St" },
    ],
    praktisi: [
        { id: 1, identifier: "D001", nama_depan: "Dr.", nama_belakang: "Smith", jenis_kelamin: "Laki-laki", tanggal_lahir: "1975-03-10", telepon: "5551234567", email: "dr.smith@example.com", spesialisasi: "Pediatrics" },
        { id: 2, identifier: "D002", nama_depan: "Dr.", nama_belakang: "Johnson", jenis_kelamin: "Perempuan", tanggal_lahir: "1980-07-20", telepon: "5559876543", email: "dr.johnson@example.com", spesialisasi: "Internal Medicine" },
    ],
    organisasi: [
        { id: 1, nama: "Rumah Sakit Umum", jenis: "Rumah Sakit", telepon: "5551112233", email: "info@hospital.com", alamat: "789 Oak St" },
        { id: 2, nama: "Klinik", jenis: "Klinik", telepon: "5554445566", email: "info@clinic.com", alamat: "123 Maple St" },
    ],
    lokasi: [
        { id: 1, nama: "Gedung Utama RS", deskripsi: "Gedung Utama", jenis: "Rumah Sakit", telepon: "5551112233", email: "info@hospital.com", alamat: "789 Oak St", organisasi_id: 1 },
        { id: 2, nama: "Klinik Gawat Darurat", deskripsi: "Gawat Darurat", jenis: "Klinik", telepon: "5554445566", email: "info@clinic.com", alamat: "123 Maple St", organisasi_id: 2 },
    ],
    janji_temu: [
        { id: 1, pasien_id: 1, praktisi_id: 1, lokasi_id: 1, waktu_mulai: "2023-01-01 08:00:00", waktu_selesai: "2023-01-01 15:00:00", status: "selesai", deskripsi: "Kunjungan Ruang Darurat" },
        { id: 2, pasien_id: 2, praktisi_id: 2, lokasi_id: 2, waktu_mulai: "2023-02-01 10:00:00", waktu_selesai: "2023-02-01 11:00:00", status: "selesai", deskripsi: "Pemeriksaan Rutin" },
    ],
    kunjungan: [
        { id: 1, pasien_id: 1, kelas_kunjungan: "rawat inap", jenis_kunjungan: "Darurat", waktu_mulai: "2023-01-01 08:00:00", waktu_selesai: "2023-01-01 15:00:00", status: "selesai", deskripsi: "Kunjungan Ruang Darurat", lokasi_id: 1 },
        { id: 2, pasien_id: 2, kelas_kunjungan: "rawat jalan", jenis_kunjungan: "Terjadwal", waktu_mulai: "2023-02-01 10:00:00", waktu_selesai: "2023-02-01 11:00:00", status: "selesai", deskripsi: "Pemeriksaan Rutin", lokasi_id: 2 },
    ],
    alergi: [
        { id: 1, pasien_id: 1, zat: "Pollen", status: "aktif", tingkat_keparahan: "Rendah" },
        { id: 2, pasien_id: 2, zat: "Penicillin", status: "aktif", tingkat_keparahan: "Tinggi" },
    ],
    kondisi: [
        { id: 1, pasien_id: 1, kode: "I10", status: "aktif", tanggal_mulai: "2022-12-01", tanggal_berakhir: null, kunjungan_id: 1 },
        { id: 2, pasien_id: 2, kode: "E11", status: "aktif", tanggal_mulai: "2022-11-01", tanggal_berakhir: null, kunjungan_id: 2 },
    ],
    prosedur: [
        { id: 1, pasien_id: 1, praktisi_id: 1, kode: "3051F", tanggal_dilakukan: "2023-01-01", status: "selesai", deskripsi: "Pemeriksaan fisik rutin", kunjungan_id: 1 },
        { id: 2, pasien_id: 2, praktisi_id: 2, kode: "99213", tanggal_dilakukan: "2023-02-01", status: "selesai", deskripsi: "Manajemen Diabetes", kunjungan_id: 2 },
    ],
    kesimpulan_klinis: [
        { id: 1, pasien_id: 1, praktisi_id: 1, status: "selesai", tanggal: "2023-01-01 16:00:00", deskripsi: "Pasien dinyatakan sehat", kunjungan_id: 1 },
        { id: 2, pasien_id: 2, praktisi_id: 2, status: "selesai", tanggal: "2023-02-01 12:00:00", deskripsi: "Pasien membutuhkan pengaturan dosis insulin", kunjungan_id: 2 },
    ],
    observasi: [
        { id: 1, pasien_id: 1, praktisi_id: 1, kode: "3141-9", nilai: "120", waktu_efektif: "2023-01-01 09:00:00", interpretasi: "Normal", kunjungan_id: 1 },
        { id: 2, pasien_id: 2, praktisi_id: 2, kode: "8302-2", nilai: "7.2", waktu_efektif: "2023-02-01 10:30:00", interpretasi: "Normal", kunjungan_id: 2 },
    ],
    laporan_diagnostik: [
        { id: 1, pasien_id: 1, praktisi_id: 1, kode: "4548-4", hasil: "Normal", tanggal_dikeluarkan: "2023-01-01 16:30:00", status: "selesai", kunjungan_id: 1 },
        { id: 2, pasien_id: 2, praktisi_id: 2, kode: "789-8", hasil: "Tinggi", tanggal_dikeluarkan: "2023-02-01 12:30:00", status: "selesai", kunjungan_id: 2 },
    ],
    permintaan_obat: [
        { id: 1, pasien_id: 1, praktisi_id: 1, obat_id: 1, jumlah: 30, status: "aktif", tanggal: "2023-01-01", kunjungan_id: 1 },
        { id: 2, pasien_id: 2, praktisi_id: 2, obat_id: 2, jumlah: 60, status: "aktif", tanggal: "2023-02-01", kunjungan_id: 2 },
    ],
    penyaluran_obat: [
        { id: 1, permintaan_obat_id: 1, tanggal_penyaluran: "2023-01-01 10:00:00", jumlah_diproses: 30, status: "selesai", kunjungan_id: 1 },
        { id: 2, permintaan_obat_id: 2, tanggal_penyaluran: "2023-02-01 13:00:00", jumlah_diproses: 60, status: "selesai", kunjungan_id: 2 },
    ],
    obat: [
        { id: 1, nama: "Aspirin", produsen: "Bayer", kode: "1048301", harga: 5.99 },
        { id: 2, nama: "Insulin", produsen: "Novo Nordisk", kode: "100012", harga: 25.5 },
    ],
    permintaan_layanan: [
        { id: 1, pasien_id: 1, praktisi_id: 1, kode: "L3121", tanggal: "2023-01-01 11:00:00", status: "aktif", deskripsi: "Pemeriksaan darah", kunjungan_id: 1 },
        { id: 2, pasien_id: 2, praktisi_id: 2, kode: "L1001", tanggal: "2023-02-01 14:00:00", status: "aktif", deskripsi: "Pengujian gula darah", kunjungan_id: 2 },
    ],
    klaim: [
        { id: 1, kunjungan_id: 1, pasien_id: 1, jumlah_total: 1500.0, terbayar: 1 },
        { id: 2, kunjungan_id: 2, pasien_id: 2, jumlah_total: 800.0, terbayar: 0 },
    ],
    tagihan: [
        { id: 1, kunjungan_id: 1, pasien_id: 1, jumlah_total: 2000.0, terbayar: 1 },
        { id: 2, kunjungan_id: 2, pasien_id: 2, jumlah_total: 1000.0, terbayar: 0 },
    ],
};

console.log(db);
