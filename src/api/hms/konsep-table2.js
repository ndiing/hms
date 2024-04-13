/* 
1 Patient
2 Practitioner
3 PractitionerRole
4 Organization
5 RelatedPerson
6 Location
7 HealthcareService
8 Slot
9 Appointment
10 AppointmentResponse
11 Encounter
12 EpisodeOfCare
13 AllergyIntolerance
14 Condition
15 Procedure
16 FamilyMemberHistory
17 ClinicalImpression
18 Observation
19 DiagnosticReport
20 Specimen
21 ImagingStudy
22 QuestionnaireResponse
23 MedicationRequest
24 MedicationDispense
25 Medication
26 Immunization
27 CarePlan
28 ServiceRequest
29 Composition
*/

const db = {
    Patient: [
        { id: 1, active: true, name: "Budi" },
        { id: 2, active: true, name: "Ani" },
        { id: 3, active: false, name: "Citra" },
    ],
    RelatedPerson: [
        { id: 1, patient_id: 1, name: "Adi", relationship: "Saudara Kandung" },
        { id: 2, patient_id: 2, name: "Dina", relationship: "Orang Tua" },
        { id: 3, patient_id: 3, name: "Eka", relationship: "Saudari Kandung" },
    ],
    Practitioner: [
        { id: 1, name: "Dr. Andi" },
        { id: 2, name: "Dr. Lina" },
        { id: 3, name: "Dr. Candra" },
    ],
    Organization: [
        { id: 1, name: "Rumah Sakit ABC" },
        { id: 2, name: "Klinik XYZ" },
    ],
    PractitionerRole: [
        { id: 1, practitioner_id: 1, organization_id: 1, code: "Dokter Umum" },
        { id: 2, practitioner_id: 2, organization_id: 2, code: "Dokter Gigi" },
        { id: 3, practitioner_id: 3, organization_id: 1, code: "Dokter Bedah" },
    ],
    Location: [
        { id: 1, name: "Poli Umum" },
        { id: 2, name: "Poli Gigi" },
        { id: 3, name: "Poli Bedah" },
    ],
    HealthcareService: [
        { id: 1, name: "Poli Umum", type: "Ambulatori", organization_id: 1 },
        { id: 2, name: "Poli Gigi", type: "Ambulatori", organization_id: 2 },
        { id: 3, name: "Poli Bedah", type: "Ambulatori", organization_id: 1 },
    ],
    Appointment: [
        { id: 1, encounter_id: 1, status: "Scheduled", appointedTime: "2024-04-15 08:00:00" },
        { id: 2, encounter_id: 2, status: "Completed", appointedTime: "2024-04-16 09:30:00" },
        { id: 3, encounter_id: 3, status: "Cancelled", appointedTime: "2024-04-17 10:45:00" },
    ],
    AppointmentResponse: [
        { id: 1, appointment_id: 1, response: "Accepted" },
        { id: 2, appointment_id: 2, response: "Accepted" },
        { id: 3, appointment_id: 3, response: "Declined" },
    ],
    Slot: [
        { id: 1, status: "Free", schedule_id: 1, start: "2024-04-15 08:00:00", end: "2024-04-15 09:00:00" },
        { id: 2, status: "Booked", schedule_id: 2, start: "2024-04-16 09:30:00", end: "2024-04-16 10:30:00" },
        { id: 3, status: "Free", schedule_id: 3, start: "2024-04-17 10:45:00", end: "2024-04-17 11:45:00" },
    ],
    Encounter: [
        { id: 1, practitioner_id: 1, patient_id: 1, period: "2024-04-15 08:00:00" },
        { id: 2, practitioner_id: 2, patient_id: 2, period: "2024-04-16 09:30:00" },
        { id: 3, practitioner_id: 3, patient_id: 3, period: "2024-04-17 10:45:00" },
    ],
    EpisodeOfCare: [
        { id: 1, patient_id: 1, status: "Active", type: "Outpatient" },
        { id: 2, patient_id: 2, status: "Closed", type: "Outpatient" },
        { id: 3, patient_id: 3, status: "Active", type: "Outpatient" },
    ],
    Condition: [
        { id: 1, encounter_id: 1, code: "Demam" },
        { id: 2, encounter_id: 2, code: "Sakit Gigi" },
        { id: 3, encounter_id: 3, code: "Patah Tulang" },
    ],
    AllergyIntolerance: [
        { id: 1, patient_id: 1, code: "Polusi Udara" },
        { id: 2, patient_id: 2, code: "Obat Penicillin" },
        { id: 3, patient_id: 3, code: "Kacang" },
    ],
    Procedure: [
        { id: 1, encounter_id: 1, code: "Operasi Amandel" },
        { id: 2, encounter_id: 2, code: "Cabut Gigi" },
        { id: 3, encounter_id: 3, code: "Pemasangan Balutan" },
    ],
    FamilyMemberHistory: [
        { id: 1, patient_id: 1, code: "Hipertensi", relationship: "Ibu" },
        { id: 2, patient_id: 2, code: "Diabetes", relationship: "Ayah" },
        { id: 3, patient_id: 3, code: "Asma", relationship: "Saudara Laki-laki" },
    ],
    ClinicalImpression: [
        { id: 1, encounter_id: 1, status: "Final", date: "2024-04-15", finding: "Amandel Bengkak" },
        { id: 2, encounter_id: 2, status: "Draft", date: "2024-04-16", finding: "Karies" },
        { id: 3, encounter_id: 3, status: "Final", date: "2024-04-17", finding: "Patah Tulang" },
    ],
    Observation: [
        { id: 1, encounter_id: 1, code: "Suhu Tubuh", value: 38.5 },
        { id: 2, encounter_id: 2, code: "Tingkat Kerusakan Gigi", value: 3 },
        { id: 3, encounter_id: 3, code: "Tingkat Nyeri", value: 7.5 },
    ],
    DiagnosticReport: [
        { id: 1, encounter_id: 1, issued: "2024-04-15", code: "Tes Darah" },
        { id: 2, encounter_id: 2, issued: "2024-04-16", code: "Rontgen Gigi" },
        { id: 3, encounter_id: 3, issued: "2024-04-17", code: "Rontgen" },
    ],
    Specimen: [
        { id: 1, encounter_id: 1, accession: "BS001", collection: "2024-04-15 09:00:00" },
        { id: 2, encounter_id: 2, accession: "DX001", collection: "2024-04-16 10:30:00" },
        { id: 3, encounter_id: 3, accession: "XR001", collection: "2024-04-17 11:45:00" },
    ],
    ImagingStudy: [
        { id: 1, encounter_id: 1, modality: "Rontgen", started: "2024-04-15 09:00:00" },
        { id: 2, encounter_id: 2, modality: "CT Scan", started: "2024-04-16 10:30:00" },
        { id: 3, encounter_id: 3, modality: "MRI", started: "2024-04-17 11:45:00" },
    ],
    QuestionnaireResponse: [
        { id: 1, encounter_id: 1, questionnaire: "Kuesioner Kepuasan Pasien", status: "Completed" },
        { id: 2, encounter_id: 2, questionnaire: "Kuesioner Kesehatan Gigi", status: "In Progress" },
        { id: 3, encounter_id: 3, questionnaire: "Kuesioner Cedera", status: "Completed" },
    ],
    MedicationRequest: [
        { id: 1, encounter_id: 1, patient_id: 1, medication: "Paracetamol", dosageInstruction: "Minum 1 tablet setiap 6 jam" },
        { id: 2, encounter_id: 2, patient_id: 2, medication: "Amoxicillin", dosageInstruction: "Minum 1 kapsul tiga kali sehari selama 7 hari" },
        { id: 3, encounter_id: 3, patient_id: 3, medication: "Ibuprofen", dosageInstruction: "Minum 1 tablet setiap 8 jam untuk mengurangi nyeri" },
    ],
    MedicationAdministration: [
        { id: 1, encounter_id: 1, patient_id: 1, medication: "Paracetamol", wasNotGiven: false, effectiveTime: "2024-04-15 09:00:00" },
        { id: 2, encounter_id: 2, patient_id: 2, medication: "Amoxicillin", wasNotGiven: false, effectiveTime: "2024-04-16 10:30:00" },
        { id: 3, encounter_id: 3, patient_id: 3, medication: "Ibuprofen", wasNotGiven: false, effectiveTime: "2024-04-17 11:45:00" },
    ],
    Medication: [
        { id: 1, code: "PAR001", product: "Paracetamol" },
        { id: 2, code: "AMX001", product: "Amoxicillin" },
        { id: 3, code: "IBU001", product: "Ibuprofen" },
    ],
    Immunization: [
        { id: 1, encounter_id: 1, patient_id: 1, vaccineCode: "Vaksin Influenza", administered: true },
        { id: 2, encounter_id: 2, patient_id: 2, vaccineCode: "Vaksin Hepatitis B", administered: true },
        { id: 3, encounter_id: 3, patient_id: 3, vaccineCode: "Vaksin Campak, Gondongan, dan Rubella", administered: true },
    ],
    CarePlan: [
        { id: 1, encounter_id: 1, patient_id: 1, category: "Manajemen Nyeri" },
        { id: 2, encounter_id: 2, patient_id: 2, category: "Perawatan Gigi" },
        { id: 3, encounter_id: 3, patient_id: 3, category: "Perawatan Patah Tulang" },
    ],
    ServiceRequest: [
        { id: 1, encounter_id: 1, patient_id: 1, code: "Terapi Fisik" },
        { id: 2, encounter_id: 2, patient_id: 2, code: "Cabut Gigi" },
        { id: 3, encounter_id: 3, patient_id: 3, code: "Konsultasi Ortopedi" },
    ],
    Composition: [
        { id: 1, encounter_id: 1, status: "Final", type: "Ringkasan Pulang", patient_id: 1, date: "2024-04-15" },
        { id: 2, encounter_id: 2, status: "Draft", type: "Catatan Gigi", patient_id: 2, date: "2024-04-16" },
        { id: 3, encounter_id: 3, status: "Final", type: "Laporan Cedera", patient_id: 3, date: "2024-04-17" },
    ],
};
