-- Tabel Patient
CREATE TABLE Patient (
    id INT PRIMARY KEY,
    active BOOLEAN,
    name VARCHAR(255)
);

-- Tabel RelatedPerson
CREATE TABLE RelatedPerson (
    id INT PRIMARY KEY,
    patient_id INT,
    name VARCHAR(255),
    relationship VARCHAR(255),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);

-- Tabel Practitioner
CREATE TABLE Practitioner (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);

-- Tabel Organization
CREATE TABLE Organization (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);

-- Tabel PractitionerRole
CREATE TABLE PractitionerRole (
    id INT PRIMARY KEY,
    practitioner_id INT,
    organization_id INT,
    code VARCHAR(255),
    FOREIGN KEY (practitioner_id) REFERENCES Practitioner(id),
    FOREIGN KEY (organization_id) REFERENCES Organization(id)
);

-- Tabel Location
CREATE TABLE Location (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);

-- Tabel HealthcareService
CREATE TABLE HealthcareService (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    type VARCHAR(255),
    organization_id INT,
    FOREIGN KEY (organization_id) REFERENCES Organization(id)
);

-- Tabel Appointment
CREATE TABLE Appointment (
    id INT PRIMARY KEY,
    encounter_id INT,
    status VARCHAR(255),
    appointedTime TIMESTAMP,
    FOREIGN KEY (encounter_id) REFERENCES Encounter(id)
);

-- Tabel AppointmentResponse
CREATE TABLE AppointmentResponse (
    id INT PRIMARY KEY,
    appointment_id INT,
    response VARCHAR(255),
    FOREIGN KEY (appointment_id) REFERENCES Appointment(id)
);

-- Tabel Slot
CREATE TABLE Slot (
    id INT PRIMARY KEY,
    status VARCHAR(255),
    schedule_id INT,
    start TIMESTAMP,
    end TIMESTAMP,
    FOREIGN KEY (schedule_id) REFERENCES HealthcareService(id)
);

-- Tabel Encounter
CREATE TABLE Encounter (
    id INT PRIMARY KEY,
    practitioner_id INT,
    patient_id INT,
    period TIMESTAMP,
    FOREIGN KEY (practitioner_id) REFERENCES Practitioner(id),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);

-- Tabel EpisodeOfCare
CREATE TABLE EpisodeOfCare (
    id INT PRIMARY KEY,
    patient_id INT,
    status VARCHAR(255),
    type VARCHAR(255),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);

-- Tabel Condition
CREATE TABLE Condition (
    id INT PRIMARY KEY,
    encounter_id INT,
    code VARCHAR(255),
    FOREIGN KEY (encounter_id) REFERENCES Encounter(id)
);

-- Tabel AllergyIntolerance
CREATE TABLE AllergyIntolerance (
    id INT PRIMARY KEY,
    patient_id INT,
    code VARCHAR(255),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);

-- Tabel Procedure
CREATE TABLE Procedure (
    id INT PRIMARY KEY,
    encounter_id INT,
    code VARCHAR(255),
    FOREIGN KEY (encounter_id) REFERENCES Encounter(id)
);

-- Tabel FamilyMemberHistory
CREATE TABLE FamilyMemberHistory (
    id INT PRIMARY KEY,
    patient_id INT,
    code VARCHAR(255),
    relationship VARCHAR(255),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);

-- Tabel ClinicalImpression
CREATE TABLE ClinicalImpression (
    id INT PRIMARY KEY,
    encounter_id INT,
    status VARCHAR(255),
    date TIMESTAMP,
    finding VARCHAR(255),
    FOREIGN KEY (encounter_id) REFERENCES Encounter(id)
);

-- Tabel Observation
CREATE TABLE Observation (
    id INT PRIMARY KEY,
    encounter_id INT,
    code VARCHAR(255),
    value FLOAT,
    FOREIGN KEY (encounter_id) REFERENCES Encounter(id)
);

-- Tabel DiagnosticReport
CREATE TABLE DiagnosticReport (
    id INT PRIMARY KEY,
    encounter_id INT,
    issued TIMESTAMP,
    code VARCHAR(255),
    FOREIGN KEY (encounter_id) REFERENCES Encounter(id)
);

-- Tabel Specimen
CREATE TABLE Specimen (
    id INT PRIMARY KEY,
    encounter_id INT,
    accession VARCHAR(255),
    collection TIMESTAMP,
    FOREIGN KEY (encounter_id) REFERENCES Encounter(id)
);

-- Tabel ImagingStudy
CREATE TABLE ImagingStudy (
    id INT PRIMARY KEY,
    encounter_id INT,
    modality VARCHAR(255),
    started TIMESTAMP,
    FOREIGN KEY (encounter_id) REFERENCES Encounter(id)
);

-- Tabel QuestionnaireResponse
CREATE TABLE QuestionnaireResponse (
    id INT PRIMARY KEY,
    encounter_id INT,
    questionnaire VARCHAR(255),
    status VARCHAR(255),
    FOREIGN KEY (encounter_id) REFERENCES Encounter(id)
);

-- Tabel MedicationRequest
CREATE TABLE MedicationRequest (
    id INT PRIMARY KEY,
    encounter_id INT,
    patient_id INT,
    medication VARCHAR(255),
    dosageInstruction TEXT,
    FOREIGN KEY (encounter_id) REFERENCES Encounter(id),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);

-- Tabel MedicationAdministration
CREATE TABLE MedicationAdministration (
    id INT PRIMARY KEY,
    encounter_id INT,
    patient_id INT,
    medication VARCHAR(255),
    wasNotGiven BOOLEAN,
    effectiveTime TIMESTAMP,
    FOREIGN KEY (encounter_id) REFERENCES Encounter(id),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);

-- Tabel Medication
CREATE TABLE Medication (
    id INT PRIMARY KEY,
    code VARCHAR(255),
    product VARCHAR(255)
);

-- Tabel Immunization
CREATE TABLE Immunization (
    id INT PRIMARY KEY,
    encounter_id INT,
    patient_id INT,
    vaccineCode VARCHAR(255),
    administered BOOLEAN,
    FOREIGN KEY (encounter_id) REFERENCES Encounter(id),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);

-- Tabel CarePlan
CREATE TABLE CarePlan (
    id INT PRIMARY KEY,
    encounter_id INT,
    patient_id INT,
    category VARCHAR(255),
    FOREIGN KEY (encounter_id) REFERENCES Encounter(id),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);

-- Tabel ServiceRequest
CREATE TABLE ServiceRequest (
    id INT PRIMARY KEY,
    encounter_id INT,
    patient_id INT,
    code VARCHAR(255),
    FOREIGN KEY (encounter_id) REFERENCES Encounter(id),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);

-- Tabel Composition
CREATE TABLE Composition (
    id INT PRIMARY KEY,
    encounter_id INT,
    status VARCHAR(255),
    type VARCHAR(255),
    patient_id INT,
    date TIMESTAMP,
    FOREIGN KEY (encounter_id) REFERENCES Encounter(id),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);
