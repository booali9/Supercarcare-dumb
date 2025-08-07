// import { defineAuth, secret } from '@aws-amplify/backend';

// /**
//  * Define and configure your auth resource
//  * @see https://docs.amplify.aws/gen2/build-a-backend/auth
//  */
// export const auth = defineAuth({
//   loginWith: {
//     email: true,
//     externalProviders: {
//       google: {
//         clientId: secret('GOOGLE_CLIENT_ID'),
//         clientSecret: secret('GOOGLE_CLIENT_SECRET')
//       },
//       // signInWithApple: {
//       //   clientId: secret('SIWA_CLIENT_ID'),
//       //   keyId: secret('SIWA_KEY_ID'),
//       //   privateKey: secret('SIWA_PRIVATE_KEY'),
//       //   teamId: secret('SIWA_TEAM_ID')
//       // },
//       // loginWithAmazon: {
//       //   clientId: secret('LOGINWITHAMAZON_CLIENT_ID'),
//       //   clientSecret: secret('LOGINWITHAMAZON_CLIENT_SECRET')
//       // },
//       facebook: {
//         clientId: secret('FACEBOOK_CLIENT_ID'),
//         clientSecret: secret('FACEBOOK_CLIENT_SECRET')
//       },
//       saml: {
//         name: "Microsoft",
//         metadata: {
//           metadataType: "URL",
//           metadataContent: "https://login.microsoftonline.com/836d826b-d1c0-4b07-9098-e23946f642b6/federationmetadata/2007-06/federationmetadata.xml?appid=6ecaba00-b2e7-4b18-8775-909ab9303661"
//         }
//       },
//       callbackUrls: [
//         'http://localhost:5173/',
//         'https://dev.d1zmcswqurqki9.amplifyapp.com/',
//         'https://v1.supercarcarecenter.com/login',
//         'https://v2.supercarcarecenter.com/login'
//       ],
//       logoutUrls: ['http://localhost:5173/', 
//         'https://dev.d1zmcswqurqki9.amplifyapp.com/',
//         'https://v1.supercarcarecenter.com/login', 'https://v2.supercarcarecenter.com/login'],
//     }
//   },
// });

import { defineAuth } from '@aws-amplify/backend';

// Email authentication configuration
interface EmailAuthConfig {
  verificationEmailSubject: string;
  verificationEmailBody: (createCode: () => string) => string;
  verificationMessageBody: (createCode: () => string) => string;
}

// External provider configurations
interface GoogleProviderConfig {
  clientId: string;
  clientSecret: string;
}

interface FacebookProviderConfig {
  clientId: string;
  clientSecret: string;
}

interface MetadataURLConfig {
  metadataType: string;
  metadataContent: string;
}

interface MicrosoftProviderConfig {
  clientId: string;
  metadataURL: MetadataURLConfig;
}

interface ExternalProvidersConfig {
  google: GoogleProviderConfig;
  facebook: FacebookProviderConfig;
  microsoft: MicrosoftProviderConfig;
}

// User attribute configuration
interface UserAttributeConfig {
  required: boolean;
  mutable: boolean;
}

interface UserAttributesConfig {
  given_name: UserAttributeConfig;
  family_name: UserAttributeConfig;
  phone_number: UserAttributeConfig;
  'custom:preferredVehicle': UserAttributeConfig;
  [key: string]: UserAttributeConfig;
}

// MFA configuration
interface SmsConfig {
  smsMessage: (createCode: () => string) => string;
}

interface MultifactorConfig {
  mode: 'OPTIONAL' | 'REQUIRED' | 'OFF';
  sms: SmsConfig;
}

// Password policy configuration
interface PasswordPolicyConfig {
  minimumLength: number;
  requireLowercase: boolean;
  requireUppercase: boolean;
  requireNumbers: boolean;
  requireSpecialCharacters: boolean;
}

// Login configuration
interface LoginWithConfig {
  email: EmailAuthConfig;
  phone: boolean;
  externalProviders: ExternalProvidersConfig;
  callbackUrls: string[];
  logoutUrls: string[];
}

// Main auth configuration
interface AuthConfig {
  loginWith: LoginWithConfig;
  userAttributes: UserAttributesConfig;
  multifactor: MultifactorConfig;
  passwordPolicy: PasswordPolicyConfig;
}

export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailSubject: 'SuperCar Care Center - Verify your email',
      verificationEmailBody: (createCode) => `Your verification code is ${createCode()}`,
      verificationMessageBody: (createCode) => `Your verification code is ${createCode()}`,
    },
    phone: true, // Enable phone number authentication
    // Keep existing social providers
    externalProviders: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID || 'replace-with-google-client-id',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'replace-with-google-client-secret',
      },
      facebook: {
        clientId: process.env.FACEBOOK_CLIENT_ID || 'replace-with-facebook-client-id',
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET || 'replace-with-facebook-client-secret',
      },
      microsoft: {
        clientId: '6ecaba00-b2e7-4b18-8775-909ab9303661',
        metadataURL: {
          metadataType: "URL",
          metadataContent: "https://login.microsoftonline.com/836d826b-d1c0-4b07-9098-e23946f642b6/federationmetadata/2007-06/federationmetadata.xml?appid=6ecaba00-b2e7-4b18-8775-909ab9303661"
        }
      }
    },
    callbackUrls: [
      'http://localhost:5173/',
      'https://dev.d1zmcswqurqki9.amplifyapp.com/',
      'https://v1.supercarcarecenter.com/login',
      'https://v2.supercarcarecenter.com/login'
    ],
    logoutUrls: [
      'http://localhost:5173/', 
      'https://dev.d1zmcswqurqki9.amplifyapp.com/',
      'https://v1.supercarcarecenter.com/login',
      'https://v2.supercarcarecenter.com/login'
    ],
  },
  userAttributes: {
    // Define required and custom user attributes
    givenName: {
      required: true,
      mutable: true,
    },
    familyName: {
      required: true,
      mutable: true,
    },
    phoneNumber: {
      required: false,
      mutable: true,
    },
    'custom:preferredVehicle': {
      mutable: true,
      dataType: 'String',
    },
  },
  multifactor: {
    mode: 'OPTIONAL',
    sms: {
      smsMessage: (createCode) => `Your SuperCar Care Center verification code is ${createCode()}`
    }
  },
  passwordPolicy: {
    minimumLength: 8,
    requireLowercase: true,
    requireUppercase: true,
    requireNumbers: true,
    requireSpecialCharacters: true
  }
});
