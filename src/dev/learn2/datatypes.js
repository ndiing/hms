let DataTypes, PrimitiveType, instant, time, date, dateTime, decimal, boolean, integer, string, uri, base64Binary, code, id, oid, unsignedInt, positiveInt, markdown, url, canonical, uuid, integer64, DataType, BackboneType, Identifier, HumanName, Address, ContactPoint, Timing, Quantity, SimpleQuantity, Attachment, Range, Period, Ratio, RatioRange, CodeableConcept, Coding, SampledData, Age, Distance, Duration, Count, Money, MoneyQuantity, Annotation, Signature, /* DataType, */ ContactDetail, Contributor, DataRequirement, ParameterDefinition, RelatedArtifact, TriggerDefinition, UsageContext, Expression, ExtendedContactDetail, VirtualServiceDetail, Availability, MonetaryComponent, /* DataType, */ /* BackboneType, */ Reference, Narrative, Extension, Meta, ElementDefinition, Dosage, xhtml, CodeableReference;

Coding = {
    system: "<uri>",
    version: "<string>",
    code: "<code>",
    display: "<string>",
    userSelected: "<boolean>",
};
CodeableConcept = {
    coding: [Coding],
    text: "<string>",
};
Identifier = {
    use: "<code>",
    type: CodeableConcept,
    system: "<uri>",
    value: "<string>",
    period: Period,

    // Reference
    // Organization
    assigner: {},
};
HumanName = {
    use: "<code>",
    text: "<string>",
    family: "<string>",
    given: ["<string>"],
    prefix: ["<string>"],
    suffix: ["<string>"],
    period: Period,
};
Address = {
    use: "<code>",
    type: "<code>",
    text: "<string>",
    line: ["<string>"],
    city: "<string>",
    district: "<string>",
    state: "<string>",
    postalCode: "<string>",
    country: "<string>",
    period: Period,
};
ContactPoint = {
    system: "<code>",
    value: "<string>",
    use: "<code>",
    rank: "<positiveInt>",
    period: Period,
};
Timing = {
    event: ["<dateTime>"],
    repeat: {
        boundsDuration: Duration,
        boundsRange: Range,
        boundsPeriod: Period,
        count: "<positiveInt>",
        countMax: "<positiveInt>",
        duration: "<decimal>",
        durationMax: "<decimal>",
        durationUnit: "<code>",
        frequency: "<positiveInt>",
        frequencyMax: "<positiveInt>",
        period: "<decimal>",
        periodMax: "<decimal>",
        periodUnit: "<code>",
        dayOfWeek: ["<code>"],
        timeOfDay: ["<time>"],
        when: ["<code>"],
        offset: "<unsignedInt>",
    },
    code: CodeableConcept,
};
Quantity = {
    value: "<decimal>",
    comparator: "<code>",
    unit: "<string>",
    system: "<uri>",
    code: "<code>",
};
SimpleQuantity = {
    value: "<decimal>",
    unit: "<string>",
    system: "<uri>",
    code: "<code>",
};
Attachment = {
    contentType: "<code>",
    language: "<code>",
    data: "<base64Binary>",
    url: "<url>",
    size: "<integer64>",
    hash: "<base64Binary>",
    title: "<string>",
    creation: "<dateTime>",
    height: "<positiveInt>",
    width: "<positiveInt>",
    frames: "<positiveInt>",
    duration: "<decimal>",
    pages: "<positiveInt>",
};
Range = {
    low: SimpleQuantity,
    high: SimpleQuantity,
};
Period = {
    start: "<dateTime>",
    end: "<dateTime>",
};
Ratio = {
    numerator: Quantity,
    denominator: SimpleQuantity,
};
RatioRange = {
    lowNumerator: SimpleQuantity,
    highNumerator: SimpleQuantity,
    denominator: SimpleQuantity,
};
SampledData = {
    origin: SimpleQuantity,
    interval: "<decimal>",
    intervalUnit: "<code>",
    factor: "<decimal>",
    lowerLimit: "<decimal>",
    upperLimit: "<decimal>",
    dimensions: "<positiveInt>",
    codeMap: "<canonical(ConceptMap)>",
    offsets: "<string>",
    data: "<string>",
};
Money = {
    value: "<decimal>",
    currency: "<code>",
};
Annotation = {
    // Reference
    // Organization|Patient|Practitioner|PractitionerRole|RelatedPerson
    authorReference: {},

    authorString: "<string>",
    time: "<dateTime>",
    text: "<markdown>",
};
Signature = {
    type: [Coding],
    when: "<instant>",

    // Reference
    // Device|Organization|Patient|Practitioner|PractitionerRole|RelatedPerson
    who: {},

    // Reference
    // Device|Organization|Patient|Practitioner|PractitionerRole|RelatedPerson
    onBehalfOf: {},

    targetFormat: "<code>",
    sigFormat: "<code>",
    data: "<base64Binary>",
};

module.exports = {
    Coding,
    CodeableConcept,
    Identifier,
    HumanName,
    Address,
    ContactPoint,
    Timing,
    Quantity,
    Attachment,
    Range,
    Period,
    Ratio,
    RatioRange,
    SampledData,
    Money,
    Annotation,
    Signature,
};

