import { fuseReactLatestVersion } from './changelog/ChangelogDoc';
import FuseComponentsNavigation from './fuse-components/FuseComponentsNavigation';
import MaterialUIComponentsNavigation from './material-ui-components/MaterialUIComponentsNavigation';
import ThirdPartyComponentsNavigation from './third-party-components/ThirdPartyComponentsNavigation';

const DocumentationNavigation = {
  id: 'documentation',
  title: 'Documentation',
  subtitle: 'Everything you need to know about Fuse',
  icon: 'heroicons-outline:support',
  type: 'group',
  children: [
    {
      id: 'changelog',
      title: 'Changelog',
      type: 'item',
      icon: 'heroicons-outline:speakerphone',
      url: '/documentation/changelog',
      badge: {
        title: fuseReactLatestVersion,
        bg: 'rgb(236, 12, 142)',
        fg: '#FFFFFF',
      },
    },
    {
      id: 'getting-started',
      title: 'Getting Started',
      type: 'collapse',
      icon: 'play_arrow',
      children: [
        {
          id: 'introduction-doc',
          title: 'Introduction',
          type: 'item',
          url: '/documentation/getting-started/introduction',
        },
        {
          id: 'installation-doc',
          title: 'Installation',
          type: 'item',
          url: '/documentation/getting-started/installation',
        },
        {
          id: 'git-repository-doc',
          title: 'Git Repository',
          type: 'item',
          url: '/documentation/getting-started/git-repository',
        },
      ],
    },
    {
      id: 'development',
      title: 'Development',
      type: 'collapse',
      icon: 'developer_board',
      children: [
        {
          id: 'development-server-doc',
          title: 'Development Server',
          type: 'item',
          url: '/documentation/development/development-server',
        },
        {
          id: 'production-doc',
          title: 'Production Build',
          type: 'item',
          url: '/documentation/development/production',
        },
        {
          id: 'deployment-doc',
          title: 'Deployment',
          type: 'item',
          url: '/documentation/development/deployment',
        },
        {
          id: 'directory-structure-doc',
          title: 'Directory Structure',
          type: 'item',
          url: '/documentation/development/directory-structure',
        },
        {
          id: 'api-calls-doc',
          title: 'API Calls',
          type: 'item',
          url: '/documentation/development/api-calls',
        },
        {
          id: 'updating-fuse-react-doc',
          title: 'Updating Fuse React',
          type: 'item',
          url: '/documentation/development/updating-fuse-react',
        },
        {
          id: 'fuse-react-ides-vscode-webstorm-doc',
          title: 'IDEs (Webstorm, VsCode)',
          type: 'item',
          url: '/documentation/development/ides-vscode-webstorm',
        },
        {
          id: 'fuse-react-heroku-notes-doc',
          title: 'HEROKU Notes',
          type: 'item',
          url: '/documentation/development/heroku-notes',
        },
      ],
    },
    {
      id: 'mock-api',
      title: 'Mock API',
      type: 'item',
      icon: 'heroicons-outline:cloud',
      url: '/documentation/mock-api',
    },
    {
      id: 'theming',
      title: 'Theming',
      type: 'collapse',
      icon: 'palette',
      children: [
        {
          id: 'theme-schemes-doc',
          title: 'Theme Schemes',
          type: 'item',
          url: '/documentation/theming/theme-schemes',
        },
        {
          id: 'theme-layouts-doc',
          title: 'Theme Layouts',
          type: 'item',
          url: '/documentation/theming/theme-layouts',
        },
        {
          id: 'page-layouts-doc',
          title: 'Page Layouts',
          type: 'item',
          url: '/documentation/theming/page-layouts',
        },
        {
          id: 'rtl-doc',
          title: 'RTL Support',
          type: 'item',
          url: '/documentation/theming/rtl-support',
        },
        {
          id: 'changing-default-font-doc',
          title: 'Changing Default Font',
          type: 'item',
          url: '/documentation/theming/changing-default-font',
        },
      ],
    },
    {
      id: 'configs',
      title: 'Configuration',
      type: 'collapse',
      icon: 'settings',
      children: [
        {
          id: 'default-settings-doc',
          title: 'Default Settings',
          type: 'item',
          url: '/documentation/configuration/settings',
        },
        {
          id: 'fuse-react-routing-doc',
          title: 'Routing',
          type: 'item',
          url: '/documentation/configuration/routing',
        },
        {
          id: 'fuse-react-navigation-doc',
          title: 'Navigation',
          type: 'item',
          url: '/documentation/configuration/navigation',
        },
        {
          id: 'fuse-react-code-splitting-doc',
          title: 'Code Splitting',
          type: 'item',
          url: '/documentation/configuration/code-splitting',
        },
        {
          id: 'fuse-react-multi-language-doc',
          title: 'Multi Language',
          type: 'item',
          url: '/documentation/configuration/multi-language',
        },
      ],
    },
    {
      id: 'authentication',
      title: 'Authentication',
      type: 'collapse',
      icon: 'verified_user',
      children: [
        {
          id: 'jwt-auth-doc',
          title: 'JWT Authentication Service',
          type: 'item',
          url: '/documentation/authentication/jwt',
        },
      ],
    },
    FuseComponentsNavigation,
    MaterialUIComponentsNavigation,
    ThirdPartyComponentsNavigation,
  ],
};

export default DocumentationNavigation;
