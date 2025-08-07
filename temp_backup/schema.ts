export const schema = `
  type Customer @model @auth(rules: [
    { allow: owner },
    { allow: groups, groups: ["Admin"], operations: [read, create, update, delete] },
    { allow: private, operations: [read] }
  ]) {
    id: ID!
    firstName: String!
    lastName: String!
    email: String! @index(name: "byEmail", queryField: "customerByEmail")
    phone: String
    address: String
    city: String
    state: String
    zipCode: String
    carProfiles: [CarProfile] @hasMany
    appointments: [Appointment] @hasMany
    createdAt: AWSDateTime
    updatedAt: AWSDateTime
  }

  type CarProfile @model @auth(rules: [
    { allow: owner },
    { allow: groups, groups: ["Admin"], operations: [read, create, update, delete] }
  ]) {
    id: ID!
    customerId: ID! @index(name: "byCustomer", queryField: "carProfilesByCustomer")
    customer: Customer @belongsTo(fields: ["customerId"])
    make: String!
    model: String!
    year: Int!
    licensePlate: String
    vin: String
    color: String
    appointments: [Appointment] @hasMany
    createdAt: AWSDateTime
    updatedAt: AWSDateTime
  }

  type Appointment @model @auth(rules: [
    { allow: owner },
    { allow: groups, groups: ["Admin"], operations: [read, create, update, delete] }
  ]) {
    id: ID!
    customerId: ID! @index(name: "byCustomer", queryField: "appointmentsByCustomer")
    customer: Customer @belongsTo(fields: ["customerId"])
    carProfileId: ID! @index(name: "byCarProfile", queryField: "appointmentsByCarProfile")
    carProfile: CarProfile @belongsTo(fields: ["carProfileId"])
    storeId: ID! @index(name: "byStore", queryField: "appointmentsByStore")
    store: AvailableStore @belongsTo(fields: ["storeId"])
    services: [String]!
    date: AWSDate!
    time: String!
    status: AppointmentStatus!
    totalPrice: Float
    notes: String
    createdAt: AWSDateTime
    updatedAt: AWSDateTime
  }

  type AvailableStore @model @auth(rules: [
    { allow: private, operations: [read] },
    { allow: groups, groups: ["Admin"], operations: [read, create, update, delete] }
  ]) {
    id: ID!
    name: String!
    address: String!
    city: String!
    state: String!
    zipCode: String!
    phone: String
    hours: String
    appointments: [Appointment] @hasMany
    availableServices: [AvailableService] @hasMany
    createdAt: AWSDateTime
    updatedAt: AWSDateTime
  }

  type AvailableService @model @auth(rules: [
    { allow: private, operations: [read] },
    { allow: groups, groups: ["Admin"], operations: [read, create, update, delete] }
  ]) {
    id: ID!
    name: String!
    description: String
    price: Float!
    estimatedTime: Int
    storeId: ID! @index(name: "byStore", queryField: "servicesByStore")
    store: AvailableStore @belongsTo(fields: ["storeId"])
    createdAt: AWSDateTime
    updatedAt: AWSDateTime
  }

  enum AppointmentStatus {
    SCHEDULED
    IN_PROGRESS
    COMPLETED
    CANCELLED
  }
`;