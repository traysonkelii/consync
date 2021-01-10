import { domain, clientId } from 'auth.json';

export const environment = {
  production: true,
  baseUrl: '/',
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin,
  },
};
