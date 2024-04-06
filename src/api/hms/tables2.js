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

const data = {
    pasien: [
        { id: 1, nama: "Budi Santoso", jenis_kelamin: "Laki-laki", tanggal_lahir: "1980-05-15", alamat: "Jl. Merdeka No. 10", telepon: "081234567890", email: "budi@gmail.com" }, //
        { id: 2, nama: "Ani Cahaya", jenis_kelamin: "Perempuan", tanggal_lahir: "1975-09-20", alamat: "Jl. Pahlawan No. 25", telepon: "082345678901", email: "ani@yahoo.com" }, //
    ],
    praktisi: [
        { id: 1, nama: "Dr. Ahmad", spesialisasi: "Dokter Umum", jenis_kelamin: "Laki-laki", alamat: "Jl. Aman No. 5", telepon: "085678901234", email: "ahmad@rs.com" }, //
        { id: 2, nama: "Dr. Susi", spesialisasi: "Dokter Anak", jenis_kelamin: "Perempuan", alamat: "Jl. Sejahtera No. 15", telepon: "087890123456", email: "susi@rs.com" }, //
    ],

    organisasi: [
        { id: 1, nama: "Rumah Sakit Sejahtera", alamat: "Jl. Kesehatan No. 1", telepon: "02112345678", email: "info@rs-sejahtera.com" }, //
    ],
    lokasi: [
        { id: 1, nama: "Instalasi Rawat Inap", jenis: "Rawat Inap", alamat: "Lantai 3, Blok A", id_organisasi: 1 }, //
        { id: 2, nama: "IGD", jenis: "Instalasi Gawat Darurat", alamat: "Lantai 1", id_organisasi: 1 }, //
        { id: 3, nama: "Ruang Persalinan", jenis: "Persalinan", alamat: "Lantai 2, Blok B", id_organisasi: 1 }, //
    ],

    appointment: [
        { id: 1, id_pasien: 1, id_praktisi: 1, id_lokasi: 1, jenis_kunjungan: "Rawat Inap", waktu_mulai: "2024-04-01 10:00:00", waktu_selesai: "2024-04-03 12:00:00" }, //
        { id: 2, id_pasien: 2, id_praktisi: 2, id_lokasi: 2, jenis_kunjungan: "IGD", waktu_mulai: "2024-04-02 11:00:00", waktu_selesai: "2024-04-02 13:00:00" }, //
        { id: 3, id_pasien: 1, id_praktisi: 1, id_lokasi: 3, jenis_kunjungan: "Persalinan", waktu_mulai: "2024-04-03 08:00:00", waktu_selesai: "2024-04-03 12:00:00" }, //
    ],
    encounter: [
        { id: 1, id_pasien: 1, id_praktisi: 1, id_lokasi: 1, jenis_kunjungan: "Rawat Inap", waktu_mulai: "2024-04-01 10:00:00", waktu_selesai: "2024-04-03 12:00:00" }, //
        { id: 2, id_pasien: 2, id_praktisi: 2, id_lokasi: 2, jenis_kunjungan: "IGD", waktu_mulai: "2024-04-02 11:00:00", waktu_selesai: "2024-04-02 13:00:00" }, //
        { id: 3, id_pasien: 1, id_praktisi: 1, id_lokasi: 3, jenis_kunjungan: "Persalinan", waktu_mulai: "2024-04-03 08:00:00", waktu_selesai: "2024-04-03 12:00:00" }, //
    ],
    alergi_intoleransi: [
        { id: 1, id_pasien: 1, alergi: "Aspirin" }, //
        { id: 2, id_pasien: 2, alergi: "Penicillin" }, //
    ],
    kondisi: [
        { id: 1, id_pasien: 1, kondisi: "Diabetes Mellitus", kode: "T90.2", status: "Aktif", waktu: "2024-04-01 10:00:00" }, //
        { id: 2, id_pasien: 2, kondisi: "Hipertensi Esensial", kode: "I10", status: "Aktif", waktu: "2024-04-02 11:00:00" }, //
    ],
    prosedur: [
        { id: 1, id_pasien: 1, prosedur: "Pemeriksaan Fisik Umum", kode: "123456", waktu: "2024-04-01 10:30:00" }, //
        { id: 2, id_pasien: 2, prosedur: "Pemeriksaan Darah Lengkap", kode: "789012", waktu: "2024-04-02 11:30:00" }, //
    ],
    impresi_klinis: [
        { id: 1, id_pasien: 1, impresi_klinis: "Pasien dengan diabetes mellitus tidak terkontrol", kesimpulan: "Perlu penyesuaian dosis insulin", waktu: "2024-04-01 11:00:00" }, //
        { id: 2, id_pasien: 2, impresi_klinis: "Pasien dengan hipertensi", kesimpulan: "Perlu kontrol tekanan darah secara berkala", waktu: "2024-04-02 12:00:00" }, //
    ],
    observasi: [
        { id: 1, id_pasien: 1, jenis: "Tekanan Darah", nilai: "120/80 mmHg", waktu: "2024-04-01 10:15:00" }, //
        { id: 2, id_pasien: 2, jenis: "Gula Darah", nilai: "120 mg/dL", waktu: "2024-04-02 11:15:00" }, //
    ],
    laporan_diagnostik: [
        { id: 1, id_pasien: 1, hasil: "Normal", kesimpulan: "Tidak ada kelainan pada hasil pemeriksaan", waktu: "2024-04-01 11:30:00" }, //
        { id: 2, id_pasien: 2, hasil: "Hipertensi Tingkat 1", kesimpulan: "Perlu kontrol tekanan darah lebih lanjut", waktu: "2024-04-02 12:30:00" }, //
    ],
    permintaan_obat: [
        { id: 1, id_pasien: 1, obat: "Insulin", jumlah: 2, waktu_mulai: "2024-04-01 12:00:00", waktu_selesai: "2024-04-03 12:00:00" }, //
        { id: 2, id_pasien: 2, obat: "Amlodipine", jumlah: 1, waktu_mulai: "2024-04-02 13:00:00", waktu_selesai: "2024-04-02 15:00:00" }, //
    ],
    distribusi_obat: [
        { id: 1, id_permintaan_obat: 1, id_praktisi: 1, jumlah: 2, waktu: "2024-04-01 14:00:00" }, //
        { id: 2, id_permintaan_obat: 2, id_praktisi: 2, jumlah: 1, waktu: "2024-04-02 16:00:00" }, //
    ],
    obat: [
        { id: 1, nama: "Insulin", kode: "ABC123", bentuk: "Injeksi", deskripsi: "Untuk mengatur kadar gula darah" }, //
        { id: 2, nama: "Amlodipine", kode: "DEF456", bentuk: "Tablet", deskripsi: "Untuk menurunkan tekanan darah tinggi" }, //
    ],
    permintaan_layanan: [
        { id: 1, id_pasien: 1, jenis_layanan: "Fisioterapi", waktu_mulai: "2024-04-01 16:00:00", waktu_selesai: "2024-04-01 17:00:00" }, //
        { id: 2, id_pasien: 2, jenis_layanan: "Konseling Gizi", waktu_mulai: "2024-04-02 17:00:00", waktu_selesai: "2024-04-02 18:00:00" }, //
    ],
    
    klaim: [
        { id: 1, id_encounter: 1, total_biaya: 2000000, status: "Diajukan", waktu: "2024-04-03 12:00:00" }, //
        { id: 2, id_encounter: 2, total_biaya: 1500000, status: "Diajukan", waktu: "2024-04-04 13:00:00" }, //
    ],
    faktur: [
        { id: 1, id_klaim: 1, waktu: "2024-04-05 12:00:00", total_biaya: 2000000 }, //
        { id: 2, id_klaim: 2, waktu: "2024-04-06 13:00:00", total_biaya: 1500000 }, //
    ],
};
