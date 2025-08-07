// import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

// /*== STEP 1 ===============================================================
// The section below creates a Todo database table with a "content" field. Try
// adding a new "isDone" field as a boolean. The authorization rule below
// specifies that any user authenticated via an API key can "create", "read",
// "update", and "delete" any "Todo" records.
// =========================================================================*/
// const schema = a.schema({
//   Address: a.customType({
//     street: a.string(),
//     city: a.string(),
//     state: a.string(),
//     country: a.string(),
//     postalCode: a.string(),
//   }),

//   GeoPoint: a.customType({
//     lat: a.float(),
//     long: a.float(),
//   }),

//   Appointment: a
//     .model({
//       serviceType: a.string(),
//       appointmentDate: a.datetime(),
//       status: a.string(),
//       customerId: a.string(), // Reference to the customer
//       storeId: a.string(), // The store where the appointment is scheduled
//       carProfileId: a.string(), // Reference to the car profile
//       serviceDetails: a.string(), // Specific service details (e.g., tire replacement, repair)
//       dropOffOption: a.boolean(), // Whether the user will drop off the car or wait
//       pickupDropOffInfo: a.string(), // Information if someone else is picking up or dropping off the car
//       towTruckRequired: a.boolean(), // Whether the customer needs a tow truck
//     })
//     .authorization((allow) => [allow.authenticated()]),

//   // Customer model (holds user info and references to their appointments)
//   Customer: a
//     .model({
//       name: a.string(),
//       email: a.email(),
//       phone: a.phone(),
//       address: a.ref('Address'),
//       // appointments: a.list(a.ref('Appointment')), // Reference to appointments associated with this customer
//     })
//     .authorization((allow) => [allow.authenticated()]),

//   // AvailableStores model (stores where car services can be scheduled)
//   AvailableStore: a
//     .model({
//       name: a.string(),
//       email: a.email(), // Contact information (could be email/phone)
//       phone: a.phone(),
//       address: a.ref('Address'),
//       coordinates: a.ref('GeoPoint'), // a.geoPoint(), // Geolocation (latitude, longitude)
//       // availableServices: a.list(a.ref('AvailableService')), // Services available at this store
//     })
//     .authorization((allow) => [allow.publicApiKey()]),

//   // AvailableServices model (specific services offered by stores)
//   AvailableService: a
//     .model({
//       serviceName: a.string(),
//       storeId: a.string(), // Reference to the store that provides this service
//       // applicableDays: a.string(), // a.list(a.string()), // Days the service is available
//       // timings: a.string(), // a.list(a.string()), // Timings for each day (e.g., ["9:00 AM - 12:00 PM", "1:00 PM - 5:00 PM"])
//       inventoryRequired: a.boolean(), // Whether the service requires inventory, like tires
//     })
//     .authorization((allow) => [allow.publicApiKey()]),

//   // UserProfile model (the user can maintain multiple car profiles)
//   CustomerProfile: a
//     .model({
//       customerId: a.string(), // Reference to the user
//       // cars: a.list(a.ref('CarProfile')), // List of cars the user owns
//       notificationsEnabled: a.boolean(), // Whether notifications are enabled for the user
//     })
//     .authorization((allow) => [allow.authenticated()]),

//   // CarProfile model (details for each car)
//   CarProfile: a
//     .model({
//       make: a.string(),
//       modelYear: a.string(),
//       trim: a.string(),
//       vinNumber: a.string(), // Vehicle Identification Number for unique identification
//       tireSpecifications: a.string(), // Tire specifications
//       wheelSpecifications: a.string(), // Wheel specifications
//       // serviceSchedules: // a.list(a.ref('Appointment')), // Reference to appointments for this car
//     })
//     .authorization((allow) => [allow.authenticated()]),

//   // Inventory model (to track availability of items like tires)
//   Inventory: a
//     .model({
//       tireType: a.string(), // Type of tire
//       size: a.string(), // Size of the tire
//       quantityAvailable: a.integer(), // a.number(), // Number of tires available
//       storeId: a.string(), // Reference to the store
//     })
//     .authorization((allow) => [allow.publicApiKey()]),

//   // TowTruckService model (tow truck availability for appointments)
//   TowTruckService: a
//     .model({
//       storeId: a.string(), // Store offering tow truck service
//       available: a.boolean(), // Whether the service is available at the moment
//       contactName: a.string(), // Contact information for the tow truck service
//       contactPhone: a.phone(),
//       contactEmail: a.email(),
//     })
//     .authorization((allow) => [allow.publicApiKey()]),

//   // Link between Customer and Appointments (as a connection between these models)
//   // customerAppointments: a
//   //   .connection('Customer', 'appointments', {
//   //     target: 'Appointment',
//   //     sourceField: 'customerId',
//   //     targetField: 'customerId',
//   //   })
//   //   .authorization((allow) => [allow.authenticated()]),

//   // Link between Store and Available Services (a connection between store and services)
//   // storeServices: a
//   //   .connection('AvailableStore', 'availableServices', {
//   //     target: 'AvailableService',
//   //     sourceField: 'storeId',
//   //     targetField: 'storeId',
//   //   })
//   //   .authorization((allow) => [allow.publicApiKey()]),

// });

// export type Schema = ClientSchema<typeof schema>;

// export const data = defineData({
//   schema,
//   authorizationModes: {
//     defaultAuthorizationMode: "apiKey",
//     // API Key is used for a.allow.public() rules
//     apiKeyAuthorizationMode: {
//       expiresInDays: 30,
//     },
//   },
// });

// /*== STEP 2 ===============================================================
// Go to your frontend source code. From your client-side code, generate a
// Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
// WORK IN THE FRONTEND CODE FILE.)

// Using JavaScript or Next.js React Server Components, Middleware, Server 
// Actions or Pages Router? Review how to generate Data clients for those use
// cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
// =========================================================================*/

// /*
// "use client"
// import { generateClient } from "aws-amplify/data";
// import type { Schema } from "@/amplify/data/resource";

// const client = generateClient<Schema>() // use this Data client for CRUDL requests
// */

// /*== STEP 3 ===============================================================
// Fetch records from the database and use them in your frontend component.
// (THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
// =========================================================================*/

// /* For example, in a React component, you can use this snippet in your
//   function's RETURN statement */
// // const { data: todos } = await client.models.Todo.list()

// // return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>

import { defineData } from '@aws-amplify/backend';
import { schema } from './schema';

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
    oidcAuthorizationMode: {
      oidcIssuerUrl: process.env.ISSUER_URL || '',
      clientId: process.env.APP_CLIENT_ID || '',
      tokenScopes: ['openid', 'email', 'profile'],
    },
  },
});