
1. Foundational Resources:
Patient: This resource sits at the core, representing the individual receiving healthcare services.

2. Administrative Resources:
Practitioner: Represents a healthcare professional involved in caring for patients.
PractitionerRole: Defines the role(s) a practitioner has within an organization (linked to Practitioner).
Organization: Represents a healthcare organization where practitioners work.
RelatedPerson: Captures individuals related to the patient (e.g., family members).
Location: Represents a physical location within a healthcare organization (e.g., rooms, departments).

3. Service Description Resources:
HealthcareService: Defines the types of healthcare services offered by an organization.

4. Scheduling Resources:
Slot: Represents a block of time within a practitioner's schedule for appointments.
Appointment: Represents a scheduled meeting between a patient and healthcare professionals.
AppointmentResponse: Captures the patient's confirmation or cancellation of an appointment.

5. Encounter-Based Resources:
Encounter: Documents a healthcare interaction between a patient and practitioners. (This often triggers many of the subsequent resources)
EpisodeOfCare: Captures a longer-term course of treatment for a patient (may be linked to encounters).
AllergyIntolerance: Documents allergies or intolerances a patient has.
Condition: Represents a medical diagnosis for a patient.
Procedure: Captures details about a medical or surgical intervention performed on a patient.
FamilyMemberHistory: Records relevant medical history of a patient's family members.
ClinicalImpression: Documents a practitioner's assessment of a patient's condition.
Observation: Records the results of clinical measurements or assessments performed on a patient during an encounter.
DiagnosticReport: Captures the results of diagnostic investigations ordered during an encounter.
Specimen: Represents a sample of tissue or bodily fluid used for diagnostic testing (linked to a diagnostic report).
ImagingStudy: Captures details about diagnostic imaging examinations performed (linked to a diagnostic report).

6. Documentation and Request Resources:
QuestionnaireResponse: Records a patient's responses to a questionnaire.
MedicationRequest: Documents a request for medication for a patient.
MedicationDispense: Records the details of dispensing medication to a patient.
Medication: Defines the details of a specific medication product.
Immunization: Represents the administration of a vaccine to a patient.
CarePlan: Captures a plan of care for a patient, often involving multiple encounters and activities.
ServiceRequest: Represents a request for a specific healthcare service within a care plan.
Composition: Creates a structured report summarizing patient information (e.g., discharge summaries, progress notes).