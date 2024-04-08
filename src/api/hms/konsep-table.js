/* 
Composition
Patient
Practitioner
PractitionerRole
RelatedPerson
Organization
HealthcareService
Location
Appointment
AppointmentResponse
Slot
Encounter
EpisodeOfCare
AllergyIntolerance
Condition
Procedure
FamilyMemberHistory
ClinicalImpression
Observation
DiagnosticReport
Specimen
ImagingStudy
QuestionnaireResponse
MedicationRequest
MedicationAdministration
Medication
Immunization
CarePlan
ServiceRequest
*/

const db = {
    pasien: [
        { id: 1, nama: "Ani", jenis_kelamin: "Perempuan", tanggal_lahir: "1990-05-15", alamat: "Jl. Merdeka No. 10" },
        { id: 2, nama: "Budi", jenis_kelamin: "Laki-laki", tanggal_lahir: "1985-10-20", alamat: "Jl. Pahlawan No. 25" },
    ],
    praktisi: [
        { id: 1, nama: "Dr. Indra", spesialisasi: "Dokter Umum" },
        { id: 2, nama: "Dr. Siti", spesialisasi: "Dokter Gigi" },
    ],
    peran_praktisi: [
        { id: 1, id_praktisi: 1, peran: "Dokter Umum" },
        { id: 2, id_praktisi: 2, peran: "Dokter Gigi" },
    ],
    hubungan_keluarga: [
        { id: 1, id_pasien: 1, nama: "Bapak", hubungan: "Ayah" },
        { id: 2, id_pasien: 1, nama: "Ibu", hubungan: "Ibu" },
        { id: 3, id_pasien: 2, nama: "Saudara", hubungan: "Saudara Kandung" },
    ],
    organisasi: [
        { id: 1, nama: "Rumah Sakit ABC", tipe: "Rumah Sakit" },
        { id: 2, nama: "Klinik XYZ", tipe: "Klinik" },
    ],
    layanan_kesehatan: [
        { id: 1, nama: "Poli Umum", deskripsi: "Pemeriksaan umum oleh dokter umum" },
        { id: 2, nama: "Poli Gigi", deskripsi: "Pemeriksaan gigi oleh dokter gigi" },
    ],
    lokasi: [
        { id: 1, id_organisasi: 1, nama: "Poli Umum RS ABC", alamat: "Jl. Medan Merdeka No. 1", kota: "Jakarta", provinsi: "DKI Jakarta", negara: "Indonesia", kode_pos: "10110" },
        { id: 2, id_organisasi: 1, nama: "Poli Gigi RS ABC", alamat: "Jl. Medan Merdeka No. 1", kota: "Jakarta", provinsi: "DKI Jakarta", negara: "Indonesia", kode_pos: "10110" },
    ],
    janji_temu: [
        { id: 1, id_pasien: 1, id_praktisi: 1, tanggal_mulai_waktu: "2024-04-10 09:00:00", tanggal_selesai_waktu: "2024-04-10 10:00:00", status: "Scheduled" },
        { id: 2, id_pasien: 2, id_praktisi: 2, tanggal_mulai_waktu: "2024-04-11 10:00:00", tanggal_selesai_waktu: "2024-04-11 11:00:00", status: "Scheduled" },
    ],
    respon_janji_temu: [
        { id: 1, id_janji_temu: 1, id_partisipan: 1, status_respon: "Accepted" },
        { id: 2, id_janji_temu: 2, id_partisipan: 2, status_respon: "Accepted" },
    ],
    slot: [
        { id: 1, id_layanan_kesehatan: 1, tanggal_mulai_waktu: "2024-04-10 09:00:00", tanggal_selesai_waktu: "2024-04-10 10:00:00", status: "Available" },
        { id: 2, id_layanan_kesehatan: 2, tanggal_mulai_waktu: "2024-04-11 10:00:00", tanggal_selesai_waktu: "2024-04-11 11:00:00", status: "Available" },
    ],
    pertemuan: [
        { id: 1, id_pasien: 1, id_praktisi: 1, id_lokasi: 1, tanggal_mulai_waktu: "2024-04-10 09:00:00", tanggal_selesai_waktu: "2024-04-10 10:00:00", status: "Confirmed" },
        { id: 2, id_pasien: 2, id_praktisi: 2, id_lokasi: 2, tanggal_mulai_waktu: "2024-04-11 10:00:00", tanggal_selesai_waktu: "2024-04-11 11:00:00", status: "Confirmed" },
    ],
    episode_perawatan: [
        { id: 1, id_pasien: 1, tanggal_mulai: "2024-04-01", tanggal_selesai: "2024-04-30" },
        { id: 2, id_pasien: 2, tanggal_mulai: "2024-04-05", tanggal_selesai: "2024-04-25" },
    ],
    alergi_intoleransi: [
        { id: 1, id_pasien: 1, zat: "Aspirin", reaksi: "Ruam kulit" },
        { id: 2, id_pasien: 2, zat: "Amoksisilin", reaksi: "Mual dan muntah" },
    ],
    kondisi: [
        { id: 1, id_pertemuan: 1, deskripsi: "Flu" },
        { id: 2, id_pertemuan: 2, deskripsi: "Sakit gigi" },
    ],
    prosedur: [
        { id: 1, id_pertemuan: 1, deskripsi: "Pemeriksaan fisik umum" },
        { id: 2, id_pertemuan: 2, deskripsi: "Penambalan gigi" },
    ],
    riwayat_kesehatan_keluarga: [
        { id: 1, id_pasien: 1, nama_anggota_keluarga: "Bapak", hubungan: "Ayah", kondisi_kesehatan: "Hipertensi" },
        { id: 2, id_pasien: 1, nama_anggota_keluarga: "Ibu", hubungan: "Ibu", kondisi_kesehatan: "Diabetes" },
        { id: 3, id_pasien: 2, nama_anggota_keluarga: "Saudara", hubungan: "Saudara Kandung", kondisi_kesehatan: "Asma" },
    ],
    kesan_klinis: [
        { id: 1, id_pertemuan: 1, deskripsi: "Infeksi saluran pernapasan akut" },
        { id: 2, id_pertemuan: 2, deskripsi: "Karies gigi" },
    ],
    observasi: [
        { id: 1, id_pertemuan: 1, deskripsi: "Tekanan darah: 120/80 mmHg" },
        { id: 2, id_pertemuan: 2, deskripsi: "Tingkat nyeri: 3/10" },
    ],
    laporan_diagnostik: [
        { id: 1, id_pertemuan: 1, deskripsi: "Rontgen dada normal" },
        { id: 2, id_pertemuan: 2, deskripsi: "Pemeriksaan darah rutin: Normal" },
    ],
    spesimen: [
        { id: 1, id_pertemuan: 1, deskripsi: "Darah lengkap" },
        { id: 2, id_pertemuan: 2, deskripsi: "Sputum" },
    ],
    pencitraan: [
        { id: 1, id_pertemuan: 1, deskripsi: "CT scan kepala normal" },
        { id: 2, id_pertemuan: 2, deskripsi: "Rontgen gigi menunjukkan karies" },
    ],
    respon_kuesioner: [
        { id: 1, id_pasien: 1, id_kuesioner: 1, data_respon: "Baik" },
        { id: 2, id_pasien: 2, id_kuesioner: 1, data_respon: "Cukup baik" },
    ],
    permintaan_obat: [
        { id: 1, id_pasien: 1, jenis_obat: "Parasetamol", tanggal_permintaan: "2024-04-10 08:00:00" },
        { id: 2, id_pasien: 2, jenis_obat: "Amoksisilin", tanggal_permintaan: "2024-04-11 09:00:00" },
    ],
    obat: [
        { id: 1, nama: "Parasetamol", bentuk_dosis: "Tablet", kekuatan: "500 mg", satuan: "Tablet" },
        { id: 2, nama: "Amoksisilin", bentuk_dosis: "Kapsul", kekuatan: "250 mg", satuan: "Kapsul" },
    ],
    administrasi_obat: [
        { id: 1, id_pertemuan: 1, id_obat: 1, tanggal_administrasi: "2024-04-10 09:30:00" },
        { id: 2, id_pertemuan: 2, id_obat: 2, tanggal_administrasi: "2024-04-11 10:30:00" },
    ],
    imunisasi: [
        { id: 1, id_pasien: 1, vaksin: "Hepatitis B", tanggal_pemberian: "2024-04-10" },
        { id: 2, id_pasien: 2, vaksin: "Influenza", tanggal_pemberian: "2024-04-11" },
    ],
    rencana_perawatan: [
        { id: 1, id_pasien: 1, deskripsi_rencana: "Istirahat dan minum obat", status: "Aktif" },
        { id: 2, id_pasien: 2, deskripsi_rencana: "Pemeriksaan lanjutan", status: "Aktif" },
    ],
    permintaan_layanan: [
        { id: 1, id_pasien: 1, jenis_layanan: "Tes Darah", tanggal_permintaan: "2024-04-10 08:00:00" },
        { id: 2, id_pasien: 2, jenis_layanan: "Rontgen Gigi", tanggal_permintaan: "2024-04-11 09:00:00" },
    ],
    komposisi: [
        { id: 1, id_pasien: 1, judul: "Ringkasan Konsultasi", teks: "Pasien mengeluh sakit kepala dan demam. Dokter meresepkan obat paracetamol." },
        { id: 2, id_pasien: 2, judul: "Hasil Pemeriksaan Gigi", teks: "Dokter gigi menemukan karies pada gigi pasien dan merencanakan tindakan penambalan." },
    ],
};
