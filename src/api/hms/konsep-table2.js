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
    Patient: [
        { id: 1, name: "Ani" },
        { id: 2, name: "Budi" },
    ],
    Practitioner: [
        { id: 1, name: "Dr. Indra" },
        { id: 2, name: "Dr. Siti" },
    ],
    PractitionerRole: [
        { id: 1, Practitioner_id: 1, specialty: "Dokter Umum" },
        { id: 2, Practitioner_id: 2, specialty: "Dokter Gigi" },
    ],
    RelatedPerson: [
        { id: 1, Patient_id: 1, name: "Bapak", relationship: "Ayah" },
        { id: 2, Patient_id: 1, name: "Ibu", relationship: "Ibu" },
        { id: 3, Patient_id: 2, name: "Saudara", relationship: "Saudara Kandung" },
    ],
    Organization: [
        { id: 1, name: "Rumah Sakit ABC", type: "Rumah Sakit" },
        { id: 2, name: "Klinik XYZ", type: "Klinik" },
    ],
    HealthcareService: [
        { id: 1, name: "Poli Umum", type: "Pemeriksaan umum oleh dokter umum" },
        { id: 2, name: "Poli Gigi", type: "Pemeriksaan gigi oleh dokter gigi" },
    ],
    Location: [
        { id: 1, Organization_id: 1, name: "Poli Umum RS ABC",  },
        { id: 2, Organization_id: 1, name: "Poli Gigi RS ABC",  },
    ],
    Appointment: [
        { id: 1, Patient_id: 1, Practitioner_id: 1, start: "2024-04-10 09:00:00", end: "2024-04-10 10:00:00", status: "Scheduled" },
        { id: 2, Patient_id: 2, Practitioner_id: 2, start: "2024-04-11 10:00:00", end: "2024-04-11 11:00:00", status: "Scheduled" },
    ],
    AppointmentResponse: [
        { id: 1, Appointment_id: 1, participantStatus: "Accepted" },
        { id: 2, Appointment_id: 2, participantStatus: "Accepted" },
    ],
    Slot: [
        { id: 1, HealthcareService_id: 1, start: "2024-04-10 09:00:00", end: "2024-04-10 10:00:00", status: "Available" },
        { id: 2, HealthcareService_id: 2, start: "2024-04-11 10:00:00", end: "2024-04-11 11:00:00", status: "Available" },
    ],
    Encounter: [
        { id: 1, Patient_id: 1, Practitioner_id: 1, Location_id: 1, plannedStartDate: "2024-04-10 09:00:00", plannedEndDate: "2024-04-10 10:00:00", status: "Confirmed" },
        { id: 2, Patient_id: 2, Practitioner_id: 2, Location_id: 2, plannedStartDate: "2024-04-11 10:00:00", plannedEndDate: "2024-04-11 11:00:00", status: "Confirmed" },
    ],
    EpisodeOfCare: [
        { id: 1, Patient_id: 1, Practitioner_id: 1, status: "Confirmed" },
        { id: 2, Patient_id: 2, Practitioner_id: 1, status: "Confirmed" },
    ],
    AllergyIntolerance: [
        { id: 1, Encounter_id: 1, reaction: "Ruam kulit" },
        { id: 2, Encounter_id: 1, reaction: "Mual dan muntah" },
    ],
    Condition: [
        { id: 1, Encounter_id: 1, note: "Flu" },
        { id: 2, Encounter_id: 2, note: "Sakit gigi" },
    ],
    Procedure: [
        { id: 1, Encounter_id: 1, note: "Pemeriksaan fisik umum" },
        { id: 2, Encounter_id: 2, note: "Penambalan gigi" },
    ],
    // 
    FamilyMemberHistory: [
        { id: 1, Patient_id: 1, name_anggota_keluarga: "Bapak", hubungan: "Ayah", Condition_kesehatan: "Hipertensi" },
        { id: 2, Patient_id: 1, name_anggota_keluarga: "Ibu", hubungan: "Ibu", Condition_kesehatan: "Diabetes" },
        { id: 3, Patient_id: 2, name_anggota_keluarga: "Saudara", hubungan: "Saudara Kandung", Condition_kesehatan: "Asma" },
    ],
    ClinicalImpression: [
        { id: 1, Encounter_id: 1, note: "Infeksi saluran pernapasan akut" },
        { id: 2, Encounter_id: 2, note: "Karies gigi" },
    ],
    Observation: [
        { id: 1, Encounter_id: 1, note: "Tekanan darah: 120/80 mmHg" },
        { id: 2, Encounter_id: 2, note: "Tingkat nyeri: 3/10" },
    ],
    DiagnosticReport: [
        { id: 1, Encounter_id: 1, note: "Rontgen dada normal" },
        { id: 2, Encounter_id: 2, note: "Pemeriksaan darah rutin: Normal" },
    ],
    Specimen: [
        { id: 1, Encounter_id: 1, note: "Darah lengkap" },
        { id: 2, Encounter_id: 2, note: "Sputum" },
    ],
    ImagingStudy: [
        { id: 1, Encounter_id: 1, note: "CT scan kepala normal" },
        { id: 2, Encounter_id: 2, note: "Rontgen gigi menunjukkan karies" },
    ],
    QuestionnaireResponse: [
        { id: 1, Patient_id: 1, kuesioner_id: 1, data_respon: "Baik" },
        { id: 2, Patient_id: 2, kuesioner_id: 1, data_respon: "Cukup baik" },
    ],
    MedicationRequest: [
        { id: 1, Patient_id: 1, jenis_Medication: "Parasetamol", tanggal_permintaan: "2024-04-10 08:00:00" },
        { id: 2, Patient_id: 2, jenis_Medication: "Amoksisilin", tanggal_permintaan: "2024-04-11 09:00:00" },
    ],
    Medication: [
        { id: 1, name: "Parasetamol", bentuk_dosis: "Tablet", kekuatan: "500 mg", satuan: "Tablet" },
        { id: 2, name: "Amoksisilin", bentuk_dosis: "Kapsul", kekuatan: "250 mg", satuan: "Kapsul" },
    ],
    MedicationAdministration: [
        { id: 1, Encounter_id: 1, Medication_id: 1, tanggal_administrasi: "2024-04-10 09:30:00" },
        { id: 2, Encounter_id: 2, Medication_id: 2, tanggal_administrasi: "2024-04-11 10:30:00" },
    ],
    Immunization: [
        { id: 1, Patient_id: 1, vaksin: "Hepatitis B", tanggal_pemberian: "2024-04-10" },
        { id: 2, Patient_id: 2, vaksin: "Influenza", tanggal_pemberian: "2024-04-11" },
    ],
    CarePlan: [
        { id: 1, Patient_id: 1, note_rencana: "Istirahat dan minum Medication", status: "Aktif" },
        { id: 2, Patient_id: 2, note_rencana: "Pemeriksaan lanjutan", status: "Aktif" },
    ],
    ServiceRequest: [
        { id: 1, Patient_id: 1, jenis_layanan: "Tes Darah", tanggal_permintaan: "2024-04-10 08:00:00" },
        { id: 2, Patient_id: 2, jenis_layanan: "Rontgen Gigi", tanggal_permintaan: "2024-04-11 09:00:00" },
    ],
    Composition: [
        { id: 1, Patient_id: 1, judul: "Ringkasan Konsultasi", teks: "Patient mengeluh sakit kepala dan demam. Dokter meresepkan Medication paracetamol." },
        { id: 2, Patient_id: 2, judul: "Hasil Pemeriksaan Gigi", teks: "Dokter gigi menemukan karies pada gigi Patient dan merencanakan tindakan penambalan." },
    ],
};

