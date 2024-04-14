const db = {};

// Patients
db.Patient = [
    { id: '1', active: true, gender: 'male', birthDate: '1990-05-20', deceasedBoolean: false, deceasedDateTime: null, multipleBirthBoolean: false, multipleBirthInteger: null },
    { id: '2', active: true, gender: 'female', birthDate: '1985-10-12', deceasedBoolean: false, deceasedDateTime: null, multipleBirthBoolean: false, multipleBirthInteger: null }
];

// Practitioners
db.Practitioner = [
    { id: '1', active: true, gender: 'male', birthDate: '1975-03-15', deceasedBoolean: false, deceasedDateTime: null },
    { id: '2', active: true, gender: 'female', birthDate: '1980-07-28', deceasedBoolean: false, deceasedDateTime: null }
];

// Practitioner Roles
db.PractitionerRole = [
    { id: '1', active: true, PractitionerId: '1' },
    { id: '2', active: true, PractitionerId: '2' }
];

// Organizations
db.Organization = [
    { id: '1', active: true, name: 'General Hospital', description: 'A large hospital serving the community' },
    { id: '2', active: true, name: 'Specialty Clinic', description: 'A clinic specializing in certain medical fields' }
];

// Locations
db.Location = [
    { id: '1', status: 'active', name: 'Room 101', description: 'Intensive Care Unit', mode: 'instance', positionLongitude: -73.9857, positionLatitude: 40.7484, positionAltitude: 0, OrganizationId: '1' },
    { id: '2', status: 'active', name: 'Consultation Room A', description: 'For general consultations', mode: 'kind', positionLongitude: -73.9866, positionLatitude: 40.7488, positionAltitude: 0, OrganizationId: '2' }
];

// Appointments
db.Appointment = [
    { id: '1', status: 'booked', description: 'Follow-up visit', start: '2024-04-15T10:00:00Z', end: '2024-04-15T11:00:00Z', minutesDuration: 60, created: '2024-04-10T08:00:00Z', cancellationDate: null, PatientId: '1', PractitionerId: '1', recurrenceId: null, occurrenceChanged: false },
    { id: '2', status: 'booked', description: 'Initial consultation', start: '2024-04-16T14:00:00Z', end: '2024-04-16T15:00:00Z', minutesDuration: 60, created: '2024-04-12T09:00:00Z', cancellationDate: null, PatientId: '2', PractitionerId: '2', recurrenceId: null, occurrenceChanged: false }
];

// Encounters
db.Encounter = [
    { id: '1', status: 'in-progress', PatientId: '1', PractitionerId: '1', AppointmentId: '1', plannedStartDate: '2024-04-15T10:00:00Z', plannedEndDate: '2024-04-15T11:00:00Z', LocationId: '1' },
    { id: '2', status: 'planned', PatientId: '2', PractitionerId: '2', AppointmentId: '2', plannedStartDate: '2024-04-16T14:00:00Z', plannedEndDate: '2024-04-16T15:00:00Z', LocationId: '2' }
];

// Conditions
db.Condition = [
    { id: '1', EncounterId: '1', onsetDateTime: '2024-04-10T08:00:00Z', onsetString: null, abatementDateTime: null, abatementString: null, recordedDate: '2024-04-10T08:00:00Z' },
    { id: '2', EncounterId: '2', onsetDateTime: '2024-04-12T09:00:00Z', onsetString: null, abatementDateTime: null, abatementString: null, recordedDate: '2024-04-12T09:00:00Z' }
];

// Diagnostic Reports
db.DiagnosticReport = [
    { id: '1', status: 'final', EncounterId: '1', effectiveDateTime: '2024-04-15T10:30:00Z', issued: '2024-04-15T11:00:00Z', conclusion: 'Patient is responding well to treatment' },
    { id: '2', status: 'final', EncounterId: '2', effectiveDateTime: '2024-04-16T15:30:00Z', issued: '2024-04-16T16:00:00Z', conclusion: 'Further tests needed' }
];

// Observations
db.Observation = [
    { id: '1', status: 'final', EncounterId: '1', effectiveDateTime: '2024-04-15T10:30:00Z', effectiveInstant: null, issued: '2024-04-15T11:00:00Z', valueString: 'Blood pressure normal', valueBoolean: null, valueInteger: null, valueTime: null, valueDateTime: null },
    { id: '2', status: 'final', EncounterId: '2', effectiveDateTime: '2024-04-16T15:30:00Z', effectiveInstant: null, issued: '2024-04-16T16:00:00Z', valueString: 'Temperature elevated', valueBoolean: null, valueInteger: null, valueTime: null, valueDateTime: null }
];

// Procedures
db.Procedure = [
    { id: '1', status: 'completed', EncounterId: '1', occurrenceDateTime: '2024-04-15T10:30:00Z', occurrenceString: null, recorded: '2024-04-15T11:00:00Z', reportedBoolean: false },
    { id: '2', status: 'in-progress', EncounterId: '2', occurrenceDateTime: '2024-04-16T15:30:00Z', occurrenceString: null, recorded: '2024-04-16T16:00:00Z', reportedBoolean: false }
];

console.log(db);
