// Proposed service catalogue. Provider availability and scope require confirmation.
export const serviceGroups = [
  {
    "id": "fire-safety",
    "name": "Fire safety",
    "icon": "shield",
    "heading": "Fire safety services in London",
    "description": "Understand the risks, check your protective systems and plan the next steps for your building. Explore assessments, inspections and maintenance enquiries.",
    "image": "/images/cleaning-service-provided.webp",
    "alt": "Living room with a cream sofa and green cushion",
    "services": [
      {
        "slug": "fire-risk-assessment",
        "name": "Fire risk assessment",
        "body": "Request a review of fire hazards, escape arrangements and existing precautions, with findings and recommended actions tailored to your premises."
      },
      {
        "slug": "fire-door-inspection",
        "name": "Fire door inspection",
        "body": "Discuss inspections of fire doors, frames, seals, closers and visible defects in communal areas, workplaces and residential buildings."
      },
      {
        "slug": "fire-extinguisher-servicing",
        "name": "Fire extinguisher servicing",
        "body": "Enquire about inspection, servicing and replacement of portable fire extinguishers, with the equipment and site requirements agreed in advance."
      },
      {
        "slug": "fire-alarm-installation-testing",
        "name": "Fire alarm installation & testing",
        "body": "Discuss fire alarm installation, inspection, testing and maintenance for your property, including existing systems and any reported faults."
      },
      {
        "slug": "emergency-lighting",
        "name": "Emergency lighting installation & testing",
        "body": "Enquire about emergency lighting along escape routes, including installation, functional checks, duration testing and fault investigation."
      },
      {
        "slug": "smoke-heat-alarms",
        "name": "Smoke & heat alarms",
        "body": "Discuss the installation, replacement and testing of smoke and heat alarms in homes, rental properties and shared accommodation."
      },
      {
        "slug": "fire-strategy-report",
        "name": "Fire strategy report",
        "body": "Enquire about a fire strategy for a new build, conversion or existing premises, with specialist input and a clearly agreed project scope."
      }
    ]
  },
  {
    "id": "electrical-safety",
    "name": "Electrical safety",
    "icon": "shield",
    "heading": "Electrical safety services in London",
    "description": "Arrange enquiries for fixed wiring inspections, appliance testing and electrical upgrades for homes, rental properties and commercial premises.",
    "image": "/images/moving-service-provided.webp",
    "alt": "Packed cardboard boxes and hand trolley in a room",
    "services": [
      {
        "slug": "residential-eicr",
        "name": "Residential EICR",
        "body": "Request an Electrical Installation Condition Report for a house, flat or rental property to assess the condition of the fixed electrical installation."
      },
      {
        "slug": "commercial-eicr",
        "name": "Commercial EICR",
        "body": "Discuss fixed electrical inspection and testing for offices, shops, hospitality venues and other commercial buildings."
      },
      {
        "slug": "pat-testing",
        "name": "Portable appliance testing (PAT)",
        "body": "Enquire about inspection and testing of portable electrical equipment, with an asset list and results for the items covered."
      },
      {
        "slug": "consumer-unit-replacement",
        "name": "Consumer unit replacement",
        "body": "Discuss replacing or upgrading a consumer unit, including the existing installation, proposed work and testing requirements."
      }
    ]
  },
  {
    "id": "gas-safety",
    "name": "Gas & carbon monoxide safety",
    "icon": "shield",
    "heading": "Gas & carbon monoxide safety services in London",
    "description": "Discuss gas appliance checks and carbon monoxide alarm requirements for your property, with the provider and exact scope confirmed before booking.",
    "image": "/images/cleaning-service-provided.webp",
    "alt": "Living room with a cream sofa and green cushion",
    "services": [
      {
        "slug": "gas-safety-check",
        "name": "Gas safety check & landlord record",
        "body": "Enquire about checks on the gas appliances, flues and associated installation included in your agreed visit, and the relevant landlord gas safety record."
      },
      {
        "slug": "carbon-monoxide-alarms",
        "name": "Carbon monoxide alarm installation & testing",
        "body": "Discuss carbon monoxide alarm installation, replacement and testing, with positioning and equipment suitability assessed for your premises."
      }
    ]
  },
  {
    "id": "property-surveys",
    "name": "Property surveys & management",
    "icon": "shield",
    "heading": "Property surveys & management services in London",
    "description": "Plan specialist surveys and organise safety requirements across a single property or a portfolio, starting with the records and priorities you already have.",
    "image": "/images/moving-service-provided.webp",
    "alt": "Packed cardboard boxes and hand trolley in a room",
    "services": [
      {
        "slug": "asbestos-management-survey",
        "name": "Asbestos management survey",
        "body": "Enquire about a management survey to identify suspected asbestos-containing materials and help plan their management within the agreed survey scope."
      },
      {
        "slug": "property-safety-management",
        "name": "Property safety coordination",
        "body": "Discuss a coordinated approach to inspection enquiries, existing reports and follow-up actions across your property or portfolio."
      }
    ]
  }
] as const;

export const serviceDetails: Record<string, { image: string; alt: string; intro: string; scope: string[]; prepare: string[] }> = {
  "fire-risk-assessment": {
    "image": "/images/cleaning-service-provided.webp",
    "alt": "Living room with a cream sofa and green cushion",
    "intro": "Request a review of fire hazards, escape arrangements and existing precautions, with findings and recommended actions tailored to your premises.",
    "scope": [
      "Property use, occupancy and people who may need assistance",
      "Escape routes and existing fire precautions",
      "Written findings and prioritised recommendations"
    ],
    "prepare": [
      "Building address, use and approximate size",
      "Previous assessments and any outstanding actions",
      "Access to communal areas and relevant records"
    ]
  },
  "fire-door-inspection": {
    "image": "/images/cleaning-service-provided.webp",
    "alt": "Living room with a cream sofa and green cushion",
    "intro": "Discuss inspections of fire doors, frames, seals, closers and visible defects in communal areas, workplaces and residential buildings.",
    "scope": [
      "Door leaves, frames, glazing and visible condition",
      "Hinges, self-closing devices and smoke seals",
      "Recorded defects and recommended next steps"
    ],
    "prepare": [
      "Number and location of doors",
      "Door schedules and existing inspection records",
      "Arrangements for access to occupied areas"
    ]
  },
  "fire-extinguisher-servicing": {
    "image": "/images/cleaning-service-provided.webp",
    "alt": "Living room with a cream sofa and green cushion",
    "intro": "Enquire about inspection, servicing and replacement of portable fire extinguishers, with the equipment and site requirements agreed in advance.",
    "scope": [
      "Equipment inventory and visible condition",
      "Servicing requirements and location review",
      "Service records and replacement recommendations"
    ],
    "prepare": [
      "Extinguisher types, quantities and locations",
      "Previous service dates and records",
      "Site activities and access arrangements"
    ]
  },
  "fire-alarm-installation-testing": {
    "image": "/images/cleaning-service-provided.webp",
    "alt": "Living room with a cream sofa and green cushion",
    "intro": "Discuss fire alarm installation, inspection, testing and maintenance for your property, including existing systems and any reported faults.",
    "scope": [
      "Existing panel, detectors and system information",
      "Testing or installation requirements",
      "Fault reporting and maintenance records"
    ],
    "prepare": [
      "System type and any drawings or logbooks",
      "Known faults and previous maintenance reports",
      "Occupancy, access and alarm test arrangements"
    ]
  },
  "emergency-lighting": {
    "image": "/images/cleaning-service-provided.webp",
    "alt": "Living room with a cream sofa and green cushion",
    "intro": "Enquire about emergency lighting along escape routes, including installation, functional checks, duration testing and fault investigation.",
    "scope": [
      "Existing fittings and escape route layout",
      "Testing or installation scope",
      "Defect records and follow-up recommendations"
    ],
    "prepare": [
      "Lighting inventory and test logbook",
      "Previous reports and known faults",
      "Suitable times for testing and access"
    ]
  },
  "smoke-heat-alarms": {
    "image": "/images/cleaning-service-provided.webp",
    "alt": "Living room with a cream sofa and green cushion",
    "intro": "Discuss the installation, replacement and testing of smoke and heat alarms in homes, rental properties and shared accommodation.",
    "scope": [
      "Existing alarms and reported issues",
      "Suitable alarm types and positioning to assess",
      "Installation, replacement or testing requirements"
    ],
    "prepare": [
      "Property layout and occupancy",
      "Existing alarm type and power supply",
      "Any fire risk assessment recommendations"
    ]
  },
  "fire-strategy-report": {
    "image": "/images/cleaning-service-provided.webp",
    "alt": "Living room with a cream sofa and green cushion",
    "intro": "Enquire about a fire strategy for a new build, conversion or existing premises, with specialist input and a clearly agreed project scope.",
    "scope": [
      "Building use, layout and project objectives",
      "Escape strategy and protection measures to consider",
      "Design information and coordination requirements"
    ],
    "prepare": [
      "Floor plans and relevant project drawings",
      "Planning stage and proposed building use",
      "Existing strategy and assessment documents"
    ]
  },
  "residential-eicr": {
    "image": "/images/moving-service-provided.webp",
    "alt": "Packed cardboard boxes and hand trolley in a room",
    "intro": "Request an Electrical Installation Condition Report for a house, flat or rental property to assess the condition of the fixed electrical installation.",
    "scope": [
      "Agreed inspection and testing of fixed wiring",
      "Observations and report outcome",
      "Any remedial requirements quoted separately"
    ],
    "prepare": [
      "Property type and approximate circuit count",
      "Previous electrical reports and known faults",
      "Access to the consumer unit and occupied rooms"
    ]
  },
  "commercial-eicr": {
    "image": "/images/moving-service-provided.webp",
    "alt": "Packed cardboard boxes and hand trolley in a room",
    "intro": "Discuss fixed electrical inspection and testing for offices, shops, hospitality venues and other commercial buildings.",
    "scope": [
      "Installation scope and agreed limitations",
      "Inspection, testing and recorded observations",
      "Reporting and remedial recommendations"
    ],
    "prepare": [
      "Premises use, size and distribution board details",
      "Existing reports and installation records",
      "Operating hours and shutdown restrictions"
    ]
  },
  "pat-testing": {
    "image": "/images/moving-service-provided.webp",
    "alt": "Packed cardboard boxes and hand trolley in a room",
    "intro": "Enquire about inspection and testing of portable electrical equipment, with an asset list and results for the items covered.",
    "scope": [
      "Equipment inventory and visual inspection",
      "Appropriate tests for the equipment included",
      "Recorded results and identification of failed items"
    ],
    "prepare": [
      "Approximate number and types of appliances",
      "Equipment locations and access requirements",
      "Previous asset registers or test records"
    ]
  },
  "consumer-unit-replacement": {
    "image": "/images/moving-service-provided.webp",
    "alt": "Packed cardboard boxes and hand trolley in a room",
    "intro": "Discuss replacing or upgrading a consumer unit, including the existing installation, proposed work and testing requirements.",
    "scope": [
      "Existing board and installation assessment",
      "Replacement specification and agreed exclusions",
      "Testing and handover documentation to confirm"
    ],
    "prepare": [
      "Photographs of the current consumer unit",
      "Recent EICR and any known electrical issues",
      "Access and suitable power interruption times"
    ]
  },
  "gas-safety-check": {
    "image": "/images/cleaning-service-provided.webp",
    "alt": "Living room with a cream sofa and green cushion",
    "intro": "Enquire about checks on the gas appliances, flues and associated installation included in your agreed visit, and the relevant landlord gas safety record.",
    "scope": [
      "Appliances and flues included in the agreed scope",
      "Safety check findings and relevant record",
      "Any faults and further work to discuss separately"
    ],
    "prepare": [
      "Address and appliance types and quantities",
      "Previous gas safety record and known problems",
      "Access to appliances, meter and relevant areas"
    ]
  },
  "carbon-monoxide-alarms": {
    "image": "/images/cleaning-service-provided.webp",
    "alt": "Living room with a cream sofa and green cushion",
    "intro": "Discuss carbon monoxide alarm installation, replacement and testing, with positioning and equipment suitability assessed for your premises.",
    "scope": [
      "Existing alarms and their condition",
      "Proposed alarm locations and equipment",
      "Installation and functional testing requirements"
    ],
    "prepare": [
      "Rooms containing fuel-burning appliances",
      "Alarm models, ages and any reported faults",
      "Property layout and access arrangements"
    ]
  },
  "asbestos-management-survey": {
    "image": "/images/moving-service-provided.webp",
    "alt": "Packed cardboard boxes and hand trolley in a room",
    "intro": "Enquire about a management survey to identify suspected asbestos-containing materials and help plan their management within the agreed survey scope.",
    "scope": [
      "Accessible areas and survey limitations",
      "Suspected materials and sampling scope to agree",
      "Findings and management recommendations"
    ],
    "prepare": [
      "Building age, layout and available asbestos records",
      "Areas to be surveyed and access restrictions",
      "Details of any planned building work"
    ]
  },
  "property-safety-management": {
    "image": "/images/moving-service-provided.webp",
    "alt": "Packed cardboard boxes and hand trolley in a room",
    "intro": "Discuss a coordinated approach to inspection enquiries, existing reports and follow-up actions across your property or portfolio.",
    "scope": [
      "Property and equipment information to collate",
      "Inspection priorities and existing records",
      "Outstanding actions and future visits to discuss"
    ],
    "prepare": [
      "Property list and named access contacts",
      "Existing certificates and assessment reports",
      "Priority dates and outstanding recommendations"
    ]
  }
};
