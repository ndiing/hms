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
      { id: 1, nama: 'Budi Santoso', alamat: 'Jl. Merdeka No. 10', tanggal_lahir: '1980-05-15', telepon: '08123456789', email: 'budi@example.com' },
      { id: 2, nama: 'Ani Cahyani', alamat: 'Jl. Diponegoro No. 20', tanggal_lahir: '1975-08-20', telepon: '08765432109', email: 'ani@example.com' }
    ],
    praktisi: [
      { id: 1, nama: 'Dr. Susilo', spesialisasi: 'Dokter Umum', telepon: '08567891234', email: 'dr.susilo@rssehat.com' },
      { id: 2, nama: 'Dr. Dewi', spesialisasi: 'Dokter Spesialis Penyakit Dalam', telepon: '08123456789', email: 'dr.dewi@rssehat.com' }
    ],
    organisasi: [
      { id: 1, nama: 'RS Sehat', alamat: 'Jl. Kesehatan No. 1', telepon: '02198765432', email: 'info@rssehat.com' }
    ],
    lokasi: [
      { id: 1, nama: 'Ruangan A', alamat: 'Lantai 1, RS Sehat', id_organisasi: 1 },
      { id: 2, nama: 'IGD', alamat: 'Lantai Dasar, RS Sehat', id_organisasi: 1 }
    ],
    janji_temu: [
      { id: 1, id_pasien: 1, id_praktisi: 1, id_lokasi: 1, tanggal_waktu: '2024-05-20 09:00:00' },
      { id: 2, id_pasien: 2, id_praktisi: 2, id_lokasi: 2, tanggal_waktu: '2024-05-21 10:00:00' }
    ],
    kunjungan: [
      { id: 1, id_pasien: 1, id_praktisi: 1, id_lokasi: 1, tanggal_waktu_mulai: '2024-05-20 09:00:00', tanggal_waktu_selesai: '2024-05-20 10:00:00' },
      { id: 2, id_pasien: 2, id_praktisi: 2, id_lokasi: 2, tanggal_waktu_mulai: '2024-05-21 10:00:00', tanggal_waktu_selesai: '2024-05-21 11:00:00' }
    ],
    alergi_intoleransi: [
      { id: 1, id_pasien: 1, deskripsi: 'Alergi terhadap obat penicillin.' },
      { id: 2, id_pasien: 2, deskripsi: 'Alergi terhadap seafood.' }
    ],
    kondisi: [
      { id: 1, id_pasien: 1, deskripsi: 'Hipertensi stadium 2.' },
      { id: 2, id_pasien: 2, deskripsi: 'Asma akut.' }
    ],
    prosedur: [
      { id: 1, id_kunjungan: 1, deskripsi: 'Pemeriksaan fisik umum.' },
      { id: 2, id_kunjungan: 2, deskripsi: 'Pemeriksaan darah rutin.' }
    ],
    impresi_klinis: [
      { id: 1, id_kunjungan: 1, deskripsi: 'Pasien mengalami hipertensi.' },
      { id: 2, id_kunjungan: 2, deskripsi: 'Pasien mengalami serangan asma akut.' }
    ],
    observasi: [
      { id: 1, id_kunjungan: 1, deskripsi: 'Tekanan darah sistolik tinggi.' },
      { id: 2, id_kunjungan: 2, deskripsi: 'Napas terengah-engah.' }
    ],
    laporan_diagnostik: [
      { id: 1, id_kunjungan: 1, deskripsi: 'Hasil tes darah: kadar kolesterol tinggi.' },
      { id: 2, id_kunjungan: 2, deskripsi: 'Spirometri menunjukkan fungsi paru terganggu.' }
    ],
    permintaan_obat: [
      { id: 1, id_pasien: 1, deskripsi: 'Resep obat penurun tekanan darah.' },
      { id: 2, id_pasien: 2, deskripsi: 'Resep obat bronkodilator.' }
    ],
    distribusi_obat: [
      { id: 1, id_permintaan_obat: 1, deskripsi: 'Amlodipine 5 mg, 1 tablet, 1x sehari.' },
      { id: 2, id_permintaan_obat: 2, deskripsi: 'Salbutamol inhaler, 2 kali semprot setiap 4 jam.' }
    ],
    obat: [
      { id: 1, nama: 'Amlodipine', deskripsi: 'Obat untuk menurunkan tekanan darah.' },
      { id: 2, nama: 'Salbutamol', deskripsi: 'Obat bronkodilator untuk asma.' }
    ],
    permintaan_layanan: [
      { id: 1, id_pasien: 1, deskripsi: 'Rujukan ke dokter spesialis kardiologi.' },
      { id: 2, id_pasien: 2, deskripsi: 'Terapi oksigen untuk memudahkan pernapasan.' }
    ],
    klaim: [
      { id: 1, id_kunjungan: 1, total_biaya: 500000, status: 'Diajukan' },
      { id: 2, id_kunjungan: 2, total_biaya: 600000, status: 'Diajukan' }
    ],
    faktur: [
      { id: 1, id_klaim: 1, tanggal_waktu: '2024-05-20 10:30:00', total_biaya: 500000 },
      { id: 2, id_klaim: 2, tanggal_waktu: '2024-05-21 11:30:00', total_biaya: 600000 }
    ]
  };
  