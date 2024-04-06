/* 
Patient
Practitioner
Organization
Location
Encounter
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
*/

const db = {
    pasien: [
        { id: 1, nama: "Budi", jenis_kelamin: "Laki-laki", tanggal_lahir: "1980-05-15", alamat: "Jl. Raya No. 123", telepon: "08123456789", email: "budi@example.com" }, //
        { id: 2, nama: "Ani", jenis_kelamin: "Perempuan", tanggal_lahir: "1975-09-20", alamat: "Jl. Melati No. 45", telepon: "08234567890", email: "ani@example.com" }, //
    ],
    praktisi: [
        { id: 1, nama: "Dr. Joko", jenis_kelamin: "Laki-laki", spesialisasi: "Dokter Umum", alamat: "Jl. Mangga No. 10", telepon: "08567890123", email: "joko@example.com" }, //
        { id: 2, nama: "Dr. Siti", jenis_kelamin: "Perempuan", spesialisasi: "Dokter Spesialis Penyakit Dalam", alamat: "Jl. Anggrek No. 25", telepon: "08789012345", email: "siti@example.com" }, //
    ],
    organisasi: [
        { id: 1, nama: "RS Sehat Sentosa", jenis: "Rumah Sakit", alamat: "Jl. Pahlawan No. 100", telepon: "02112345678", email: "info@rssehat.com" }, //
    ],
    lokasi: [
        { id: 1, nama: "Poliklinik Umum", jenis: "Poliklinik", alamat: "Lantai 1", id_organisasi: 1 }, //
        { id: 2, nama: "Unit Gawat Darurat", jenis: "IGD", alamat: "Lantai 2", id_organisasi: 1 }, //
    ],
    kunjungan: [
        { id: 1, id_pasien: 1, id_praktisi: 1, id_lokasi: 1, tanggal_waktu_mulai: "2024-04-01 08:00:00", tanggal_waktu_selesai: "2024-04-01 09:00:00" }, //
        { id: 2, id_pasien: 2, id_praktisi: 2, id_lokasi: 2, tanggal_waktu_mulai: "2024-04-02 10:00:00", tanggal_waktu_selesai: "2024-04-02 11:00:00" }, //
    ],
    riwayat_alergi: [
        { id: 1, id_pasien: 1, alergi: "Alergi obat penicillin", status: "Aktif", tanggal_waktu: "2023-12-01 09:00:00" }, //
        { id: 2, id_pasien: 2, alergi: "Alergi debu", status: "Aktif", tanggal_waktu: "2022-06-15 10:30:00" }, //
    ],
    kondisi: [
        { id: 1, id_pasien: 1, nama: "Diabetes Mellitus", kode: "T78.1", status: "Aktif", tanggal_waktu: "2024-01-10 11:00:00", id_kunjungan: 1 }, //
        { id: 2, id_pasien: 2, nama: "Hipertensi", kode: "I10", status: "Aktif", tanggal_waktu: "2024-02-20 14:30:00", id_kunjungan: 2 }, //
    ],
    prosedur: [
        { id: 1, id_kunjungan: 1, nama: "Pemeriksaan fisik umum", kode: "01AA0ZZ", tanggal_waktu: "2024-04-01 08:30:00" }, //
        { id: 2, id_kunjungan: 2, nama: "EKG", kode: "5A2200Z", tanggal_waktu: "2024-04-02 10:15:00" }, //
    ],
    observasi: [
        { id: 1, id_kunjungan: 1, jenis: "Tekanan darah", nilai: "120/80 mmHg", tanggal_waktu: "2024-04-01 08:45:00" }, //
        { id: 2, id_kunjungan: 2, jenis: "Kadar gula darah", nilai: "150 mg/dL", tanggal_waktu: "2024-04-02 10:20:00" }, //
    ],
    laporan_diagnostik: [
        { id: 1, id_kunjungan: 1, hasil: "Rontgen dada: normal", kesimpulan: "Tidak ada kelainan pada rontgen dada", tanggal_waktu: "2024-04-01 09:15:00" }, //
        { id: 2, id_kunjungan: 2, hasil: "EKG: atrial fibrilasi", kesimpulan: "Perlu tindak lanjut oleh dokter spesialis jantung", tanggal_waktu: "2024-04-02 11:30:00" }, //
    ],
    permintaan_obat: [
        { id: 1, id_pasien: 1, nama_obat: "Metformin", kode_obat: "A10BA02", tanggal_waktu: "2024-04-01 09:30:00", id_kunjungan: 1 }, //
        { id: 2, id_pasien: 2, nama_obat: "Amlodipin", kode_obat: "C08CA01", tanggal_waktu: "2024-04-02 11:45:00", id_kunjungan: 2 }, //
    ],
    distribusi_obat: [
        { id: 1, id_permintaan_obat: 1, id_praktisi: 1, jumlah: 30, tanggal_waktu: "2024-04-01 10:00:00" }, //
        { id: 2, id_permintaan_obat: 2, id_praktisi: 2, jumlah: 30, tanggal_waktu: "2024-04-02 12:00:00" }, //
    ],
    obat: [
        { id: 1, nama_obat: "Metformin", kode_obat: "A10BA02", bentuk: "Tablet", deskripsi: "Obat untuk pengendalian diabetes mellitus" }, //
        { id: 2, nama_obat: "Amlodipin", kode_obat: "C08CA01", bentuk: "Tablet", deskripsi: "Obat untuk pengendalian hipertensi" }, //
    ],
    permintaan_layanan: [
        { id: 1, id_pasien: 1, jenis_layanan: "Pemeriksaan mata", tanggal_waktu: "2024-04-01 09:45:00", id_kunjungan: 1 }, //
        { id: 2, id_pasien: 2, jenis_layanan: "Konsultasi ahli jantung", tanggal_waktu: "2024-04-02 12:15:00", id_kunjungan: 2 }, //
    ],
    klaim: [
        { id: 1, id_kunjungan: 1, total_biaya: 750000, status: "Diajukan" }, //
        { id: 2, id_kunjungan: 2, total_biaya: 1000000, status: "Diajukan" }, //
    ],
    faktur: [
        { id: 1, id_klaim: 1, tanggal_waktu: "2024-04-05 13:00:00", total_biaya: 750000 }, //
        { id: 2, id_klaim: 2, tanggal_waktu: "2024-04-05 13:30:00", total_biaya: 1000000 }, //
    ],
};
