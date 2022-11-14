import { PERMISSIONS, entryPointUriPath } from './src/constants';

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptions}
 */
const config = {
  name: 'Custom Applications',
  entryPointUriPath:'/channels',
  cloudIdentifier: 'gcp-eu',
  env: {
    development: {
      initialProjectKey: 'global-new', 
    },
    production: {
      applicationId: 'clageqaad01duuv01aid7c2ya',
      url: 'http://localhost:3001/gloabal-new/custom-applications/channels',
    },
  },
  oAuthScopes: {
    view: ['view_products'], 
    manage: ['manage_products'],
  },
  icon: '${path:@commercetools-frontend/assets/application-icons/rocket.svg}',
  mainMenuLink: {
    defaultLabel: 'Template starter',
    labelAllLocales: [],
    permissions: [PERMISSIONS.View],
  },
  submenuLinks: [
    {
      uriPath: 'channels',
      defaultLabel: 'Channels',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    },
  ],
};

export default config;
