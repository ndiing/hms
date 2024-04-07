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
        { id: 1, nama: "Budi Santoso", jenis_kelamin: "Laki-laki", tanggal_lahir: "1990-05-15", alamat: "Jl. Cendana No. 10", telepon: "081234567890", email: "budi@example.com" },
        { id: 2, nama: "Ani Cahaya", jenis_kelamin: "Perempuan", tanggal_lahir: "1985-10-20", alamat: "Jl. Anggrek No. 5", telepon: "085678901234", email: "ani@example.com" },
    ],
    praktisi: [
        { id: 1, nama: "Dr. Andi Wijaya", spesialisasi: "Dokter Umum", jenis_kelamin: "Laki-laki", alamat: "Jl. Mawar No. 15", telepon: "081234567891", email: "andi@example.com" },
        { id: 2, nama: "Dr. Dewi Susanti", spesialisasi: "Dokter Gigi", jenis_kelamin: "Perempuan", alamat: "Jl. Kenanga No. 8", telepon: "085678901235", email: "dewi@example.com" },
    ],
    organisasi: [
        { id: 1, nama: "Rumah Sakit XYZ", alamat: "Jl. Teratai No. 25", telepon: "0211234567", email: "info@rsxyz.com" },
    ],
    lokasi: [
        { id: 1, nama: "Ruang Pemeriksaan", jenis: "Pemeriksaan", alamat: "Lantai 1", id_organisasi: 1 },
        { id: 2, nama: "Ruang Operasi", jenis: "Operasi", alamat: "Lantai 2", id_organisasi: 1 },
    ],
    pertemuan: [
        { id: 1, id_pasien: 1, id_praktisi: 1, id_lokasi: 1, jenis_kunjungan: "Konsultasi Umum", waktu_mulai: "2024-04-10 09:00:00", waktu_selesai: "2024-04-10 10:00:00" },
        { id: 2, id_pasien: 2, id_praktisi: 2, id_lokasi: 1, jenis_kunjungan: "Pemeriksaan Gigi", waktu_mulai: "2024-04-12 11:00:00", waktu_selesai: "2024-04-12 12:00:00" },
    ],
    alergi_intoleransi: [
        { id: 1, id_pasien: 1, alergi: "Alergi terhadap Amoxicillin" },
        { id: 2, id_pasien: 2, alergi: "Intoleransi terhadap Udang" },
    ],
    kondisi: [
        { id: 1, id_pasien: 1, nama: "Hipertensi", kode: "I10", status: "Aktif", tanggal_waktu: "2024-04-10 09:30:00", id_pertemuan: 1 },
        { id: 2, id_pasien: 2, nama: "Karies Gigi", kode: "K02", status: "Aktif", tanggal_waktu: "2024-04-12 11:30:00", id_pertemuan: 2 },
    ],
    prosedur: [
        { id: 1, id_pertemuan: 1, nama: "Pengukuran Tekanan Darah", kode: "94512007", tanggal_waktu: "2024-04-10 09:30:00" },
        { id: 2, id_pertemuan: 2, nama: "Pencabutan Gigi", kode: "301471007", tanggal_waktu: "2024-04-12 11:45:00" },
    ],
    impresi_klinis: [
        { id: 1, id_pasien: 1, kesimpulan: "Pasien membutuhkan pengawasan tekanan darah secara rutin", tanggal_waktu: "2024-04-10 10:00:00", id_pertemuan: 1 },
        { id: 2, id_pasien: 2, kesimpulan: "Pasien membutuhkan perawatan gigi lanjutan", tanggal_waktu: "2024-04-12 12:00:00", id_pertemuan: 2 },
    ],
    observasi: [
        { id: 1, id_pertemuan: 1, jenis: "Tekanan Darah", nilai: "120/80 mmHg", tanggal_waktu: "2024-04-10 09:30:00" },
        { id: 2, id_pertemuan: 2, jenis: "Karies Gigi", nilai: "Gigi 24 dan 25 terkena karies", tanggal_waktu: "2024-04-12 11:30:00" },
    ],
    laporan_diagnostik: [
        { id: 1, id_pasien: 1, hasil: "Tekanan darah dalam batas normal", tanggal_waktu: "2024-04-10 10:00:00", id_pertemuan: 1 },
        { id: 2, id_pasien: 2, hasil: "Gigi 24 dan 25 membutuhkan pencabutan", tanggal_waktu: "2024-04-12 12:00:00", id_pertemuan: 2 },
    ],
    permintaan_obat: [
        { id: 1, id_pasien: 1, nama_obat: "Amoxicillin", kode_obat: "123456", tanggal_waktu: "2024-04-10 09:30:00", id_pertemuan: 1 },
        { id: 2, id_pasien: 2, nama_obat: "Obat Karies", kode_obat: "654321", tanggal_waktu: "2024-04-12 11:30:00", id_pertemuan: 2 },
    ],
    distribusi_obat: [
        { id: 1, id_permintaan_obat: 1, id_praktisi: 1, jumlah: 1, tanggal_waktu: "2024-04-10 09:45:00" },
        { id: 2, id_permintaan_obat: 2, id_praktisi: 2, jumlah: 1, tanggal_waktu: "2024-04-12 11:45:00" },
    ],
    obat: [
        { id: 1, nama_obat: "Amoxicillin", kode_obat: "123456", bentuk_obat: "Tablet", deskripsi: "Obat antibiotik untuk infeksi bakteri" },
        { id: 2, nama_obat: "Obat Karies", kode_obat: "654321", bentuk_obat: "Obat Kapsul", deskripsi: "Obat untuk mengobati karies gigi" },
    ],
    permintaan_layanan: [
        { id: 1, id_pasien: 1, jenis_layanan: "Pelayanan Darurat", tanggal_waktu: "2024-04-10 09:15:00", id_pertemuan: 1 },
        { id: 2, id_pasien: 2, jenis_layanan: "Pemeriksaan Kehamilan", tanggal_waktu: "2024-04-12 11:15:00", id_pertemuan: 2 },
    ],
    klaim: [
        { id: 1, id_pertemuan: 1, total_biaya: 500000, status: "Diproses", tanggal_waktu: "2024-04-10 10:30:00" },
        { id: 2, id_pertemuan: 2, total_biaya: 1000000, status: "Menunggu Pembayaran", tanggal_waktu: "2024-04-12 12:30:00" },
    ],
    faktur: [
        { id: 1, id_klaim: 1, tanggal_waktu: "2024-04-10 10:30:00", total_biaya: 500000 },
        { id: 2, id_klaim: 2, tanggal_waktu: "2024-04-12 12:30:00", total_biaya: 1000000 },
    ],
};
