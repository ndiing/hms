/* 
// 1 Composition
// 2 Patient
// 3 Practitioner
// 4 PractitionerRole
// 5 RelatedPerson
// 6 Organization
// 7 HealthcareService
// 8 Location
// 9 Appointment
// 10 AppointmentResponse
// 11 Slot
// 12 Encounter
// 13 EpisodeOfCare
// 14 AllergyIntolerance
// 15 Condition
// 16 Procedure
// 17 FamilyMemberHistory
// 18 ClinicalImpression
// 19 Observation
// 20 DiagnosticReport
// 21 Specimen
// 22 ImagingStudy
// 23 QuestionnaireResponse
// 24 MedicationRequest
// 25 MedicationAdministration
// 26 Medication
// 27 Immunization
// 28 CarePlan
// 29 ServiceRequest
*/

/* 
Patient: Core entity representing individuals receiving care.
RelatedPerson: Individuals with a relationship to a Patient (optional after Patient).
Practitioner: Individuals providing healthcare services.
Organization: Institutions where Practitioners work (optional after Practitioner).
PractitionerRole: Defines a Practitioner's role and affiliation within an Organization (optional after Organization and Practitioner).
Location: Physical locations where healthcare services are delivered.
HealthcareService: Services offered by an Organization or Practitioner (optional after Location, Organization).
Appointment: Scheduled meetings between Patient and Practitioner (optional after Location, Patient, Practitioner).
AppointmentResponse: Patient's response to an Appointment (optional after Appointment).
Slot: Blocks of time available for Appointments (optional after Location, HealthcareService).
Encounter: Instances of healthcare interactions between Patient and Practitioner (after Location, Patient, Practitioner).
EpisodeOfCare: Planned or ongoing periods of healthcare for a condition (optional after Encounter, Patient).
Condition: Health problems identified in a Patient (optional after Encounter, Patient).
AllergyIntolerance: Allergies or intolerances a Patient has (optional after Encounter, Patient).
Procedure: Healthcare interventions performed on a Patient (optional after Encounter, Patient).
FamilyMemberHistory: History of health conditions in a Patient's family (optional after Patient).
ClinicalImpression: Clinician's assessment of a Patient's condition (optional after Encounter, Patient).
Observation: Measurements and other assessments of a Patient's health (optional after Encounter, Patient).
DiagnosticReport: Analyses of Patient data to identify a condition (optional after Observation).
Specimen: Biological samples for analysis (optional after Encounter, Procedure).
ImagingStudy: Images used for diagnostic purposes (optional after Encounter, Procedure).
QuestionnaireResponse: Patient's answers to questionnaires (optional after Encounter, Patient).
MedicationRequest: Orders for medications to be administered to a Patient (optional after Encounter, Patient).
MedicationAdministration: Recording of medication administration to a Patient (optional after Encounter, MedicationRequest, Patient).
Medication: Description of a medication (optional after MedicationRequest).
Immunization: Administration of vaccines to a Patient (optional after Encounter, Patient).
CarePlan: Plans for providing healthcare to a Patient (optional after Encounter, Patient).
ServiceRequest: Requests for specific services to be performed on a Patient (optional after Encounter, Patient).
Composition: Documents that summarize healthcare information (optional after various resource types like Encounter, Observation).
*/

/* 

Patient
id: Identifier: unik untuk pasien di dalam sistem Anda.
active: boolean: yang menunjukkan apakah pasien masih aktif terdaftar (true) atau tidak (false).

Practitioner
id: Identifier: unik untuk tenaga medis di dalam sistem Anda.
name: HumanName: lengkap tenaga medis.

Organization
id: Identifier: unik untuk organisasi di dalam sistem Anda.
name: String: nama organisasi.

Location
id: Identifier: unik untuk lokasi di dalam sistem Anda.
name: String: nama lokasi (misalnya, ruang rawat inap, ruang periksa).

Encounter
id: Identifier: unik untuk encounter pasien di dalam sistem Anda.
subject: Reference: yang merujuk ke resource Patient.
period: Period: waktu encounter berlangsung.

Condition
id: Identifier: unik untuk kondisi pasien di dalam sistem Anda.
subject: Reference: yang merujuk ke resource Patient.
code: CodeableConcept: yang menunjukkan diagnosis atau masalah kesehatan pasien.

Procedure
id: Identifier: unik untuk prosedur yang dilakukan pada pasien di dalam sistem Anda.
subject: Reference: yang merujuk ke resource Patient.
code: CodeableConcept: yang menunjukkan jenis prosedur yang dilakukan.

Observation
id: Identifier: unik untuk observasi pasien di dalam sistem Anda.
subject: Reference: yang merujuk ke resource Patient.
code: CodeableConcept: yang menunjukkan jenis observasi yang dilakukan (misalnya, tekanan darah, suhu).
value: Quantity: atau CodeableConcept: tergantung pada hasil observasi.

AllergyIntolerance
id: Identifier: https://www.hl7.org/fhir/ unik untuk alergi atau intoleransi pasien di dalam sistem Anda.
patient: Reference: https://www.hl7.org/fhir/ yang merujuk ke resource Patient.
code: CodeableConcept: https://build.fhir.org/datatypes.html yang menunjukkan substansi yang menyebabkan alergi atau intoleransi.

DiagnosticReport
id: Identifier: https://www.hl7.org/fhir/ unik untuk laporan diagnostik pasien di dalam sistem Anda.
subject: Reference: https://www.hl7.org/fhir/ yang merujuk ke resource Patient.
issued: dateTime: https://build.fhir.org/datatypes.html tanggal dan waktu laporan diagnostik dibuat.
code: CodeableConcept: https://build.fhir.org/datatypes.html yang menunjukkan jenis laporan diagnostik (misalnya, rontgen dada, biopsi).

MedicationRequest
id: Identifier: https://www.hl7.org/fhir/ unik untuk permintaan medication untuk pasien di dalam sistem Anda.
subject: Reference: https://www.hl7.org/fhir/ yang merujuk ke resource Patient.
medication: Reference: https://www.hl7.org/fhir/ yang merujuk ke resource Medication.
dosageInstruction: DosageInstruction: https://build.fhir.org/dosage.html instruksi rinci tentang bagaimana medication harus diberikan.

MedicationAdministration
id: Identifier: https://www.hl7.org/fhir/ unik untuk pemberian medication tertentu kepada pasien di dalam sistem Anda.
subject: Reference: https://www.hl7.org/fhir/ yang merujuk ke resource Patient.
medication: Reference: https://www.hl7.org/fhir/ yang merujuk ke resource Medication.
wasNotGiven: boolean: https://hl7.org/fhir/us/core/STU5/general-guidance.html (opsional) menunjukkan apakah medication tidak diberikan kepada pasien (true) atau diberikan (false).
effectiveTime: dateTime: https://build.fhir.org/datatypes.html (jika wasNotGiven=false) waktu medication diberikan kepada pasien.

Medication
id: Identifier: https://www.hl7.org/fhir/ unik untuk medication di dalam sistem Anda.
code: CodeableConcept: https://build.fhir.org/datatypes.html yang menunjukkan kode produk medication.
product: Medication.Product: https://www.hl7.org/fhir/medication.html informasi detail tentang medication, termasuk nama dan bentuk sediaan.

Appointment
id: Identifier: Pengenal unik untuk janji temu dalam sistem Anda.
status: CodeableConcept: Status janji temu (misalnya, "scheduled", "cancelled", "completed").
patient: Reference: Referensi ke resource Patient yang terkait dengan janji temu.
appointedTime: dateTime: Tanggal dan waktu janji temu.

AppointmentResponse
id: Identifier: Pengenal unik untuk respons janji temu dalam sistem Anda.
appointment: Reference: Referensi ke resource Appointment yang terkait dengan respons.
response: CodeableConcept: Status respons pasien terhadap janji temu (misalnya, "accepted", "declined", "tentative").

Slot
id: Identifier: Pengenal unik untuk slot waktu dalam jadwal.
status: CodeableConcept: Status slot waktu (misalnya, "open", "booked", "cancelled").
schedule: Reference: Referensi ke resource Schedule yang terkait dengan slot waktu.
start: dateTime: Waktu mulai slot waktu.
end: dateTime: Waktu akhir slot waktu.

Composition
id: Identifier: Pengenal unik untuk komposisi dalam sistem Anda.
status: CodeableConcept: Status komposisi (misalnya, "preliminary", "final", "amended").
type: CodeableConcept: Jenis komposisi (misalnya, "discharge summary", "progress note").
subject: Reference: Referensi ke resource Patient yang terkait dengan komposisi.
date: dateTime: Tanggal komposisi dibuat.

PractitionerRole
id: Identifier: Pengenal unik untuk peran praktisi dalam sistem Anda.
practitioner: Reference: Referensi ke resource Practitioner yang terkait dengan peran.
organization: Reference: Referensi ke resource Organization yang terkait dengan peran (jika ada).
code: CodeableConcept: Kode yang menunjukkan jenis peran praktisi (misalnya, "primary care physician", "surgeon").

RelatedPerson
id: Identifier: Pengenal unik untuk orang terkait dalam sistem Anda.
patient: Reference: Referensi ke resource Patient yang terkait dengan orang terkait (jika ada).
name: HumanName: Nama orang terkait.
relationship: CodeableConcept: Hubungan orang terkait dengan pasien (misalnya, "spouse", "parent").

HealthcareService
id: Identifier: Pengenal unik untuk layanan kesehatan dalam sistem Anda.
name: String: Nama layanan kesehatan.
type: CodeableConcept: Jenis layanan kesehatan (misalnya, "ambulatory care", "hospital care").
providedBy: Reference: Referensi ke resource Organization yang menyediakan layanan kesehatan.

EpisodeOfCare
id: Identifier: Pengenal unik untuk episode perawatan dalam sistem Anda.
patient: Reference: Referensi ke resource Patient yang terkait dengan episode perawatan.
status: CodeableConcept: Status episode perawatan (misalnya, "active", "on hold", "completed").
type: CodeableConcept: Jenis episode perawatan (misalnya, "inpatient", "outpatient").

FamilyMemberHistory
id: Identifier: Pengenal unik untuk riwayat keluarga dalam sistem Anda.
patient: Reference: Referensi ke resource Patient yang terkait dengan riwayat keluarga.
code: CodeableConcept: Kode yang menunjukkan kondisi yang diwariskan (misalnya, "heart disease", "diabetes").
relationship: CodeableConcept: Hubungan anggota keluarga dengan pasien (misalnya, "mother", "brother").

ClinicalImpression
id: Identifier: Pengenal unik untuk kesan klinis dalam sistem Anda.
subject: Reference: Referensi ke resource Patient yang terkait dengan kesan klinis.
status: CodeableConcept: Status kesan klinis (misalnya, "draft", "completed").
date: dateTime: Tanggal kesan klinis dibuat.
finding: CodeableConcept: Temuan klinis yang signifikan (opsional, tetapi penting).

Specimen
id: Identifier: Pengenal unik untuk spesimen dalam sistem Anda.
subject: Reference: Referensi ke resource Patient yang terkait dengan spesimen (opsional).
accession: Identifier: ID aksepsi spesimen di laboratorium (jika ada).
collection: Specimen.Collection: Detail tentang pengambilan spesimen, termasuk tanggal, waktu, dan lokasi.

ImagingStudy
id: Identifier: Pengenal unik untuk studi pencitraan dalam sistem Anda.
subject: Reference: Referensi ke resource Patient yang terkait dengan studi pencitraan.
modality: CodeableConcept: Modalitas pencitraan yang digunakan (misalnya, "X-ray", "CT scan").
started: dateTime: Tanggal dan waktu studi pencitraan dimulai.

QuestionnaireResponse
id: Identifier: Pengenal unik untuk jawaban kuesioner dalam sistem Anda.
subject: Reference: Referensi ke resource Patient yang mengisi kuesioner.
questionnaire: Reference: Referensi ke resource Questionnaire yang dijawab.
status: CodeableConcept: Status pengisian kuesioner (misalnya, "completed", "in progress").

Immunization
id: Identifier: Pengenal unik untuk imunisasi dalam sistem Anda.
patient: Reference: Referensi ke resource Patient yang menerima imunisasi.
vaccineCode: CodeableConcept: Kode yang menunjukkan jenis vaksin yang diberikan.
encounter: Reference: Referensi ke resource Encounter yang terkait dengan imunisasi (opsional).
administered: dateTime: Tanggal dan waktu imunisasi diberikan.

CarePlan
id: Identifier: Pengenal unik untuk rencana perawatan dalam sistem Anda.
subject: Reference: Referensi ke resource Patient yang terkait dengan rencana perawatan.
encounter: Reference: Referensi ke resource Encounter yang terkait dengan pembuatan rencana perawatan (opsional).
category: CodeableConcept: Kategori rencana perawatan (misalnya, "discharge plan", "transitional care plan").

ServiceRequest
id: Identifier: Pengenal unik untuk permintaan layanan dalam sistem Anda.
subject: Reference: Referensi ke resource Patient yang terkait dengan permintaan layanan.
code: CodeableConcept: Kode yang menunjukkan jenis layanan yang diminta.
encounter: Reference: Referensi ke resource Encounter yang terkait dengan permintaan layanan (opsional).

*/

// const db={}
// db.Patient = [{id, active}]
// db.Practitioner = [{id, name}]
// db.Organization = [{id, name}]
// db.Location = [{id, name}]
// db.Encounter = [{id, subject, period}]
// db.Condition = [{id, subject, code}]
// db.Procedure = [{id, subject, code}]
// db.Observation = [{id, subject, code, value}]
// db.AllergyIntolerance = [{id, patient, code}]
// db.DiagnosticReport = [{id, subject, issued, code}]
// db.MedicationRequest = [{id, subject, medication, dosageInstruction}]
// db.MedicationAdministration = [{id, subject, medication, wasNotGiven, effectiveTime}]
// db.Medication = [{id, code, product}]
// db.Appointment = [{id, status, patient, appointedTime}]
// db.AppointmentResponse = [{id, appointment, response}]
// db.Slot = [{id, status, schedule, start, end}]
// db.Composition = [{id, status, type, subject, date}]
// db.PractitionerRole = [{id, practitioner, organization, code}]
// db.RelatedPerson = [{id, patient, name, relationship}]
// db.HealthcareService = [{id, name, type, providedBy}]
// db.EpisodeOfCare = [{id, patient, status, type}]
// db.FamilyMemberHistory = [{id, patient, code, relationship}]
// db.ClinicalImpression = [{id, subject, status, date, finding}]
// db.Specimen = [{id, subject, accession, collection}]
// db.ImagingStudy = [{id, subject, modality, started}]
// db.QuestionnaireResponse = [{id, subject, questionnaire, status}]
// db.Immunization = [{id, patient, vaccineCode, encounter, administered}]
// db.CarePlan = [{id, subject, encounter, category}]
// db.ServiceRequest = [{id, subject, code, encounter}]

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
