const fetch = require("../../lib/fetch.js");
const { write } = require("../../lib/file.js");
const { JSDOM } = require("jsdom");
const { flattenObject, unflattenObject } = require("../../lib/helper.js");

// demo();
async function demo() {
    const datatypes = [
        //
        "DataTypes",
        "PrimitiveType",
        "instant",
        "time",
        "date",
        "dateTime",
        "decimal",
        "boolean",
        "integer",
        "string",
        "uri",
        "base64Binary",
        "code",
        "id",
        "oid",
        "unsignedInt",
        "positiveInt",
        "markdown",
        "url",
        "canonical",
        "uuid",
        "integer64",
        "DataType",
        "BackboneType",
        "Identifier",
        "HumanName",
        "Address",
        "ContactPoint",
        "Timing",
        "Quantity",
        "SimpleQuantity",
        "Attachment",
        "Range",
        "Period",
        "Ratio",
        "RatioRange",
        "CodeableConcept",
        "Coding",
        "SampledData",
        "Age",
        "Distance",
        "Duration",
        "Count",
        "Money",
        "MoneyQuantity",
        "Annotation",
        "Signature",
        "DataType",
        "ContactDetail",
        "Contributor",
        "DataRequirement",
        "ParameterDefinition",
        "RelatedArtifact",
        "TriggerDefinition",
        "UsageContext",
        "Expression",
        "ExtendedContactDetail",
        "VirtualServiceDetail",
        "Availability",
        "MonetaryComponent",
        "DataType",
        "BackboneType",
        "Reference",
        "Narrative",
        "Extension",
        "Meta",
        "ElementDefinition",
        "Dosage",
        "xhtml",
        "CodeableReference",
    ];
    const resourcelist = ["Resources", "CapabilityStatement", "StructureDefinition", "ImplementationGuide", "SearchParameter", "MessageDefinition", "OperationDefinition", "CompartmentDefinition", "StructureMap", "GraphDefinition", "CodeSystem", "ValueSet", "ConceptMap", "NamingSystem", "TerminologyCapabilities", "Provenance", "AuditEvent", "Permission", "Consent", "Composition", "DocumentReference", "Basic", "Binary", "Bundle", "Linkage", "MessageHeader", "OperationOutcome", "Parameters", "Subscription", "SubscriptionStatus", "SubscriptionTopic", "Patient", "Practitioner", "PractitionerRole", "RelatedPerson", "Person", "Group", "Organization", "OrganizationAffiliation", "HealthcareService", "Endpoint", "Location", "Substance", "BiologicallyDerivedProduct", "Device", "DeviceMetric", "NutritionProduct", "Task", "Transport", "Appointment", "AppointmentResponse", "Schedule", "Slot", "VerificationResult", "Encounter", "EncounterHistory", "EpisodeOfCare", "Flag", "List", "Library", "AllergyIntolerance", "AdverseEvent", "Condition", "Procedure", "FamilyMemberHistory", "ClinicalImpression", "DetectedIssue", "Observation", "DocumentReference", "DiagnosticReport", "Specimen", "BodyStructure", "ImagingSelection", "ImagingStudy", "QuestionnaireResponse", "MolecularSequence", "GenomicStudy", "MedicationRequest", "MedicationAdministration", "MedicationDispense", "MedicationStatement", "Medication", "MedicationKnowledge", "Immunization", "ImmunizationEvaluation", "ImmunizationRecommendation", "FormularyItem", "CarePlan", "CareTeam", "Goal", "ServiceRequest", "NutritionOrder", "NutritionIntake", "VisionPrescription", "RiskAssessment", "RequestOrchestration", "Communication", "CommunicationRequest", "DeviceRequest", "DeviceDispense", "DeviceAssociation", "DeviceUsage", "BiologicallyDerivedProductDispense", "GuidanceResponse", "SupplyRequest", "SupplyDelivery", "InventoryItem", "InventoryReport", "Coverage", "CoverageEligibilityRequest", "CoverageEligibilityResponse", "EnrollmentRequest", "EnrollmentResponse", "Claim", "ClaimResponse", "Invoice", "PaymentNotice", "PaymentReconciliation", "Account", "ChargeItem", "ChargeItemDefinition", "Contract", "ExplanationOfBenefit", "InsurancePlan", "ResearchStudy", "ResearchSubject", "ActivityDefinition", "ConditionDefinition", "DeviceDefinition", "EventDefinition", "ObservationDefinition", "PlanDefinition", "Questionnaire", "SpecimenDefinition", "ExampleScenario", "ActorDefinition", "Requirements", "ArtifactAssessment", "Citation", "Evidence", "EvidenceReport", "EvidenceVariable", "Measure", "MeasureReport", "TestPlan", "TestScript", "TestReport", "MedicinalProductDefinition", "PackagedProductDefinition", "AdministrableProductDefinition", "ManufacturedItemDefinition", "Ingredient", "ClinicalUseDefinition", "RegulatedAuthorization", "SubstanceDefinition", "SubstanceNucleicAcid", "SubstancePolymer", "SubstanceProtein", "SubstanceReferenceInformation", "SubstanceSourceMaterial"];
    let data = {};
    try {
        let res = await fetch("https://www.hl7.org/fhir/datatypes.html");
        res = await res.text();
        const { window } = new JSDOM(res);
        const { document } = window;
        for (const name of datatypes) {
            data[name] = document.querySelector("#tabs-" + name + " #json-inner")?.textContent;
        }
    } catch (error) {
        
    }
    write(__dirname + "/datatypes.json", data);

    let data2 = {};
    for (const name of resourcelist) {
        try {
            let res = await fetch(`https://www.hl7.org/fhir/${name}.html`);
            res = await res.text();
            const { window } = new JSDOM(res);
            const { document } = window;
            data2[name] = document.querySelector("#json-inner")?.textContent;
        } catch (error) {
            
        }
    }
    write(__dirname + "/resourcelist.json", data2);
}

// demo2();
async function demo2() {
    const datatypes = require("./datatypes.json");
    const resourcelist = require("./resourcelist.json");
    const data = {};
    for (const name in datatypes) {
        const value = datatypes[name];
        const json = JSON_eval(value);
        data[name] = json;
    }
    // console.log(data);
    write(__dirname + "/datatypes2.json", data);
    const data2 = {};
    for (const name in resourcelist) {
        const value = resourcelist[name];
        const json = JSON_eval(value);
        data2[name] = { id: "<int>", ...json };
    }
    // console.log(data2);
    write(__dirname + "/resourcelist2.json", data2);
}

function JSON_eval(value) {
    var DataTypes = null,
        PrimitiveType = null,
        instant = null,
        time = null,
        date = null,
        dateTime = null,
        decimal = null,
        boolean = null,
        integer = null,
        string = null,
        uri = null,
        base64Binary = null,
        code = null,
        id = null,
        oid = null,
        unsignedInt = null,
        positiveInt = null,
        markdown = null,
        url = null,
        canonical = null,
        uuid = null,
        integer64 = null,
        DataType = null,
        BackboneType = null,
        Identifier = null,
        HumanName = null,
        Address = null,
        ContactPoint = null,
        Timing = null,
        Quantity = null,
        SimpleQuantity = null,
        Attachment = null,
        Range = null,
        Period = null,
        Ratio = null,
        RatioRange = null,
        CodeableConcept = null,
        Coding = null,
        SampledData = null,
        Age = null,
        Distance = null,
        Duration = null,
        Count = null,
        Money = null,
        MoneyQuantity = null,
        Annotation = null,
        Signature = null,
        DataType = null,
        ContactDetail = null,
        Contributor = null,
        DataRequirement = null,
        ParameterDefinition = null,
        RelatedArtifact = null,
        TriggerDefinition = null,
        UsageContext = null,
        Expression = null,
        ExtendedContactDetail = null,
        VirtualServiceDetail = null,
        Availability = null,
        MonetaryComponent = null,
        DataType = null,
        BackboneType = null,
        Reference = null,
        Narrative = null,
        Extension = null,
        Meta = null,
        ElementDefinition = null,
        Dosage = null,
        xhtml = null,
        CodeableReference = null,
        Resource = null,
        ProductShelfLife = null,
        MarketingStatus = null;

    let res = "var json=" + value;
    res = res.replace(/\/\/.*?\n/g, "\n");
    res = res.replace(/"\n/g, '",\n');
    res = res.replace(/ Content as for .*? /g, "");
    res = res.replace(/ Ameliorating action taken.*?\n /g, "");
    res = res.replace(/ Specific date\/time or interval.*?\n /g, "");
    res = res.replace(/ Person or organization that provided the information.*?\n /g, "");
    res = res.replace(/ Reference to ChargeItem containing.*?\n /g, "");
    res = res.replace(/ The actual content of the.*?\n /g, "");
    res = res.replace(/ Pointer to a definition of.*?\n /g, "");
    res = res.replace(/ A numeric factor for the relations.*?\n /g, "");
    // res = res.replace(/\n/g, "");
    res = res.replace(/ (\<)([^\<]+)(\>)/g, '"$1$2$3"');
    res = res.replace(/(\[)(\<)([^\<]+)(\>)(\])/g, '["$1$2$3"]');
    res = res.replace(/ (\w+)\(([^\(]+)\)/g, ($, $1, $2) => `${$1}:"${$2.replace(/[ \n]/g, "")}"`);
    eval(res);
    return json;
}

// demo3();
async function demo3() {
    const datatypes = require("./datatypes2.json");
    const resourcelist = require("./resourcelist2.json");

    console.log(Object.keys(resourcelist).length)
    const data2 = [];
    // console.log(flattenObject(resourcelist.Encounter))
    // console.log(unflattenObject(flattenObject(resourcelist.Encounter)))

    // write(__dirname + "/resourcelist3.json", data2);
}
