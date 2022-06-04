import { asyncSleep } from '../utils/general';
import { LicHttpResponse } from './HttpResponse';

// eslint-disable-next-line no-shadow
export enum UserRole {
  PRODUCER = 'Producer',
  MERCHANT = 'Merchant',
  CONSUMER = 'Consumer',
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  password: string;
}

const profiles: Record<string, UserProfile> = {
  '1': {
    id: '1',
    name: 'tester2',
    email: 'tester2.@email.com',
    role: UserRole.PRODUCER,
    password: '12345678',
  },
  '2': {
    id: '2',
    name: 'tester1',
    email: 'tester1@email.com',
    role: UserRole.MERCHANT,
    password: '12345678',
  },
  '3': {
    id: '3',
    name: 'tester3',
    email: 'tester3@email.com',
    role: UserRole.CONSUMER,
    password: '12345678',
  },
};

const tokenProfiles = {
  '70299b50-28ad-42b6-be5e-f34ad6d8d6e1': '1',
  '646fe9e2-948c-4542-9407-f05cd5ea8c18': '2',
  'ee4d3ac3-c196-4f9c-93c4-3284ea7b934e': '3',
};

const profileTokens = {
  '1': '70299b50-28ad-42b6-be5e-f34ad6d8d6e1',
  '2': '646fe9e2-948c-4542-9407-f05cd5ea8c18',
  '3': 'ee4d3ac3-c196-4f9c-93c4-3284ea7b934e',
};

export interface AuthInfo {
  token: string;
  refreshToken: string;
}

class MockApi {
  static async login(
    email: string,
    password: string,
  ): Promise<LicHttpResponse<AuthInfo>> {
    const profile: UserProfile | undefined = Object.values(profiles).find(
      p => email === p.email && password === p.password,
    );
    await asyncSleep(500);
    return {
      success: !!profile,
      data: profile
        ? {
            token: profileTokens[profile.id],
            refreshToken: profileTokens[profile.id],
          }
        : undefined,
      response: {
        status: profile ? 200 : 401,
        statusText: profile ? 'OK' : 'Unauthorized',
      },
    };
  }

  static async getProfile(
    token: string,
  ): Promise<LicHttpResponse<UserProfile>> {
    const userId = tokenProfiles[token];
    const profile = profiles[userId];
    await asyncSleep(500);
    if (!profile) {
      return {
        success: false,
        response: {
          status: 404,
          statusText: 'Not Found',
        },
      };
    }
    return {
      success: true,
      data: profile,
    };
  }
}

export default MockApi;
