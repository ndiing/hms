/* 
Patient
Practitioner
Organization
Location
Appointment
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
        { id: 1, nama: "Budi", jenis_kelamin: "Laki-laki", tanggal_lahir: "1980-05-15", alamat: "Jl. Raya No. 123", telepon: "08123456789", email: "budi@example.com" },
        { id: 2, nama: "Ani", jenis_kelamin: "Perempuan", tanggal_lahir: "1975-09-20", alamat: "Jl. Melati No. 45", telepon: "08234567890", email: "ani@example.com" },
    ],
    praktisi: [
        { id: 1, nama: "Dr. Joko", spesialisasi: "Dokter Umum", jenis_kelamin: "Laki-laki", alamat: "Jl. Mangga No. 10", telepon: "08567890123", email: "joko@example.com" },
        { id: 2, nama: "Dr. Siti", spesialisasi: "Dokter Spesialis Penyakit Dalam", jenis_kelamin: "Perempuan", alamat: "Jl. Anggrek No. 25", telepon: "08789012345", email: "siti@example.com" },
    ],
    organisasi: [
        { id: 1, nama: "RS Sehat Sentosa", jenis: "Rumah Sakit", alamat: "Jl. Pahlawan No. 100", telepon: "02112345678", email: "info@rssehat.com" },
    ],
    lokasi: [
        { id: 1, nama: "Poliklinik Umum", jenis: "Poliklinik", alamat: "Lantai 1", id_organisasi: 1 },
        { id: 2, nama: "Unit Gawat Darurat", jenis: "IGD", alamat: "Lantai 2", id_organisasi: 1 },
    ],
    janji_temu: [
        { id: 1, id_pasien: 1, id_praktisi: 1, id_lokasi: 1, waktu_mulai: "2024-04-01 08:00:00", waktu_selesai: "2024-04-01 09:00:00" },
        { id: 2, id_pasien: 2, id_praktisi: 2, id_lokasi: 2, waktu_mulai: "2024-04-02 10:00:00", waktu_selesai: "2024-04-02 11:00:00" },
    ],
    kunjungan: [
        { id: 1, id_pasien: 1, id_praktisi: 1, id_lokasi: 1, waktu_mulai: "2024-04-01 08:00:00", waktu_selesai: "2024-04-01 09:00:00" },
        { id: 2, id_pasien: 2, id_praktisi: 2, id_lokasi: 2, waktu_mulai: "2024-04-02 10:00:00", waktu_selesai: "2024-04-02 11:00:00" },
    ],
    riwayat_alergi: [
        { id: 1, id_pasien: 1, alergi: "Alergi obat penicillin", status: "Aktif", waktu: "2023-12-01 09:00:00" },
        { id: 2, id_pasien: 2, alergi: "Alergi debu", status: "Aktif", waktu: "2022-06-15 10:30:00" },
    ],
    kondisi: [
        { id: 1, id_pasien: 1, nama: "Diabetes Mellitus", kode: "T78.1", status: "Aktif", waktu: "2024-01-10 11:00:00", id_kunjungan: 1 },
        { id: 2, id_pasien: 2, nama: "Hipertensi", kode: "I10", status: "Aktif", waktu: "2024-02-20 14:30:00", id_kunjungan: 2 },
    ],
    prosedur: [
        { id: 1, id_kunjungan: 1, nama: "Pemeriksaan fisik umum", kode: "01AA0ZZ", waktu: "2024-04-01 08:30:00" },
        { id: 2, id_kunjungan: 2, nama: "EKG", kode: "5A2200Z", waktu: "2024-04-02 10:15:00" },
    ],
    impresi_klinis: [
        { id: 1, id_kunjungan: 1, kesimpulan: "Tidak ada kelainan pada pemeriksaan fisik umum", waktu: "2024-04-01 09:15:00" },
        { id: 2, id_kunjungan: 2, kesimpulan: "Perlu tindak lanjut oleh dokter spesialis jantung", waktu: "2024-04-02 11:30:00" },
    ],
    observasi: [
        { id: 1, id_kunjungan: 1, jenis: "Tekanan darah", nilai: "120/80 mmHg", waktu: "2024-04-01 08:45:00" },
        { id: 2, id_kunjungan: 2, jenis: "Kadar gula darah", nilai: "150 mg/dL", waktu: "2024-04-02 10:20:00" },
    ],
    laporan_diagnostik: [
        { id: 1, id_kunjungan: 1, hasil: "Rontgen dada: normal", kesimpulan: "Tidak ada kelainan pada rontgen dada", waktu: "2024-04-01 09:15:00" },
        { id: 2, id_kunjungan: 2, hasil: "EKG: atrial fibrilasi", kesimpulan: "Perlu tindak lanjut oleh dokter spesialis jantung", waktu: "2024-04-02 11:30:00" },
    ],
    permintaan_obat: [
        { id: 1, id_pasien: 1, nama_obat: "Metformin", kode_obat: "A10BA02", waktu: "2024-04-01 09:30:00", id_kunjungan: 1 },
        { id: 2, id_pasien: 2, nama_obat: "Amlodipin", kode_obat: "C08CA01", waktu: "2024-04-02 11:45:00", id_kunjungan: 2 },
    ],
    distribusi_obat: [
        { id: 1, id_permintaan_obat: 1, id_praktisi: 1, jumlah: 30, waktu: "2024-04-01 10:00:00" },
        { id: 2, id_permintaan_obat: 2, id_praktisi: 2, jumlah: 30, waktu: "2024-04-02 12:00:00" },
    ],
    obat: [
        { id: 1, nama: "Metformin", kode: "A10BA02", bentuk: "Tablet", deskripsi: "Obat untuk pengendalian gula darah pada pasien diabetes mellitus" },
        { id: 2, nama: "Amlodipin", kode: "C08CA01", bentuk: "Tablet", deskripsi: "Obat untuk pengendalian tekanan darah tinggi" },
    ],
    permintaan_layanan: [
        { id: 1, id_pasien: 1, jenis_layanan: "Fisioterapi", waktu: "2024-04-01 09:45:00", id_kunjungan: 1 },
        { id: 2, id_pasien: 2, jenis_layanan: "Konsultasi Gizi", waktu: "2024-04-02 12:30:00", id_kunjungan: 2 },
    ],
    klaim: [
        { id: 1, id_kunjungan: 1, total_biaya: 500000, status: "Diajukan" },
        { id: 2, id_kunjungan: 2, total_biaya: 750000, status: "Diajukan" },
    ],
    faktur: [
        { id: 1, id_klaim: 1, waktu: "2024-04-05 13:00:00", total_biaya: 500000 },
        { id: 2, id_klaim: 2, waktu: "2024-04-05 13:30:00", total_biaya: 750000 },
    ],
};
