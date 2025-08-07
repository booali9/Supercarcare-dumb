/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAppointment = /* GraphQL */ `
  query GetAppointment($id: ID!) {
    getAppointment(id: $id) {
      appointmentDate
      carProfileId
      createdAt
      customerId
      dropOffOption
      id
      pickupDropOffInfo
      serviceDetails
      serviceType
      status
      storeId
      towTruckRequired
      updatedAt
      __typename
    }
  }
`;
export const getAvailableService = /* GraphQL */ `
  query GetAvailableService($id: ID!) {
    getAvailableService(id: $id) {
      createdAt
      id
      inventoryRequired
      serviceName
      storeId
      updatedAt
      __typename
    }
  }
`;
export const getAvailableStore = /* GraphQL */ `
  query GetAvailableStore($id: ID!) {
    getAvailableStore(id: $id) {
      address {
        city
        country
        postalCode
        state
        street
        __typename
      }
      coordinates {
        lat
        long
        __typename
      }
      createdAt
      email
      id
      name
      phone
      updatedAt
      __typename
    }
  }
`;
export const getCarProfile = /* GraphQL */ `
  query GetCarProfile($id: ID!) {
    getCarProfile(id: $id) {
      createdAt
      id
      make
      modelYear
      tireSpecifications
      trim
      updatedAt
      vinNumber
      wheelSpecifications
      __typename
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      address {
        city
        country
        postalCode
        state
        street
        __typename
      }
      createdAt
      email
      id
      name
      phone
      updatedAt
      __typename
    }
  }
`;
export const getCustomerProfile = /* GraphQL */ `
  query GetCustomerProfile($id: ID!) {
    getCustomerProfile(id: $id) {
      createdAt
      customerId
      id
      notificationsEnabled
      updatedAt
      __typename
    }
  }
`;
export const getInventory = /* GraphQL */ `
  query GetInventory($id: ID!) {
    getInventory(id: $id) {
      createdAt
      id
      quantityAvailable
      size
      storeId
      tireType
      updatedAt
      __typename
    }
  }
`;
export const getTowTruckService = /* GraphQL */ `
  query GetTowTruckService($id: ID!) {
    getTowTruckService(id: $id) {
      available
      contactEmail
      contactName
      contactPhone
      createdAt
      id
      storeId
      updatedAt
      __typename
    }
  }
`;
export const listAppointments = /* GraphQL */ `
  query ListAppointments(
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        appointmentDate
        carProfileId
        createdAt
        customerId
        dropOffOption
        id
        pickupDropOffInfo
        serviceDetails
        serviceType
        status
        storeId
        towTruckRequired
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listAvailableServices = /* GraphQL */ `
  query ListAvailableServices(
    $filter: ModelAvailableServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAvailableServices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        createdAt
        id
        inventoryRequired
        serviceName
        storeId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listAvailableStores = /* GraphQL */ `
  query ListAvailableStores(
    $filter: ModelAvailableStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAvailableStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        email
        id
        name
        phone
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listCarProfiles = /* GraphQL */ `
  query ListCarProfiles(
    $filter: ModelCarProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        id
        make
        modelYear
        tireSpecifications
        trim
        updatedAt
        vinNumber
        wheelSpecifications
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listCustomerProfiles = /* GraphQL */ `
  query ListCustomerProfiles(
    $filter: ModelCustomerProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomerProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        createdAt
        customerId
        id
        notificationsEnabled
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        email
        id
        name
        phone
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listInventories = /* GraphQL */ `
  query ListInventories(
    $filter: ModelInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInventories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        id
        quantityAvailable
        size
        storeId
        tireType
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTowTruckServices = /* GraphQL */ `
  query ListTowTruckServices(
    $filter: ModelTowTruckServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTowTruckServices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        available
        contactEmail
        contactName
        contactPhone
        createdAt
        id
        storeId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
