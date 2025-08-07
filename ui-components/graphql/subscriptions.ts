/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAppointment = /* GraphQL */ `
  subscription OnCreateAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onCreateAppointment(filter: $filter) {
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
export const onCreateAvailableService = /* GraphQL */ `
  subscription OnCreateAvailableService(
    $filter: ModelSubscriptionAvailableServiceFilterInput
  ) {
    onCreateAvailableService(filter: $filter) {
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
export const onCreateAvailableStore = /* GraphQL */ `
  subscription OnCreateAvailableStore(
    $filter: ModelSubscriptionAvailableStoreFilterInput
  ) {
    onCreateAvailableStore(filter: $filter) {
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
export const onCreateCarProfile = /* GraphQL */ `
  subscription OnCreateCarProfile(
    $filter: ModelSubscriptionCarProfileFilterInput
  ) {
    onCreateCarProfile(filter: $filter) {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onCreateCustomer(filter: $filter) {
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
export const onCreateCustomerProfile = /* GraphQL */ `
  subscription OnCreateCustomerProfile(
    $filter: ModelSubscriptionCustomerProfileFilterInput
  ) {
    onCreateCustomerProfile(filter: $filter) {
      createdAt
      customerId
      id
      notificationsEnabled
      updatedAt
      __typename
    }
  }
`;
export const onCreateInventory = /* GraphQL */ `
  subscription OnCreateInventory(
    $filter: ModelSubscriptionInventoryFilterInput
  ) {
    onCreateInventory(filter: $filter) {
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
export const onCreateTowTruckService = /* GraphQL */ `
  subscription OnCreateTowTruckService(
    $filter: ModelSubscriptionTowTruckServiceFilterInput
  ) {
    onCreateTowTruckService(filter: $filter) {
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
export const onDeleteAppointment = /* GraphQL */ `
  subscription OnDeleteAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onDeleteAppointment(filter: $filter) {
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
export const onDeleteAvailableService = /* GraphQL */ `
  subscription OnDeleteAvailableService(
    $filter: ModelSubscriptionAvailableServiceFilterInput
  ) {
    onDeleteAvailableService(filter: $filter) {
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
export const onDeleteAvailableStore = /* GraphQL */ `
  subscription OnDeleteAvailableStore(
    $filter: ModelSubscriptionAvailableStoreFilterInput
  ) {
    onDeleteAvailableStore(filter: $filter) {
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
export const onDeleteCarProfile = /* GraphQL */ `
  subscription OnDeleteCarProfile(
    $filter: ModelSubscriptionCarProfileFilterInput
  ) {
    onDeleteCarProfile(filter: $filter) {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onDeleteCustomer(filter: $filter) {
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
export const onDeleteCustomerProfile = /* GraphQL */ `
  subscription OnDeleteCustomerProfile(
    $filter: ModelSubscriptionCustomerProfileFilterInput
  ) {
    onDeleteCustomerProfile(filter: $filter) {
      createdAt
      customerId
      id
      notificationsEnabled
      updatedAt
      __typename
    }
  }
`;
export const onDeleteInventory = /* GraphQL */ `
  subscription OnDeleteInventory(
    $filter: ModelSubscriptionInventoryFilterInput
  ) {
    onDeleteInventory(filter: $filter) {
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
export const onDeleteTowTruckService = /* GraphQL */ `
  subscription OnDeleteTowTruckService(
    $filter: ModelSubscriptionTowTruckServiceFilterInput
  ) {
    onDeleteTowTruckService(filter: $filter) {
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
export const onUpdateAppointment = /* GraphQL */ `
  subscription OnUpdateAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onUpdateAppointment(filter: $filter) {
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
export const onUpdateAvailableService = /* GraphQL */ `
  subscription OnUpdateAvailableService(
    $filter: ModelSubscriptionAvailableServiceFilterInput
  ) {
    onUpdateAvailableService(filter: $filter) {
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
export const onUpdateAvailableStore = /* GraphQL */ `
  subscription OnUpdateAvailableStore(
    $filter: ModelSubscriptionAvailableStoreFilterInput
  ) {
    onUpdateAvailableStore(filter: $filter) {
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
export const onUpdateCarProfile = /* GraphQL */ `
  subscription OnUpdateCarProfile(
    $filter: ModelSubscriptionCarProfileFilterInput
  ) {
    onUpdateCarProfile(filter: $filter) {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onUpdateCustomer(filter: $filter) {
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
export const onUpdateCustomerProfile = /* GraphQL */ `
  subscription OnUpdateCustomerProfile(
    $filter: ModelSubscriptionCustomerProfileFilterInput
  ) {
    onUpdateCustomerProfile(filter: $filter) {
      createdAt
      customerId
      id
      notificationsEnabled
      updatedAt
      __typename
    }
  }
`;
export const onUpdateInventory = /* GraphQL */ `
  subscription OnUpdateInventory(
    $filter: ModelSubscriptionInventoryFilterInput
  ) {
    onUpdateInventory(filter: $filter) {
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
export const onUpdateTowTruckService = /* GraphQL */ `
  subscription OnUpdateTowTruckService(
    $filter: ModelSubscriptionTowTruckServiceFilterInput
  ) {
    onUpdateTowTruckService(filter: $filter) {
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
