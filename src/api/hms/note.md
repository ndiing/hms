
Composition:
id: ID unik untuk composition (wajib).
status: Kode yang menunjukkan status composition (wajib) (misalnya, draft, completed).
type: Kode yang menunjukkan jenis composition (wajib) (misalnya, discharge summary, problem progress note).
subject: Referensi ke resource Patient yang terkait dengan composition (wajib).
date: Tanggal dan waktu composition dibuat (wajib).
author: Referensi ke resource Practitioner yang membuat composition (wajib).
title: Judul composition (wajib).
content: Konten composition, yang dapat berupa narrative text, resources FHIR lain, atau kombinasi keduanya (wajib).

Patient:
id: ID unik untuk pasien (wajib).
identifier: ID unik untuk pasien (wajib) (misalnya, nomor rekam medis).
name: Nama pasien (wajib).

Practitioner:
id: ID unik untuk tenaga kesehatan (wajib).
identifier: ID unik untuk tenaga kesehatan (wajib) (misalnya, nomor lisensi).
name: Nama tenaga kesehatan (wajib).

PractitionerRole:
id: ID unik untuk practitioner role (wajib).
practitioner: Referensi ke resource Practitioner yang terkait (wajib).
organization: Referensi ke resource Organization tempat tenaga kesehatan tersebut bekerja (opsional, jika tidak terdaftar di organisasi manapun).
role: Kode yang mendefinisikan peran tenaga kesehatan dalam organisasi (misalnya, dokter spesialis jantung).

RelatedPerson:
id: ID unik untuk related person (wajib).
identifier: ID unik untuk related person (wajib) (misalnya, nomor jaminan kesehatan).
name: Nama related person (wajib).
patient: Referensi ke resource Patient yang terkait dengan related person (wajib).
relationship: Kode yang menunjukkan hubungan related person dengan pasien (misalnya, mother, father, brother).

Organization:
id: ID unik untuk organisasi (wajib).
identifier: ID unik untuk organisasi (wajib) (misalnya, NPWP rumah sakit).
name: Nama organisasi (wajib).

HealthcareService:
id: ID unik untuk layanan kesehatan (wajib).
category: Kode yang menunjukkan jenis layanan kesehatan (wajib) (misalnya, rawat jalan, rawat inap, bedah).
code: Kode yang menunjukkan layanan kesehatan spesifik (wajib) (misalnya, konsultasi dokter umum).
providedBy: Referensi ke resource Organization yang menyediakan layanan kesehatan (wajib).

Location:
id: ID unik untuk lokasi (wajib).
identifier: ID unik untuk lokasi (wajib) (misalnya, kode ruang pemeriksaan).
name: Nama lokasi (wajib) (misalnya, Ruang Periksa 1).
organization: Referensi ke resource Organization tempat lokasi berada (wajib).

Appointment:
id: ID unik untuk appointment (wajib).
status: Kode yang menunjukkan status appointment (wajib) (misalnya, booked, arrived, cancelled).
serviceType: Referensi ke resource HealthcareService yang terkait dengan appointment (wajib).
participant: Referensi ke resource Practitioner yang terlibat dalam appointment (wajib) (biasanya 1, namun bisa terdapat banyak participant untuk appointment group).
participant: Referensi ke resource Patient yang terkait dengan appointment (wajib).
start: Tanggal dan waktu mulai appointment (wajib).
end: Tanggal dan waktu akhir appointment (opsional).

AppointmentResponse:
id: ID unik untuk appointment response (wajib).
appointment: Referensi ke resource Appointment yang terkait dengan response (wajib).
participant: Referensi ke resource Patient yang terkait dengan response (wajib).
status: Kode yang menunjukkan status response appointment (wajib) (misalnya, accepted, declined, tentative).
comment: Teks berisi komentar terkait response appointment (opsional).

Slot:
id: ID unik untuk slot (wajib).
serviceType: Referensi ke resource HealthcareService yang terkait dengan slot (wajib).
start: Tanggal dan waktu mulai slot (wajib).
end: Tanggal dan waktu akhir slot (wajib).
status: Kode yang menunjukkan status slot (wajib) (misalnya, available, booked, cancelled).

Encounter:
id: ID unik untuk encounter (wajib).
subject: Referensi ke resource Patient yang terkait dengan encounter (wajib).
participant: Referensi ke resource Practitioner yang terlibat dalam encounter (wajib) (bisa terdapat banyak participant untuk encounter).
period: Periode waktu encounter berlangsung (wajib).
type: Kode yang menunjukkan jenis encounter (wajib) (misalnya, konsultasi awal, kunjungan rawat inap).

EpisodeOfCare:
id: ID unik untuk episode of care (wajib).
patient: Referensi ke resource Patient yang terkait dengan episode of care (wajib).
diagnosis: Referensi ke resource Condition yang didiagnosis selama episode of care (wajib). (bisa terdapat banyak diagnosis untuk episode of care)
status: Kode yang menunjukkan status episode of care (wajib) (misalnya, active, onhold, finished).

AllergyIntolerance:
id: ID unik untuk allergy intolerance (wajib).
patient: Referensi ke resource Patient yang memiliki alergi atau intoleransi (wajib).
substance: Referensi ke resource Substance yang menjadi alergen atau zat yang tidak ditoleransi (wajib).
clinicalStatus: Kode yang menunjukkan status klinis alergi atau intoleransi (wajib) (misalnya, confirmed, suspected).

Condition:
id: ID unik untuk condition (wajib).
subject: Referensi ke resource Patient yang memiliki kondisi tersebut (wajib).
code: Kode yang mendefinisikan kondisi medis (wajib).
clinicalStatus: Kode yang menunjukkan status klinis kondisi (wajib) (misalnya, active, inactive, resolved).

Procedure:
id: ID unik untuk prosedur (wajib).
subject: Referensi ke resource Patient yang menjalani prosedur (wajib).
code: Kode yang mendefinisikan jenis prosedur (wajib).
performedDateTime: Tanggal dan waktu prosedur dilakukan (wajib).
location: Referensi ke resource Location tempat prosedur dilakukan (opsional).
participant: Referensi ke resource Practitioner yang terlibat dalam prosedur (opsional).

FamilyMemberHistory:
id: ID unik untuk family member history (wajib).
patient: Referensi ke resource Patient yang history keluarganya direkam (wajib).
relationship: Kode yang menunjukkan hubungan anggota keluarga dengan pasien (wajib) (misalnya, mother, father, brother).
condition: Referensi ke resource Condition yang didiagnosis pada anggota keluarga (wajib).

ClinicalImpression:
id: ID unik untuk clinical impression (wajib).
patient: Referensi ke resource Patient yang terkait dengan clinical impression (wajib).
assessor: Referensi ke resource Practitioner yang membuat clinical impression (wajib).
date: Tanggal clinical impression dibuat (wajib).
finding: Referensi ke resource Observation, Condition, atau DiagnosticReport yang mendukung clinical impression (wajib). (bisa terdapat banyak finding)

Observation:
id: ID unik untuk observation (wajib).
subject: Referensi ke resource Patient yang terkait dengan observation (wajib).
code: Kode yang mendefinisikan jenis observation (wajib).
effectiveDateTime: Tanggal dan waktu observation dilakukan (wajib).
value: Nilai observation (wajib). Tipe data nilai tergantung pada kode observation (misalnya, quantity, string, codeable_concept).

DiagnosticReport:
id: ID unik untuk diagnostic report (wajib).
subject: Referensi ke resource Patient yang terkait dengan diagnostic report (wajib).
code: Kode yang mendefinisikan jenis tes diagnostik (wajib).
issuedDateTime: Tanggal dan waktu diagnostic report dibuat (wajib).
result: Referensi ke resource Observation yang merupakan hasil tes diagnostik (wajib). (bisa terdapat banyak result)

Specimen:
id: ID unik untuk specimen (wajib).
subject: Referensi ke resource Patient yang terkait dengan specimen (wajib).
accessionId: ID unik untuk spesimen (wajib).
type: Kode yang menunjukkan jenis spesimen (wajib) (misalnya, darah, urin).
collectionDateTime: Tanggal dan waktu spesimen diambil (wajib).

ImagingStudy:
id: ID unik untuk imaging study (wajib).
subject: Referensi ke resource Patient yang terkait dengan imaging study (wajib).
accessionId: ID unik untuk studi pencitraan (wajib).
modality: Kode yang menunjukkan modalitas pencitraan (wajib) (misalnya, CT, MRI).
performedDateTime: Tanggal dan waktu studi pencitraan dilakukan (wajib).

QuestionnaireResponse:
id: ID unik untuk questionnaire response (wajib).
subject: Referensi ke resource Patient yang terkait dengan questionnaire response (wajib).
questionnaire: ID unik untuk kuesioner yang dijawab (wajib).
status: Kode yang menunjukkan status pengisian kuesioner (wajib) (misalnya, completed, in-progress).
item: Referensi ke resource Item (sub-elemen dari Questionnaire) dan jawaban yang diberikan (wajib). (bisa terdapat banyak item)

MedicationRequest:
id: ID unik untuk medication request (wajib).
subject: Referensi ke resource Patient untuk siapa obat dimintakan (wajib).
medicationCodeableConcept: Kode yang menunjukkan obat yang dimintakan (wajib) (bisa berupa kode atau nama obat).
authoredOn: Tanggal dan waktu medication request dibuat (wajib).
intent: Kode yang menunjukkan maksud dari permintaan obat (wajib) (misalnya, order, plan, proposal).

MedicationDispense:
id: ID unik untuk medication dispense (wajib).
medication: Referensi ke resource Medication yang didispenskan (wajib).
subject: Referensi ke resource Patient yang menerima obat (wajib).
quantity: Jumlah obat yang didispenskan (wajib).
dispensedDateTime: Tanggal dan waktu obat didispenskan (wajib).

Medication:
id: ID unik untuk medication (wajib).
code: Kode yang menunjukkan obat (wajib) (misalnya, kode NCB).
product: Nama produk obat (wajib).
status: Status obat (wajib) (misalnya, active, inactive).

Immunization:
id: ID unik untuk immunization (wajib).
patient_id: Referensi ke resource Patient yang diimunisasi (wajib).
vaccine_code: Kode vaksin yang diberikan (wajib).
administered_date_time: Tanggal dan waktu vaksin diberikan (wajib).

CarePlan:
id: ID unik untuk care plan (wajib).
patient_id: Referensi ke resource Patient yang terkait dengan care plan (wajib).
status: Status care plan (wajib) (misalnya, active, onhold, completed).
goal_id: Referensi ke resource Goal (opsional) (jika terdapat multi goal).
activity_id: Referensi ke resource CarePlanActivity (opsional) (jika terdapat multi activity).

ServiceRequest:
id: ID unik untuk service request (wajib).
subject_id: Referensi ke resource Patient yang terkait dengan service request (wajib).
intent: Maksud service request (wajib) (misalnya, plan, proposal, order).
code: Kode jenis service yang diminta (wajib).
status: Status service request (wajib) (misalnya, draft, active, completed).