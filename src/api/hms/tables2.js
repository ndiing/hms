/* 
Patient
Practitioner
Organization
Location
Encounter
Condition
Procedure
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
        {id: 1, nama: 'John Doe'},
        {id: 2, nama: 'Jane Smith'},
        {id: 3, nama: 'Michael Johnson'}
    ],
    praktisi: [
        {id: 1, nama: 'Dr. Smith'},
        {id: 2, nama: 'Dr. Johnson'},
        {id: 3, nama: 'Dr. Lee'}
    ],
    organisasi: [
        {id: 1, nama: 'Rumah Sakit ABC', alamat: 'Jl. Contoh No. 123', telepon: '123456789'},
        {id: 2, nama: 'Klinik XYZ', alamat: 'Jl. Lain No. 456', telepon: '987654321'}
    ],
    kunjungan: [
        {id: 1, id_pasien: 1, id_praktisi: 1, tanggal_waktu_mulai: '2024-04-01 08:00:00', tanggal_waktu_selesai: '2024-04-01 08:30:00'},
        {id: 2, id_pasien: 2, id_praktisi: 2, tanggal_waktu_mulai: '2024-04-02 09:00:00', tanggal_waktu_selesai: '2024-04-02 10:00:00'},
        {id: 3, id_pasien: 3, id_praktisi: 3, tanggal_waktu_mulai: '2024-04-03 10:00:00', tanggal_waktu_selesai: '2024-04-03 10:30:00'}
    ],
    kondisi: [
        {id: 1, id_pasien: 1, nama: 'Demam', kode: 'F10', status: 'Aktif', tanggal_waktu: '2024-04-01 08:15:00', id_kunjungan: 1},
        {id: 2, id_pasien: 2, nama: 'Flu', kode: 'J10', status: 'Aktif', tanggal_waktu: '2024-04-02 09:30:00', id_kunjungan: 2},
        {id: 3, id_pasien: 3, nama: 'Patah Tulang', kode: 'S72', status: 'Aktif', tanggal_waktu: '2024-04-03 10:15:00', id_kunjungan: 3}
    ],
    prosedur_medis: [
        {id: 1, id_kunjungan: 1, nama: 'Pemeriksaan Umum', kode: 'P01', tanggal_waktu: '2024-04-01 08:10:00'},
        {id: 2, id_kunjungan: 2, nama: 'Tes Darah', kode: 'P02', tanggal_waktu: '2024-04-02 09:20:00'},
        {id: 3, id_kunjungan: 3, nama: 'Operasi Patah Tulang', kode: 'P03', tanggal_waktu: '2024-04-03 10:20:00'}
    ],
    observasi_medis: [
        {id: 1, id_kunjungan: 1, jenis: 'Tekanan Darah', nilai: '120/80 mmHg', tanggal_waktu: '2024-04-01 08:15:00'},
        {id: 2, id_kunjungan: 2, jenis: 'Suhu Tubuh', nilai: '37.5°C', tanggal_waktu: '2024-04-02 09:30:00'},
        {id: 3, id_kunjungan: 3, jenis: 'Denyut Jantung', nilai: '80 bpm', tanggal_waktu: '2024-04-03 10:15:00'}
    ],
    permintaan_obat: [
        {id: 1, id_pasien: 1, nama_obat: 'Parasetamol', kode_obat: 'PAR001', tanggal_waktu: '2024-04-01 08:20:00', id_kunjungan: 1},
        {id: 2, id_pasien: 2, nama_obat: 'Antibiotik', kode_obat: 'ANT002', tanggal_waktu: '2024-04-02 09:40:00', id_kunjungan: 2},
        {id: 3, id_pasien: 3, nama_obat: 'Obat Penghilang Rasa Sakit', kode_obat: 'OBS003', tanggal_waktu: '2024-04-03 10:25:00', id_kunjungan: 3}
    ],
    obat: [
        {id: 1, nama: 'Parasetamol', kode: 'PAR001', bentuk: 'Tablet'},
        {id: 2, nama: 'Antibiotik', kode: 'ANT002', bentuk: 'Kapsul'},
        {id: 3, nama: 'Obat Penghilang Rasa Sakit', kode: 'OBS003', bentuk: 'Pil'}
    ],
    klaim: [
        {id: 1, id_kunjungan: 1, total_harga: 1500000.00, status: 'Pending'},
        {id: 2, id_kunjungan: 2, total_harga: 2000000.00, status: 'Diterima'},
        {id: 3, id_kunjungan: 3, total_harga: 3000000.00, status: 'Ditolak'}
    ],
    faktur: [
        {id: 1, id_klaim: 1, tanggal_waktu: '2024-04-10 08:00:00', total_harga: 1500000.00},
        {id: 2, id_klaim: 2, tanggal_waktu: '2024-04-11 09:00:00', total_harga: 2000000.00},
        {id: 3, id_klaim: 3, tanggal_waktu: '2024-04-12 10:00:00', total_harga: 3000000.00}
    ]
};
