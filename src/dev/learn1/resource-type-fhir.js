const Resources = [
    {
        label: "Foundation",
        children: [
            {
                label: "Conformance",
                children: [
                    { label: "CapabilityStatement N", children: [] },
                    { label: "StructureDefinition N", children: [] },
                    { label: "ImplementationGuide 4", children: [] },
                    { label: "SearchParameter 5", children: [] },
                    { label: "MessageDefinition 1", children: [] },
                    { label: "OperationDefinition N", children: [] },
                    { label: "CompartmentDefinition 3", children: [] },
                    { label: "StructureMap 4", children: [] },
                    { label: "GraphDefinition 2", children: [] },
                ],
            },
            {
                label: "Terminology",
                children: [
                    { label: "CodeSystem N", children: [] },
                    { label: "ValueSet N", children: [] },
                    { label: "ConceptMap 3", children: [] },
                    { label: "NamingSystem 4", children: [] },
                    { label: "TerminologyCapabilities 1", children: [] },
                ],
            },
            {
                label: "Security",
                children: [
                    { label: "Provenance 4", children: [] },
                    { label: "AuditEvent 4", children: [] },
                    { label: "Permission 0", children: [] },
                    { label: "Consent 2", children: [] },
                ],
            },
            {
                label: "Documents",
                children: [
                    { label: "Composition 4", children: [] },
                    { label: "DocumentReference 4", children: [] },
                ],
            },
            {
                label: "Other",
                children: [
                    { label: "Basic 3", children: [] },
                    { label: "Binary N", children: [] },
                    { label: "Bundle N", children: [] },
                    { label: "Linkage 0", children: [] },
                    { label: "MessageHeader 4", children: [] },
                    { label: "OperationOutcome N", children: [] },
                    { label: "Parameters N", children: [] },
                    { label: "Subscription 3", children: [] },
                    { label: "SubscriptionStatus 2", children: [] },
                    { label: "SubscriptionTopic 2", children: [] },
                ],
            },
        ],
    },
    {
        label: "Base",
        children: [
            {
                label: "Individuals",
                children: [
                    { label: "Patient N", children: [] },
                    { label: "Practitioner 5", children: [] },
                    { label: "PractitionerRole 4", children: [] },
                    { label: "RelatedPerson 5", children: [] },
                    { label: "Person 4", children: [] },
                    { label: "Group 3", children: [] },
                ],
            },
            {
                label: "Entities #1",
                children: [
                    { label: "Organization 5", children: [] },
                    { label: "OrganizationAffiliation 1", children: [] },
                    { label: "HealthcareService 4", children: [] },
                    { label: "Endpoint 2", children: [] },
                    { label: "Location 5", children: [] },
                ],
            },
            {
                label: "Entities #2",
                children: [
                    { label: "Substance 2", children: [] },
                    { label: "BiologicallyDerivedProduct 2", children: [] },
                    { label: "Device 2", children: [] },
                    { label: "DeviceMetric 1", children: [] },
                    { label: "NutritionProduct 1", children: [] },
                ],
            },
            {
                label: "Workflow",
                children: [
                    { label: "Task 3", children: [] },
                    { label: "Transport 1", children: [] },
                    { label: "Appointment 3", children: [] },
                    { label: "AppointmentResponse 3", children: [] },
                    { label: "Schedule 3", children: [] },
                    { label: "Slot 3", children: [] },
                    { label: "VerificationResult 1", children: [] },
                ],
            },
            {
                label: "Management",
                children: [
                    { label: "Encounter 4", children: [] },
                    { label: "EncounterHistory 0", children: [] },
                    { label: "EpisodeOfCare 2", children: [] },
                    { label: "Flag 1", children: [] },
                    { label: "List 4", children: [] },
                    { label: "Library 4", children: [] },
                ],
            },
        ],
    },
    {
        label: "Clinical",
        children: [
            {
                label: "Summary",
                children: [
                    { label: "AllergyIntolerance 3", children: [] },
                    { label: "AdverseEvent 2", children: [] },
                    { label: "Condition (Problem) 5", children: [] },
                    { label: "Procedure 4", children: [] },
                    { label: "FamilyMemberHistory 2", children: [] },
                    { label: "ClinicalImpression 1", children: [] },
                    { label: "DetectedIssue 2", children: [] },
                ],
            },
            {
                label: "Diagnostics",
                children: [
                    { label: "Observation N", children: [] },
                    { label: "DocumentReference 4", children: [] },
                    { label: "DiagnosticReport 3", children: [] },
                    { label: "Specimen 2", children: [] },
                    { label: "BodyStructure 1", children: [] },
                    { label: "ImagingSelection 1", children: [] },
                    { label: "ImagingStudy 4", children: [] },
                    { label: "QuestionnaireResponse 5", children: [] },
                    { label: "MolecularSequence 1", children: [] },
                    { label: "GenomicStudy 0", children: [] },
                ],
            },
            {
                label: "Medications",
                children: [
                    { label: "MedicationRequest 4", children: [] },
                    { label: "MedicationAdministration 2", children: [] },
                    { label: "MedicationDispense 2", children: [] },
                    { label: "MedicationStatement 4", children: [] },
                    { label: "Medication 4", children: [] },
                    { label: "MedicationKnowledge 1", children: [] },
                    { label: "Immunization 5", children: [] },
                    { label: "ImmunizationEvaluation 1", children: [] },
                    { label: "ImmunizationRecommendation 1", children: [] },
                    { label: "FormularyItem 0", children: [] },
                ],
            },
            {
                label: "Care Provision",
                children: [
                    { label: "CarePlan 2", children: [] },
                    { label: "CareTeam 2", children: [] },
                    { label: "Goal 2", children: [] },
                    { label: "ServiceRequest 4", children: [] },
                    { label: "NutritionOrder 2", children: [] },
                    { label: "NutritionIntake 1", children: [] },
                    { label: "VisionPrescription 3", children: [] },
                    { label: "RiskAssessment 2", children: [] },
                    { label: "RequestOrchestration 4", children: [] },
                ],
            },
            {
                label: "Request & Response",
                children: [
                    { label: "Communication 2", children: [] },
                    { label: "CommunicationRequest 2", children: [] },
                    { label: "DeviceRequest 1", children: [] },
                    { label: "DeviceDispense 0", children: [] },
                    { label: "DeviceAssociation 0", children: [] },
                    { label: "DeviceUsage 1", children: [] },
                    { label: "BiologicallyDerivedProductDispense 0", children: [] },
                    { label: "GuidanceResponse 2", children: [] },
                    { label: "SupplyRequest 1", children: [] },
                    { label: "SupplyDelivery 1", children: [] },
                    { label: "InventoryItem 0", children: [] },
                    { label: "InventoryReport 0", children: [] },
                ],
            },
        ],
    },
    {
        label: "Financial",
        children: [
            {
                label: "Support",
                children: [
                    { label: "Coverage 4", children: [] },
                    { label: "CoverageEligibilityRequest 4", children: [] },
                    { label: "CoverageEligibilityResponse 4", children: [] },
                    { label: "EnrollmentRequest 0", children: [] },
                    { label: "EnrollmentResponse 0", children: [] },
                ],
            },
            {
                label: "Billing",
                children: [
                    { label: "Claim 2", children: [] },
                    { label: "ClaimResponse 2", children: [] },
                    { label: "Invoice 0", children: [] },
                ],
            },
            {
                label: "Payment",
                children: [
                    { label: "PaymentNotice 4", children: [] },
                    { label: "PaymentReconciliation 4", children: [] },
                ],
            },
            {
                label: "General",
                children: [
                    { label: "Account 2", children: [] },
                    { label: "ChargeItem 1", children: [] },
                    { label: "ChargeItemDefinition 1", children: [] },
                    { label: "Contract 1", children: [] },
                    { label: "ExplanationOfBenefit 2", children: [] },
                    { label: "InsurancePlan 0", children: [] },
                ],
            },
        ],
    },
    {
        label: "Specialized",
        children: [
            {
                label: "Public Health & Research",
                children: [
                    { label: "ResearchStudy 0", children: [] },
                    { label: "ResearchSubject 0", children: [] },
                ],
            },
            {
                label: "Definitional Artifacts",
                children: [
                    { label: "ActivityDefinition 4", children: [] },
                    { label: "ConditionDefinition 0", children: [] },
                    { label: "DeviceDefinition 1", children: [] },
                    { label: "EventDefinition 0", children: [] },
                    { label: "ObservationDefinition 1", children: [] },
                    { label: "PlanDefinition 4", children: [] },
                    { label: "Questionnaire 5", children: [] },
                    { label: "SpecimenDefinition 1", children: [] },
                    { label: "ExampleScenario 1", children: [] },
                    { label: "ActorDefinition 1", children: [] },
                    { label: "Requirements 1", children: [] },
                ],
            },
            {
                label: "Evidence-Based Medicine",
                children: [
                    { label: "ArtifactAssessment 1", children: [] },
                    { label: "Citation 1", children: [] },
                    { label: "Evidence 1", children: [] },
                    { label: "EvidenceReport 0", children: [] },
                    { label: "EvidenceVariable 1", children: [] },
                ],
            },
            {
                label: "Quality Reporting & Testing",
                children: [
                    { label: "Measure 4", children: [] },
                    { label: "MeasureReport 4", children: [] },
                    { label: "TestPlan 0", children: [] },
                    { label: "TestScript 4", children: [] },
                    { label: "TestReport 1", children: [] },
                ],
            },
            {
                label: "Medication Definition",
                children: [
                    { label: "MedicinalProductDefinition 3", children: [] },
                    { label: "PackagedProductDefinition 2", children: [] },
                    { label: "AdministrableProductDefinition 2", children: [] },
                    { label: "ManufacturedItemDefinition 2", children: [] },
                    { label: "Ingredient 2", children: [] },
                    { label: "ClinicalUseDefinition 2", children: [] },
                    { label: "RegulatedAuthorization 2", children: [] },
                    { label: "SubstanceDefinition 1", children: [] },
                    { label: "SubstanceNucleicAcid 0", children: [] },
                    { label: "SubstancePolymer 0", children: [] },
                    { label: "SubstanceProtein 0", children: [] },
                    { label: "SubstanceReferenceInformation 0", children: [] },
                    { label: "SubstanceSourceMaterial 0", children: [] },
                ],
            },
        ],
    },
];

// console.log(Resources);
// resources.js