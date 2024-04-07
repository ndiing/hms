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
        { id: 1, nama_depan: 'John', nama_belakang: 'Doe', tanggal_lahir: '1980-05-25', jenis_kelamin: 'Laki-laki', alamat: 'Jl. Merdeka No. 1', penyedia_asuransi: 'ABC Health', nomor_polis: 'POL123456' },
        { id: 2, nama_depan: 'Jane', nama_belakang: 'Smith', tanggal_lahir: '1975-10-15', jenis_kelamin: 'Perempuan', alamat: 'Jl. Pahlawan No. 5', penyedia_asuransi: 'XYZ Insurance', nomor_polis: 'INS789012' }
    ],
    praktisi: [
        { id: 1, nama: 'Dr. Ahmad', spesialisasi: 'Dokter Umum', alamat: 'Jl. Aman No. 10', nomor_telepon: '08123456789' },
        { id: 2, nama: 'Dr. Budi', spesialisasi: 'Bedah Umum', alamat: 'Jl. Bahagia No. 15', nomor_telepon: '08234567890' }
    ],

    organisasi: [
        { id: 1, nama: 'Rumah Sakit Sentosa', alamat: 'Jl. Sentosa No. 20', jenis: 'Rumah Sakit', nomor_telepon: '0211234567' },
        { id: 2, nama: 'Klinik Sehat', alamat: 'Jl. Sejahtera No. 25', jenis: 'Klinik', nomor_telepon: '0212345678' }
    ],
    lokasi: [
        { id: 1, nama: 'Ruangan A', jenis: 'Ruang Rawat', alamat: 'Jl. Rawat No. 30', kota: 'Jakarta', kode_pos: '12345' },
        { id: 2, nama: 'Ruang Operasi 1', jenis: 'Ruang Operasi', alamat: 'Jl. Operasi No. 35', kota: 'Jakarta', kode_pos: '12345' }
    ],

    janji: [
        { id: 1, pasien_id: 1, praktisi_id: 1, waktu_mulai: '2024-03-10 08:00:00', waktu_selesai: '2024-03-10 09:00:00', status: 'Aktif' },
        { id: 2, pasien_id: 2, praktisi_id: 2, waktu_mulai: '2024-03-12 09:00:00', waktu_selesai: '2024-03-12 11:00:00', status: 'Aktif' }
    ],

    jadwal: [
        { id: 1, praktisi_id: 1, hari: 'Senin', jam_mulai: '08:00:00', jam_selesai: '17:00:00' },
        { id: 2, praktisi_id: 2, hari: 'Selasa', jam_mulai: '09:00:00', jam_selesai: '18:00:00' }
    ],
    slot: [
        { id: 1, jadwal_id: 1, waktu_mulai: '2024-03-10 08:00:00', waktu_selesai: '2024-03-10 09:00:00', status: 'Tersedia' },
        { id: 2, jadwal_id: 2, waktu_mulai: '2024-03-11 09:00:00', waktu_selesai: '2024-03-11 10:00:00', status: 'Tersedia' }
    ],

    pertemuan: [
        { id: 1, pasien_id: 1, praktisi_id: 1, waktu_mulai: '2024-03-10 08:00:00', waktu_selesai: '2024-03-10 09:00:00', keterangan: 'Konsultasi Umum' },
        { id: 2, pasien_id: 2, praktisi_id: 2, waktu_mulai: '2024-03-12 09:00:00', waktu_selesai: '2024-03-12 11:00:00', keterangan: 'Operasi Apendisitis' }
    ],
    episode_perawatan: [
        { id: 1, pasien_id: 1, keterangan: 'Perawatan rutin' },
        { id: 2, pasien_id: 2, keterangan: 'Operasi Apendisitis' }
    ],
    alergi: [
        { id: 1, pasien_id: 1, alergi: 'Obat Penicillin', keterangan: 'Reaksi alergi parah' },
        { id: 2, pasien_id: 2, alergi: 'Kacang-kacangan', keterangan: 'Alergi ringan' }
    ],
    kondisi: [
        { id: 1, pasien_id: 1, nama_kondisi: 'Hipertensi', keterangan: 'Hipertensi tingkat 2' },
        { id: 2, pasien_id: 2, nama_kondisi: 'Apendisitis', keterangan: 'Peradangan akut pada apendiks' }
    ],
    prosedur: [
        { id: 1, pertemuan_id: 1, nama_prosedur: 'Tes Darah', tanggal_prosedur: '2024-03-10', keterangan: 'Rutin setiap tahun' },
        { id: 2, pertemuan_id: 2, nama_prosedur: 'Apendektomi', tanggal_prosedur: '2024-03-12', keterangan: 'Operasi pembedahan untuk mengangkat apendiks yang meradang' }
    ],
    impresi_klinis: [
        { id: 1, pertemuan_id: 1, impresi: 'Kesehatan umum baik, tekanan darah sedikit tinggi', keterangan: '-' },
        { id: 2, pertemuan_id: 2, impresi: 'Operasi sukses, pasien dalam kondisi stabil', keterangan: '-' }
    ],
    observasi: [
        { id: 1, pertemuan_id: 1, jenis_observasi: 'Tekanan Darah', nilai: 130, keterangan: 'Sistolik: 130, Diastolik: 80' },
        { id: 2, pertemuan_id: 2, jenis_observasi: 'Suhu Tubuh', nilai: 37.5, keterangan: 'Suhu tubuh pasien setelah operasi' }
    ],
    laporan_diagnostik: [
        { id: 1, pertemuan_id: 1, jenis_laporan: 'Tes Darah', hasil: 'Normal', keterangan: 'Tingkat kolesterol dalam batas normal' },
        { id: 2, pertemuan_id: 2, jenis_laporan: 'Laporan Operasi', hasil: 'Berhasil, apendiks berhasil diangkat', keterangan: '-' }
    ],

    resep_obat: [
        { id: 1, pertemuan_id: 1, obat_id: 1, dosis: '150 mg/hari', keterangan: 'Minum setiap pagi sebelum makan' },
        { id: 2, pertemuan_id: 2, obat_id: 2, dosis: '500 mg/6 jam', keterangan: 'Minum sesuai dosis setelah makan' }
    ],
    dispensasi_obat: [
        { id: 1, resep_obat_id: 1, tanggal_dispensasi: '2024-03-10', jumlah: 30, keterangan: '30 tablet obat diresepkan' },
        { id: 2, resep_obat_id: 2, tanggal_dispensasi: '2024-03-12', jumlah: 20, keterangan: '20 tablet obat diresepkan' }
    ],
    obat: [
        { id: 1, nama_obat: 'Aspirin', jenis_obat: 'Analgesik', produsen: 'PT. A', keterangan: 'Obat pereda nyeri' },
        { id: 2, nama_obat: 'Amoxicillin', jenis_obat: 'Antibiotik', produsen: 'PT. B', keterangan: 'Obat antibiotik untuk infeksi bakteri' }
    ],

    permintaan_layanan: [
        { id: 1, pertemuan_id: 1, jenis_layanan: 'Tes Darah', keterangan: 'Pasien memerlukan tes darah rutin' },
        { id: 2, pertemuan_id: 2, jenis_layanan: 'Konsultasi Pasca Operasi', keterangan: 'Pasien memerlukan konsultasi pasca operasi' }
    ],

    klaim: [
        { id: 1, pertemuan_id: 1, tanggal_klaim: '2024-03-15', jumlah_klaim: 150.00, status: 'Disetujui' },
        { id: 2, pertemuan_id: 2, tanggal_klaim: '2024-03-18', jumlah_klaim: 2500.00, status: 'Menunggu' }
    ],
    faktur: [
        { id: 1, pasien_id: 1, pertemuan_id: 1, tanggal_faktur: '2024-03-15', jumlah_total: 150.00, status: 'Lunas' },
        { id: 2, pasien_id: 2, pertemuan_id: 2, tanggal_faktur: '2024-03-18', jumlah_total: 2500.00, status: 'Belum Lunas' }
    ],
    
    pemberitahuan_pembayaran: [
        { id: 1, faktur_id: 1, tanggal_pemberitahuan: '2024-03-15', keterangan: 'Pembayaran telah diterima' },
        { id: 2, faktur_id: 2, tanggal_pemberitahuan: '2024-03-20', keterangan: 'Silakan segera lakukan pembayaran' }
    ],
    rekonsiliasi_pembayaran: [
        { id: 1, tanggal_rekonsiliasi: '2024-03-25', keterangan: 'Rekonsiliasi pembayaran telah selesai' }
    ]
};
