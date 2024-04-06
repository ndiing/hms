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
        { id: 1, nama: "Budi Santoso", jenis_kelamin: "Laki-laki", tanggal_lahir: "1990-05-15", alamat: "Jl. Cendana No. 10", telepon: "081234567890", email: "budi@example.com" }, //
        { id: 2, nama: "Ani Cahaya", jenis_kelamin: "Perempuan", tanggal_lahir: "1985-10-20", alamat: "Jl. Anggrek No. 5", telepon: "085678901234", email: "ani@example.com" }, //
    ],
    praktisi: [
        { id: 1, nama: "Dr. Andi Wijaya", spesialisasi: "Dokter Umum", jenis_kelamin: "Laki-laki", alamat: "Jl. Mawar No. 15", telepon: "081234567891", email: "andi@example.com" }, //
        { id: 2, nama: "Dr. Dewi Susanti", spesialisasi: "Dokter Gigi", jenis_kelamin: "Perempuan", alamat: "Jl. Kenanga No. 8", telepon: "085678901235", email: "dewi@example.com" }, //
    ],
    organisasi: [
        { id: 1, nama: "Rumah Sakit XYZ", alamat: "Jl. Teratai No. 25", telepon: "0211234567", email: "info@rsxyz.com" }, //
    ],
    lokasi: [
        { id: 1, nama: "Ruang Pemeriksaan", jenis: "Pemeriksaan", alamat: "Lantai 1", id_organisasi: 1 }, //
        { id: 2, nama: "Ruang Operasi", jenis: "Operasi", alamat: "Lantai 2", id_organisasi: 1 }, //
    ],
    janji_temu: [
        { id: 1, id_pasien: 1, id_praktisi: 1, id_lokasi: 1, jenis_kunjungan: "Konsultasi Umum", waktu_mulai: "2024-04-10 09:00:00", waktu_selesai: "2024-04-10 10:00:00" }, //
        { id: 2, id_pasien: 2, id_praktisi: 2, id_lokasi: 1, jenis_kunjungan: "Pemeriksaan Gigi", waktu_mulai: "2024-04-12 11:00:00", waktu_selesai: "2024-04-12 12:00:00" }, //
    ],
    pertemuan: [
        { id: 1, id_pasien: 1, id_praktisi: 1, id_lokasi: 1, jenis_kunjungan: "Konsultasi Umum", waktu_mulai: "2024-04-10 09:00:00", waktu_selesai: "2024-04-10 10:00:00" }, //
        { id: 2, id_pasien: 2, id_praktisi: 2, id_lokasi: 1, jenis_kunjungan: "Pemeriksaan Gigi", waktu_mulai: "2024-04-12 11:00:00", waktu_selesai: "2024-04-12 12:00:00" }, //
    ],
    alergi_intoleransi: [
        { id: 1, id_pasien: 1, alergi: "Alergi terhadap Amoxicillin" }, //
        { id: 2, id_pasien: 2, alergi: "Intoleransi terhadap Udang" }, //
    ],
    kondisi: [
        { id: 1, id_pasien: 1, kondisi: "Diabetes Mellitus", kode: "T90", status: "Aktif", waktu: "2024-04-08 08:00:00" }, //
        { id: 2, id_pasien: 2, kondisi: "Hipertensi", kode: "I10", status: "Pasif", waktu: "2024-04-10 10:00:00" }, //
    ],
    prosedur: [
        { id: 1, id_pertemuan: 1, nama_prosedur: "Pemeriksaan Darah", kode_prosedur: "1JH78", waktu: "2024-04-08 08:30:00" }, //
        { id: 2, id_pertemuan: 2, nama_prosedur: "Scaling Gigi", kode_prosedur: "2AB90", waktu: "2024-04-10 11:30:00" }, //
    ],
    impresi_klinis: [
        { id: 1, id_pasien: 1, impresi_klinis: "Tingkat gula darah tinggi, kontrol gula darah rutin", kesimpulan: "Perlu pengawasan lebih lanjut", waktu: "2024-04-08 09:00:00" }, //
        { id: 2, id_pasien: 2, impresi_klinis: "Tingkat tekanan darah masih tinggi, perlu diet dan olahraga teratur", kesimpulan: "Perlu konsultasi lanjutan", waktu: "2024-04-10 11:30:00" }, //
    ],
    observasi: [
        { id: 1, id_pertemuan: 1, jenis_observasi: "Tekanan Darah", nilai: "120/80 mmHg", waktu: "2024-04-08 08:15:00" }, //
        { id: 2, id_pertemuan: 2, jenis_observasi: "Tingkat Gula Darah", nilai: "150 mg/dL", waktu: "2024-04-10 11:15:00" }, //
    ],
    laporan_diagnostik: [
        { id: 1, id_pertemuan: 1, hasil: "Hasil pemeriksaan darah menunjukkan kadar gula darah yang tinggi", kesimpulan: "Perlu tindakan pengobatan lebih lanjut", waktu: "2024-04-08 09:15:00" }, //
        { id: 2, id_pertemuan: 2, hasil: "Scaling gigi dilakukan tanpa komplikasi", kesimpulan: "Kondisi gigi membaik", waktu: "2024-04-10 12:00:00" }, //
    ],
    permintaan_obat: [
        { id: 1, id_pasien: 1, nama_obat: "Metformin", kode_obat: "M001", jumlah: 30, waktu: "2024-04-08 09:30:00" }, //
        { id: 2, id_pasien: 2, nama_obat: "Enalapril", kode_obat: "E002", jumlah: 30, waktu: "2024-04-10 11:45:00" }, //
    ],
    distribusi_obat: [
        { id: 1, id_permintaan_obat: 1, id_praktisi: 1, jumlah: 30, waktu: "2024-04-08 09:45:00" }, //
        { id: 2, id_permintaan_obat: 2, id_praktisi: 2, jumlah: 30, waktu: "2024-04-10 12:00:00" }, //
    ],
    obat: [
        { id: 1, nama_obat: "Metformin", kode_obat: "M001", bentuk_obat: "Tablet", deskripsi: "Obat untuk pengendalian gula darah pada pasien diabetes mellitus" }, //
        { id: 2, nama_obat: "Enalapril", kode_obat: "E002", bentuk_obat: "Tablet", deskripsi: "Obat untuk pengendalian tekanan darah pada pasien hipertensi" }, //
    ],
    permintaan_layanan: [
        { id: 1, id_pasien: 1, jenis_layanan: "Pemeriksaan Darah", waktu_mulai: "2024-04-08 08:30:00", waktu_selesai: "2024-04-08 09:00:00" }, //
        { id: 2, id_pasien: 2, jenis_layanan: "Scaling Gigi", waktu_mulai: "2024-04-10 11:30:00", waktu_selesai: "2024-04-10 12:00:00" }, //
    ],
    klaim: [
        { id: 1, id_pertemuan: 1, total_biaya: 200000, status: "Diklaim", waktu: "2024-04-08 09:30:00" }, //
        { id: 2, id_pertemuan: 2, total_biaya: 250000, status: "Diklaim", waktu: "2024-04-10 12:00:00" }, //
    ],
    faktur: [
        { id: 1, id_klaim: 1, waktu: "2024-04-08 09:45:00", total_biaya: 200000 }, //
        { id: 2, id_klaim: 2, waktu: "2024-04-10 12:15:00", total_biaya: 250000 }, //
    ],
};
