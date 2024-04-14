# hms

hms

## SQL

Aturan penulisan SQL

1. Nama tabel menggunakan nama yang sama dengan `resourceType`, dengan penulisan `PascalCase` (boleh menambahkan suffix jika kondisi nested), contoh: `Encounter`, `EncounterAdmission`
2. Nama kolom menggunakan nama yang sama dengan resource FHIR menggunakan penulisaan `camelCase`, kecuali kolom yang berelasi menggunakan nama table yang di relasikan dengan suffix `Id`, menggunakan penulisan `PascalCase` format `<nama tabel yang di relasikan>Id`, Contoh untuk kolom yang berelasi: `Encounter` > `PatientId`

Contoh penulisan SQL

```sql
CREATE TABLE Encounter(
    id int,
    PatientId int,
    PractitionerId int,
    LocationId int,
    status char(1),
    plannedStartDate datetime,
    plannedEndDate datetime,
    FOREIGN KEY (FKPatientId) REFERENCES Patient(id),
    FOREIGN KEY (FKPractitionerId) REFERENCES Practitioner(id),
    FOREIGN KEY (FKLocationId) REFERENCES Location(id)
)
```
