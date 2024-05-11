import { createClient } from 'contentful-management';

const managementClient = createClient({
  accessToken: 'CFPAT-tID-7d_ldahEIgep1LMh--WsOcC0pLez3xK1u1EroTA' // Replace with your Content Management API access token
});

export default managementClient;