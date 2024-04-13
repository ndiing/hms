CREATE TABLE Patient (
    id INT PRIMARY KEY IDENTITY(1,1),
    active BIT NOT NULL,
    name NVARCHAR(100) NOT NULL,
    gender NVARCHAR(10),
    birthDate DATE,
    deceasedBoolean BIT,
    deceasedDateTime DATETIME,
    maritalStatus NVARCHAR(50),
    multipleBirthBoolean BIT,
    multipleBirthInteger INT
);

CREATE TABLE Practitioner (
    id INT PRIMARY KEY IDENTITY(1,1),
    active BIT NOT NULL,
    name NVARCHAR(100) NOT NULL,
    gender NVARCHAR(10),
    birthDate DATE
);

CREATE TABLE PractitionerRole (
    id INT PRIMARY KEY IDENTITY(1,1),
    active BIT NOT NULL,
    code NVARCHAR(20),
    specialty NVARCHAR(50),
    practitioner_id INT,
    organization_id INT,
    FOREIGN KEY (practitioner_id) REFERENCES Practitioner(id),
    FOREIGN KEY (organization_id) REFERENCES Organization(id)
);

CREATE TABLE Organization (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(100) NOT NULL,
    type NVARCHAR(50),
    address NVARCHAR(255),
    city NVARCHAR(50),
    state NVARCHAR(50),
    postalCode NVARCHAR(20),
    country NVARCHAR(50)
);

CREATE TABLE RelatedPerson (
    id INT PRIMARY KEY IDENTITY(1,1),
    active BIT NOT NULL,
    name NVARCHAR(100) NOT NULL,
    gender NVARCHAR(10),
    birthDate DATE,
    patient_id INT,
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);

CREATE TABLE Location (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(100) NOT NULL,
    address NVARCHAR(255),
    city NVARCHAR(50),
    state NVARCHAR(50),
    postalCode NVARCHAR(20),
    country NVARCHAR(50),
    organization_id INT,
    FOREIGN KEY (organization_id) REFERENCES Organization(id)
);

CREATE TABLE HealthcareService (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(100) NOT NULL,
    type NVARCHAR(50),
    organization_id INT,
    location_id INT,
    FOREIGN KEY (organization_id) REFERENCES Organization(id),
    FOREIGN KEY (location_id) REFERENCES Location(id)
);

CREATE TABLE Slot (
    id INT PRIMARY KEY IDENTITY(1,1),
    startDateTime DATETIME,
    endDateTime DATETIME,
    healthcareService_id INT,
    practitioner_id INT,
    status NVARCHAR(20),
    FOREIGN KEY (healthcareService_id) REFERENCES HealthcareService(id),
    FOREIGN KEY (practitioner_id) REFERENCES Practitioner(id)
);

CREATE TABLE Appointment (
    id INT PRIMARY KEY IDENTITY(1,1),
    startDateTime DATETIME,
    endDateTime DATETIME,
    patient_id INT,
    healthcareService_id INT,
    slot_id INT,
    status NVARCHAR(20),
    FOREIGN KEY (patient_id) REFERENCES Patient(id),
    FOREIGN KEY (healthcareService_id) REFERENCES HealthcareService(id),
    FOREIGN KEY (slot_id) REFERENCES Slot(id)
);

CREATE TABLE AppointmentResponse (
    id INT PRIMARY KEY IDENTITY(1,1),
    appointment_id INT,
    participantType NVARCHAR(50),
    practitioner_id INT,
    participantStatus NVARCHAR(20),
    FOREIGN KEY (appointment_id) REFERENCES Appointment(id),
    FOREIGN KEY (practitioner_id) REFERENCES Practitioner(id)
);

CREATE TABLE Encounter (
    id INT PRIMARY KEY IDENTITY(1,1),
    status NVARCHAR(20) NOT NULL,
    class NVARCHAR(20),
    type NVARCHAR(50),
    subject_id INT NOT NULL,
    period_start DATETIME,
    period_end DATETIME,
    reason NVARCHAR(255),
    serviceProvider_id INT,
    location_id INT,
    FOREIGN KEY (subject_id) REFERENCES Patient(id),
    FOREIGN KEY (serviceProvider_id) REFERENCES Organization(id),
    FOREIGN KEY (location_id) REFERENCES Location(id)
);

CREATE TABLE EpisodeOfCare (
    id INT PRIMARY KEY IDENTITY(1,1),
    status NVARCHAR(20) NOT NULL,
    patient_id INT NOT NULL,
    managingOrganization_id INT,
    start_date DATETIME,
    end_date DATETIME,
    FOREIGN KEY (patient_id) REFERENCES Patient(id),
    FOREIGN KEY (managingOrganization_id) REFERENCES Organization(id)
);

CREATE TABLE AllergyIntolerance (
    id INT PRIMARY KEY IDENTITY(1,1),
    patient_id INT NOT NULL,
    recordedDate DATETIME,
    substance NVARCHAR(255),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);

CREATE TABLE Condition (
    id INT PRIMARY KEY IDENTITY(1,1),
    patient_id INT NOT NULL,
    recordedDate DATETIME,
    code NVARCHAR(255),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);

CREATE TABLE Procedure (
    id INT PRIMARY KEY IDENTITY(1,1),
    patient_id INT NOT NULL,
    performedDate DATETIME,
    code NVARCHAR(255),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);

CREATE TABLE FamilyMemberHistory (
    id INT PRIMARY KEY IDENTITY(1,1),
    patient_id INT NOT NULL,
    date DATETIME,
    relationship NVARCHAR(50),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);

CREATE TABLE ClinicalImpression (
    id INT PRIMARY KEY IDENTITY(1,1),
    patient_id INT NOT NULL,
    date DATETIME,
    description NVARCHAR(255),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);

CREATE TABLE Observation (
    id INT PRIMARY KEY IDENTITY(1,1),
    patient_id INT NOT NULL,
    date DATETIME,
    value NVARCHAR(255),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);

CREATE TABLE DiagnosticReport (
    id INT PRIMARY KEY IDENTITY(1,1),
    patient_id INT NOT NULL,
    date DATETIME,
    result NVARCHAR(255),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);

CREATE TABLE Specimen (
    id INT PRIMARY KEY IDENTITY(1,1),
    patient_id INT NOT NULL,
    collectedDate DATETIME,
    type NVARCHAR(255),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);

CREATE TABLE ImagingStudy (
    id INT PRIMARY KEY IDENTITY(1,1),
    patient_id INT NOT NULL,
    startDate DATETIME,
    modality NVARCHAR(50),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);

CREATE TABLE QuestionnaireResponse (
    id INT PRIMARY KEY IDENTITY(1,1),
    patient_id INT NOT NULL,
    authoredDate DATETIME,
    response NVARCHAR(255),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);

CREATE TABLE MedicationRequest (
    id INT PRIMARY KEY IDENTITY(1,1),
    patient_id INT NOT NULL,
    date DATETIME,
    medication NVARCHAR(255),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);

CREATE TABLE MedicationDispense (
    id INT PRIMARY KEY IDENTITY(1,1),
    patient_id INT NOT NULL,
    date DATETIME,
    medication NVARCHAR(255),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);

CREATE TABLE Medication (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(100) NOT NULL,
    form NVARCHAR(50),
    manufacturer NVARCHAR(100)
);

CREATE TABLE Immunization (
    id INT PRIMARY KEY IDENTITY(1,1),
    patient_id INT NOT NULL,
    date DATETIME,
    vaccine NVARCHAR(100),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);

CREATE TABLE CarePlan (
    id INT PRIMARY KEY IDENTITY(1,1),
    patient_id INT NOT NULL,
    startDate DATETIME,
    endDate DATETIME,
    status NVARCHAR(20),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);

CREATE TABLE ServiceRequest (
    id INT PRIMARY KEY IDENTITY(1,1),
    patient_id INT NOT NULL,
    date DATETIME,
    service NVARCHAR(100),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);

CREATE TABLE Composition (
    id INT PRIMARY KEY IDENTITY(1,1),
    patient_id INT NOT NULL,
    date DATETIME,
    type NVARCHAR(50),
    FOREIGN KEY (patient_id) REFERENCES Patient(id)
);
