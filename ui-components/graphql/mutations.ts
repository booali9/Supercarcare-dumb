/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAppointment = /* GraphQL */ `
  mutation CreateAppointment(
    $condition: ModelAppointmentConditionInput
    $input: CreateAppointmentInput!
  ) {
    createAppointment(condition: $condition, input: $input) {
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
export const createAvailableService = /* GraphQL */ `
  mutation CreateAvailableService(
    $condition: ModelAvailableServiceConditionInput
    $input: CreateAvailableServiceInput!
  ) {
    createAvailableService(condition: $condition, input: $input) {
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
export const createAvailableStore = /* GraphQL */ `
  mutation CreateAvailableStore(
    $condition: ModelAvailableStoreConditionInput
    $input: CreateAvailableStoreInput!
  ) {
    createAvailableStore(condition: $condition, input: $input) {
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
export const createCarProfile = /* GraphQL */ `
  mutation CreateCarProfile(
    $condition: ModelCarProfileConditionInput
    $input: CreateCarProfileInput!
  ) {
    createCarProfile(condition: $condition, input: $input) {
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
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $condition: ModelCustomerConditionInput
    $input: CreateCustomerInput!
  ) {
    createCustomer(condition: $condition, input: $input) {
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
export const createCustomerProfile = /* GraphQL */ `
  mutation CreateCustomerProfile(
    $condition: ModelCustomerProfileConditionInput
    $input: CreateCustomerProfileInput!
  ) {
    createCustomerProfile(condition: $condition, input: $input) {
      createdAt
      customerId
      id
      notificationsEnabled
      updatedAt
      __typename
    }
  }
`;
export const createInventory = /* GraphQL */ `
  mutation CreateInventory(
    $condition: ModelInventoryConditionInput
    $input: CreateInventoryInput!
  ) {
    createInventory(condition: $condition, input: $input) {
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
export const createTowTruckService = /* GraphQL */ `
  mutation CreateTowTruckService(
    $condition: ModelTowTruckServiceConditionInput
    $input: CreateTowTruckServiceInput!
  ) {
    createTowTruckService(condition: $condition, input: $input) {
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
export const deleteAppointment = /* GraphQL */ `
  mutation DeleteAppointment(
    $condition: ModelAppointmentConditionInput
    $input: DeleteAppointmentInput!
  ) {
    deleteAppointment(condition: $condition, input: $input) {
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
export const deleteAvailableService = /* GraphQL */ `
  mutation DeleteAvailableService(
    $condition: ModelAvailableServiceConditionInput
    $input: DeleteAvailableServiceInput!
  ) {
    deleteAvailableService(condition: $condition, input: $input) {
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
export const deleteAvailableStore = /* GraphQL */ `
  mutation DeleteAvailableStore(
    $condition: ModelAvailableStoreConditionInput
    $input: DeleteAvailableStoreInput!
  ) {
    deleteAvailableStore(condition: $condition, input: $input) {
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
export const deleteCarProfile = /* GraphQL */ `
  mutation DeleteCarProfile(
    $condition: ModelCarProfileConditionInput
    $input: DeleteCarProfileInput!
  ) {
    deleteCarProfile(condition: $condition, input: $input) {
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $condition: ModelCustomerConditionInput
    $input: DeleteCustomerInput!
  ) {
    deleteCustomer(condition: $condition, input: $input) {
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
export const deleteCustomerProfile = /* GraphQL */ `
  mutation DeleteCustomerProfile(
    $condition: ModelCustomerProfileConditionInput
    $input: DeleteCustomerProfileInput!
  ) {
    deleteCustomerProfile(condition: $condition, input: $input) {
      createdAt
      customerId
      id
      notificationsEnabled
      updatedAt
      __typename
    }
  }
`;
export const deleteInventory = /* GraphQL */ `
  mutation DeleteInventory(
    $condition: ModelInventoryConditionInput
    $input: DeleteInventoryInput!
  ) {
    deleteInventory(condition: $condition, input: $input) {
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
export const deleteTowTruckService = /* GraphQL */ `
  mutation DeleteTowTruckService(
    $condition: ModelTowTruckServiceConditionInput
    $input: DeleteTowTruckServiceInput!
  ) {
    deleteTowTruckService(condition: $condition, input: $input) {
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
export const updateAppointment = /* GraphQL */ `
  mutation UpdateAppointment(
    $condition: ModelAppointmentConditionInput
    $input: UpdateAppointmentInput!
  ) {
    updateAppointment(condition: $condition, input: $input) {
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
export const updateAvailableService = /* GraphQL */ `
  mutation UpdateAvailableService(
    $condition: ModelAvailableServiceConditionInput
    $input: UpdateAvailableServiceInput!
  ) {
    updateAvailableService(condition: $condition, input: $input) {
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
export const updateAvailableStore = /* GraphQL */ `
  mutation UpdateAvailableStore(
    $condition: ModelAvailableStoreConditionInput
    $input: UpdateAvailableStoreInput!
  ) {
    updateAvailableStore(condition: $condition, input: $input) {
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
export const updateCarProfile = /* GraphQL */ `
  mutation UpdateCarProfile(
    $condition: ModelCarProfileConditionInput
    $input: UpdateCarProfileInput!
  ) {
    updateCarProfile(condition: $condition, input: $input) {
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
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $condition: ModelCustomerConditionInput
    $input: UpdateCustomerInput!
  ) {
    updateCustomer(condition: $condition, input: $input) {
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
export const updateCustomerProfile = /* GraphQL */ `
  mutation UpdateCustomerProfile(
    $condition: ModelCustomerProfileConditionInput
    $input: UpdateCustomerProfileInput!
  ) {
    updateCustomerProfile(condition: $condition, input: $input) {
      createdAt
      customerId
      id
      notificationsEnabled
      updatedAt
      __typename
    }
  }
`;
export const updateInventory = /* GraphQL */ `
  mutation UpdateInventory(
    $condition: ModelInventoryConditionInput
    $input: UpdateInventoryInput!
  ) {
    updateInventory(condition: $condition, input: $input) {
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
export const updateTowTruckService = /* GraphQL */ `
  mutation UpdateTowTruckService(
    $condition: ModelTowTruckServiceConditionInput
    $input: UpdateTowTruckServiceInput!
  ) {
    updateTowTruckService(condition: $condition, input: $input) {
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
