const db = {};
db.Patient = [
    { id, active, gender, birthDate, deceasedBoolean, deceasedDateTime, multipleBirthBoolean, multipleBirthInteger }, //
];
db.Practitioner = [
    { id, active, gender, birthDate, deceasedBoolean, deceasedDateTime }, //
];
db.PractitionerRole = [
    { id, active, PractitionerId }, //
];
db.Organization = [
    { id, active, name, description }, //
];
db.Location = [
    { id, status, name, description, mode, positionLongitude, positionLatitude, positionAltitude, OrganizationId }, //
];
db.Appointment = [
    { id, status, description, start, end, minutesDuration, created, cancellationDate, PatientId, PractitionerId, recurrenceId, occurrenceChanged }, //
];
db.Encounter = [
    { id, status, PatientId, PractitionerId, AppointmentId, plannedStartDate, plannedEndDate, LocationId }, //
];
db.Condition = [
    { id, EncounterId, onsetDateTime, onsetString, abatementDateTime, abatementString, recordedDate }, //
];
db.DiagnosticReport = [
    { id, status, EncounterId, effectiveDateTime, issued, conclusion }, //
];
db.Observation = [
    { id, status, EncounterId, effectiveDateTime, effectiveInstant, issued, valueString, valueBoolean, valueInteger, valueTime, valueDateTime }, //
];
db.Procedure = [
    { id, status, EncounterId, occurrenceDateTime, occurrenceString, recorded, reportedBoolean }, //
];
