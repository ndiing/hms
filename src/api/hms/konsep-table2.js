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
Patient
Practitioner
PractitionerRole
RelatedPerson
Organization
HealthcareService
Location
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
Appointment
AppointmentResponse
Slot
QuestionnaireResponse
MedicationRequest
MedicationAdministration
Medication
Immunization
CarePlan
ServiceRequest
Composition
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
        { id: 1, active: true, name: "John Doe" },
        { id: 2, active: true, name: "Jane Smith" },
        { id: 3, active: true, name: "Michael Johnson" },
    ],
    Practitioner: [
        { id: 1, name: "Dr. Alex Johnson" },
        { id: 2, name: "Dr. Emily Brown" },
    ],
    PractitionerRole: [
        { id: 1, practitioner_id: 1, organization_id: 1, code: "Primary Care Physician" },
        { id: 2, practitioner_id: 2, organization_id: 2, code: "Pediatrician" },
    ],
    RelatedPerson: [
        { id: 1, patient_id: 1, name: "Mary Doe", relationship: "Spouse" },
        { id: 2, patient_id: 2, name: "John Smith", relationship: "Parent" },
        { id: 3, patient_id: 3, name: "Emily Johnson", relationship: "Sibling" },
    ],
    Organization: [
        { id: 1, name: "General Hospital" },
        { id: 2, name: "Community Health Clinic" },
    ],
    HealthcareService: [
        { id: 1, name: "Emergency Department", type: "Emergency", organization_id: 1 },
        { id: 2, name: "Pediatrics Clinic", type: "Outpatient", organization_id: 2 },
    ],
    Location: [
        { id: 1, name: "Room 101" },
        { id: 2, name: "Room 202" },
    ],
    Encounter: [
        { id: 1, practitioner_id: 1, patient_id: 1, period: "2024-04-01 08:00:00" },
        { id: 2, practitioner_id: 2, patient_id: 2, period: "2024-04-02 09:30:00" },
        { id: 3, practitioner_id: 1, patient_id: 3, period: "2024-04-03 10:15:00" },
    ],
    EpisodeOfCare: [
        { id: 1, patient_id: 1, status: "Active", type: "Emergency" },
        { id: 2, patient_id: 2, status: "Finished", type: "Outpatient" },
        { id: 3, patient_id: 3, status: "Cancelled", type: "Inpatient" },
    ],
    AllergyIntolerance: [
        { id: 1, patient_id: 1, code: "Pollen" },
        { id: 2, patient_id: 2, code: "Penicillin" },
        { id: 3, patient_id: 3, code: "Peanuts" },
    ],
    Condition: [
        { id: 1, encounter_id: 1, code: "Fever" },
        { id: 2, encounter_id: 2, code: "Influenza" },
        { id: 3, encounter_id: 3, code: "Asthma" },
    ],
    Procedure: [
        { id: 1, encounter_id: 1, code: "Appendectomy" },
        { id: 2, encounter_id: 2, code: "Fracture repair" },
        { id: 3, encounter_id: 3, code: "Angioplasty" },
    ],
    FamilyMemberHistory: [
        { id: 1, patient_id: 1, code: "Heart Disease", relationship: "Father" },
        { id: 2, patient_id: 2, code: "Diabetes", relationship: "Mother" },
        { id: 3, patient_id: 3, code: "Cancer", relationship: "Grandparent" },
    ],
    ClinicalImpression: [
        { id: 1, encounter_id: 1, status: "Completed", date: "2024-04-01", finding: "Appendicitis" },
        { id: 2, encounter_id: 2, status: "In Progress", date: "2024-04-02", finding: "Fracture" },
        { id: 3, encounter_id: 3, status: "Draft", date: "2024-04-03", finding: "Asthma exacerbation" },
    ],
    Observation: [
        { id: 1, encounter_id: 1, code: "Temperature", value: 38.5 },
        { id: 2, encounter_id: 2, code: "Blood Pressure", value: 120 },
        { id: 3, encounter_id: 3, code: "Oxygen Saturation", value: 95 },
    ],
    DiagnosticReport: [
        { id: 1, encounter_id: 1, issued: "2024-04-01 10:00:00", code: "DR001" },
        { id: 2, encounter_id: 2, issued: "2024-04-02 11:00:00", code: "DR002" },
        { id: 3, encounter_id: 3, issued: "2024-04-03 12:00:00", code: "DR003" },
    ],
    Specimen: [
        { id: 1, encounter_id: 1, accession: "S001", collection: "2024-04-01 08:15:00" },
        { id: 2, encounter_id: 2, accession: "S002", collection: "2024-04-02 09:45:00" },
        { id: 3, encounter_id: 3, accession: "S003", collection: "2024-04-03 10:30:00" },
    ],
    ImagingStudy: [
        { id: 1, encounter_id: 1, modality: "X-ray", started: "2024-04-01 08:30:00" },
        { id: 2, encounter_id: 2, modality: "MRI", started: "2024-04-02 10:00:00" },
        { id: 3, encounter_id: 3, modality: "CT Scan", started: "2024-04-03 11:00:00" },
    ],
    Appointment: [
        { id: 1, encounter_id: 1, status: "Scheduled", appointedTime: "2024-04-01 10:00:00" },
        { id: 2, encounter_id: 2, status: "Completed", appointedTime: "2024-04-02 11:00:00" },
        { id: 3, encounter_id: 3, status: "Cancelled", appointedTime: "2024-04-03 12:00:00" },
    ],
    AppointmentResponse: [
        { id: 1, appointment_id: 1, response: "Accepted" },
        { id: 2, appointment_id: 2, response: "Accepted" },
        { id: 3, appointment_id: 3, response: "Declined" },
    ],
    Slot: [
        { id: 1, status: "Free", schedule_id: 1, start: "2024-04-01 08:00:00", end: "2024-04-01 09:00:00" },
        { id: 2, status: "Booked", schedule_id: 2, start: "2024-04-02 09:30:00", end: "2024-04-02 10:30:00" },
        { id: 3, status: "Busy", schedule_id: 3, start: "2024-04-03 10:15:00", end: "2024-04-03 11:15:00" },
    ],
    QuestionnaireResponse: [
        { id: 1, encounter_id: 1, questionnaire: "Q001", status: "Completed" },
        { id: 2, encounter_id: 2, questionnaire: "Q002", status: "In Progress" },
        { id: 3, encounter_id: 3, questionnaire: "Q003", status: "Draft" },
    ],
    Medication: [
        { id: 1, code: "M001", product: "Paracetamol" },
        { id: 2, code: "M002", product: "Amoxicillin" },
        { id: 3, code: "M003", product: "Ibuprofen" },
    ],
    MedicationRequest: [
        { id: 1, encounter_id: 1, patient_id: 1, medication: "M001", dosageInstruction: "Take 1 tablet every 4 hours" },
        { id: 2, encounter_id: 2, patient_id: 2, medication: "M002", dosageInstruction: "Take 1 capsule twice a day" },
        { id: 3, encounter_id: 3, patient_id: 3, medication: "M003", dosageInstruction: "Take 2 tablets as needed for pain" },
    ],
    MedicationAdministration: [
        { id: 1, encounter_id: 1, patient_id: 1, medication: "M001", wasNotGiven: false, effectiveTime: "2024-04-01 08:15:00" },
        { id: 2, encounter_id: 2, patient_id: 2, medication: "M002", wasNotGiven: false, effectiveTime: "2024-04-02 09:45:00" },
        { id: 3, encounter_id: 3, patient_id: 3, medication: "M003", wasNotGiven: false, effectiveTime: "2024-04-03 10:30:00" },
    ],
    Immunization: [
        { id: 1, encounter_id: 1, patient_id: 1, vaccineCode: "V001", administered: true },
        { id: 2, encounter_id: 2, patient_id: 2, vaccineCode: "V002", administered: true },
        { id: 3, encounter_id: 3, patient_id: 3, vaccineCode: "V003", administered: false },
    ],
    CarePlan: [
        { id: 1, encounter_id: 1, patient_id: 1, category: "Management" },
        { id: 2, encounter_id: 2, patient_id: 2, category: "Treatment" },
        { id: 3, encounter_id: 3, patient_id: 3, category: "Prevention" },
    ],
    ServiceRequest: [
        { id: 1, encounter_id: 1, patient_id: 1, code: "SR001" },
        { id: 2, encounter_id: 2, patient_id: 2, code: "SR002" },
        { id: 3, encounter_id: 3, patient_id: 3, code: "SR003" },
    ],
    Composition: [
        { id: 1, encounter_id: 1, status: "Final", type: "Summary", patient_id: 1, date: "2024-04-01" },
        { id: 2, encounter_id: 2, status: "Preliminary", type: "Discharge", patient_id: 2, date: "2024-04-02" },
        { id: 3, encounter_id: 3, status: "Final", type: "Referral", patient_id: 3, date: "2024-04-03" },
    ],
};
