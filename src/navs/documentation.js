import { collapsable, horizontalLine, page, section } from '@/utils/navElements'

export const documentationNav = [
  collapsable('Get Started', [page('get-started/install-webiny')]),
  collapsable('Webiny Overview', [
    page('overview/introduction'),
    section('Applications', [
      page('overview/applications/admin'),
      page('overview/applications/apw'),
      page('overview/applications/control-panel'),
      page('overview/applications/file-manager'),
      page('overview/applications/form-builder'),
      page('overview/applications/headless-cms'),
      page('overview/applications/page-builder'),
    ]),
    section('Features', [
      page('overview/features/access-control'),
      page('overview/features/cli'),
      page('overview/features/framework'),
      page('overview/features/multi-tenancy'),
      page('overview/features/multiple-environments'),
      page('overview/features/self-hosted'),
      page('overview/features/serverless-infrastructure'),
      page('overview/features/site-reliability'),
      page('overview/features/security'),
    ]),
  ]),
  horizontalLine(),
  collapsable('Headless CMS', [
    section('Basics', [
      page('headless-cms/basics/graphql-api'),
      page('headless-cms/basics/using-graphql-api'),
    ]),
    section('Extending functionality', [
      page('headless-cms/extending/content-models-via-code'),
      page('headless-cms/extending/custom-field-type'),
      page('headless-cms/extending/customize-entry-form-layout'),
      page('headless-cms/extending/extend-graphql-api'),
      page('headless-cms/extending/render-rich-text-content'),
    ]),
    section('References', [
      page('headless-cms/references/lifecycle-events'),
      page('headless-cms/references/plugins'),
      page('headless-cms/references/storage-transform-plugin'),
    ]),
  ]),
  collapsable('Page Builder', [
    section('Theming', [
      page('page-builder/theming/introduction'),
      page('page-builder/theming/colors'),
      page('page-builder/theming/elements'),
      page('page-builder/theming/layouts'),
    ]),
    section('Extending functionality', [
      page('page-builder/extending/create-a-page-element'),
      page('page-builder/extending/customize-an-existing-element'),
      page('page-builder/extending/extend-graphql-api'),
      page('page-builder/extending/extend-page-settings'),
    ]),
    section('References', [
      page('page-builder/references/lifecycle-events'),
      page('page-builder/references/plugins'),
    ]),
  ]),
  collapsable('Form Builder', [
    section('Theming', [
      page('form-builder/theming/introduction'),
      page('form-builder/theming/layouts'),
    ]),
    section('References', [page('form-builder/references/plugins')]),
  ]),
  collapsable('File Manager', [
    section('Extending functionality', [page('file-manager/extending/create-a-file-type-plugin')]),
  ]),
  collapsable('Admin Area', [
    section('Basics', [
      page('admin-area/basics/framework'),
      page('admin-area/basics/api-playground'),
    ]),
    section('Extending functionality', [page('admin-area/extending/change-logo')]),
    section('New App Tutorial', [
      page('admin-area/new-app-tutorial/introduction'),
      page('admin-area/new-app-tutorial/scaffolding'),
      page('admin-area/new-app-tutorial/get-started'),
      page('admin-area/new-app-tutorial/extending-entities'),
      page('admin-area/new-app-tutorial/security'),
      page('admin-area/new-app-tutorial/securing-graphql-api'),
      page('admin-area/new-app-tutorial/securing-client-app'),
    ]),
  ]),

  horizontalLine(),

  collapsable('Custom App Tutorial', [
    section('Tutorial Overview', [
      page('custom-app-tutorial/overview/introduction'),
      page('custom-app-tutorial/overview/get-started'),
    ]),
    section('Step 1: Create a GraphQL API', [
      page('custom-app-tutorial/graphql-api/create-a-graphql-api'),
    ]),
    section('Step 2: Create a React App', [
      page('custom-app-tutorial/react-application/introduction'),
      page('custom-app-tutorial/react-application/layout'),
      page('custom-app-tutorial/react-application/new-pin-modal-dialog'),
      page('custom-app-tutorial/react-application/homepage'),
      page('custom-app-tutorial/react-application/pin-details-page'),
    ]),
    section('Step 3: Security prep work', [
      page('custom-app-tutorial/security-overview/introduction'),
      page('custom-app-tutorial/security-overview/get-started'),
    ]),
    section('Step 4: Adding User Pools', [
      page('custom-app-tutorial/adding-user-pools/adding-user-pool-and-user-pool-domain'),
      page('custom-app-tutorial/adding-user-pools/adding-user-pool-client'),
      page('custom-app-tutorial/adding-user-pools/adjusting-webiny-config-ts-configuration-file'),
    ]),
    section('Step 5: Securing React App', [
      page('custom-app-tutorial/securing-react-application/initial-setup'),
      page('custom-app-tutorial/securing-react-application/integrating-hosted-ui-authentication-flow')
    ]),
    section('Step 6: Securing GraphQL API', [
      page('custom-app-tutorial/securing-graphql-api/initial-setup'),
      page('custom-app-tutorial/securing-graphql-api/implementing-authentication-and-authorization-checks')
    ]),
    section('Wrapping it up', [
      page('custom-app-tutorial/wrapping-it-up/wrapping-it-up'),
    ]),
  ]),

  horizontalLine(),

  collapsable('Core Concepts', [
    collapsable('Project Organization', [
      page('key-topics/project-organization/project-applications'),
      page('key-topics/project-organization/project-applications-and-packages'),
      page('key-topics/project-organization/monorepo-organization'),
    ]),
    page('key-topics/plugins'),
    page('how-to-guides/use-watch-command'),
    page('how-to-guides/deployment/deploy-your-project'),
    page('key-topics/webiny-cli'),
  ]),
  /*
  collapsable('Create Custom Application', [
    page('tutorials/create-custom-application/introduction'),
    page('tutorials/create-custom-application/getting-started'),
    page('tutorials/create-custom-application/graphql-api'),
    section('React Application', [
      page('tutorials/create-custom-application/react-application/introduction'),
      page('tutorials/create-custom-application/react-application/layout'),
      page('tutorials/create-custom-application/react-application/new-pin-modal-dialog'),
      page('tutorials/create-custom-application/react-application/homepage'),
      page('tutorials/create-custom-application/react-application/pin-details-page'),
    ]),
    collapsable('Security', [
      page('tutorials/create-custom-application/security/introduction'),
      page('tutorials/create-custom-application/security/getting-started'),
      section('Cloud Infrastructure', [
        page(
          'tutorials/create-custom-application/security/cloud-infrastructure/adding-user-pool-and-user-pool-domain'
        ),
        page(
          'tutorials/create-custom-application/security/cloud-infrastructure/adding-user-pool-client'
        ),
        page(
          'tutorials/create-custom-application/security/cloud-infrastructure/adjusting-webiny-config-ts-configuration-file'
        ),
      ]),
      collapsable('React Application', [
        page('tutorials/create-custom-application/security/react-application/initial-setup'),
        page(
          'tutorials/create-custom-application/security/react-application/integrating-hosted-ui-authentication-flow'
        ),
      ]),
      collapsable('GraphQL API', [
        page('tutorials/create-custom-application/security/graphql-api/initial-setup'),
        page(
          'tutorials/create-custom-application/security/graphql-api/implementing-authentication-and-authorization-checks'
        ),
      ]),
      page('tutorials/create-custom-application/security/wrapping-it-up'),
    ]),
  ]),
  */
  ///////////////////////// HERES BE NEW BLOCKS////////////////////

  collapsable('Deployment', [
    page('key-topics/deployment/introduction'),
    page('key-topics/deployment/environments'),
    page('how-to-guides/deployment/preview-deployments'),
    page('key-topics/deployment/iac-with-pulumi'),
    page('how-to-guides/deployment/execute-pulumi-commands'),
    page('how-to-guides/deployment/connect-custom-domain'),
    page('how-to-guides/deployment/destroy-cloud-infrastructure'),
    page('how-to-guides/deployment/build-and-deploy-hooks'),
    collapsable('AWS', [
      page('how-to-guides/deployment/aws/configure-aws-credentials'),
      page('how-to-guides/deployment/aws/use-aws-profiles'),
    ]),
    section('CI/CD', [
      page('key-topics/ci-cd/introduction'),
      page('key-topics/ci-cd/environments'),
      page('key-topics/ci-cd/version-control'),
      page('key-topics/ci-cd/cloud-infrastructure-state-files'),
      page('key-topics/ci-cd/testing'),
      page('key-topics/ci-cd/workflows'),
      page('how-to-guides/scaffolding/ci-cd'),
    ]),
  ]),
  collapsable('Key Topics', [
    section('SECTION NAME', [
      collapsable('Scaffolding', [
        page('how-to-guides/scaffolding/introduction'),
        page('how-to-guides/scaffolding/full-stack-application'),
        page('how-to-guides/scaffolding/graphql-api'),
        page('how-to-guides/scaffolding/extend-graphql-api'),
        page('how-to-guides/scaffolding/react-application'),
      ]),
      collapsable('Cloud Infrastructure', [
        page('key-topics/cloud-infrastructure/introduction'),
        collapsable('API', [
          page('key-topics/cloud-infrastructure/api/introduction'),
          page('key-topics/cloud-infrastructure/api/overview'),
          page('key-topics/cloud-infrastructure/api/graphql-requests'),
          page('key-topics/cloud-infrastructure/api/file-upload'),
          page('key-topics/cloud-infrastructure/api/file-download'),
          page('key-topics/cloud-infrastructure/api/overview-vpc-default'),
          page('key-topics/cloud-infrastructure/api/overview-vpc-custom'),
        ]),
        collapsable('Admin Area', [
          page('key-topics/cloud-infrastructure/admin/introduction'),
          page('key-topics/cloud-infrastructure/admin/overview'),
          page('key-topics/cloud-infrastructure/admin/serving-application-files'),
        ]),
        collapsable('Website', [
          page('key-topics/cloud-infrastructure/website/introduction'),
          page('key-topics/cloud-infrastructure/website/overview'),
          page('key-topics/cloud-infrastructure/website/prerendering-pages'),
          page('key-topics/cloud-infrastructure/website/serving-pages'),
        ]),
      ]),
      page('how-to-guides/environment-variables'),
      page('how-to-guides/importing-plugins'),
    ]),
    horizontalLine(),
    page('how-to-guides/extend-graphql-api'),
    page('tutorials/webiny-cli/adding-custom-commands'),
    page('key-topics/tools-libraries'),
    page('how-to-guides/webiny-applications/themes/introduction'),
    page('tutorials/create-a-package-in-webiny-project'),
    page('key-topics/multi-tenancy'),
    collapsable('Integrations', [page('how-to-guides/integrations/integrate-tailwindcss')]),
  ]),
  collapsable('Security', [
    page('webiny-overview/security'),
    page('key-topics/security-framework/introduction'),
    page('key-topics/security-framework/api-security'),
    page('key-topics/security-framework/react-security'),
  ]),
  collapsable('Performance', [
    page('webiny-overview/performance-benchmark/introduction'),
    page('webiny-overview/performance-benchmark/headless-cms-write-benchmark'),
    page('webiny-overview/performance-benchmark/headless-cms-read-benchmark'),
    page('webiny-overview/performance-benchmark/pb-deliver-a-page'),
  ]),
  collapsable('Community Plugins', [page('community-plugins/introduction')]),
  horizontalLine(),
  collapsable('Release Notes', [
    page('how-to-guides/upgrade-webiny'),
    collapsable('5.23.0', [
      page('release-notes/5.23.0/changelog'),
      page('release-notes/5.23.0/upgrade-guide'),
    ]),
    collapsable('5.22.1', [
      page('release-notes/5.22.1/changelog'),
      page('release-notes/5.22.1/upgrade-guide'),
    ]),
    collapsable('5.22.0', [
      page('release-notes/5.22.0/changelog'),
      page('release-notes/5.22.0/upgrade-guide'),
    ]),
    collapsable('5.21.0', [
      page('release-notes/5.21.0/changelog'),
      page('release-notes/5.21.0/upgrade-guide'),
    ]),
    collapsable('5.20.0', [
      page('release-notes/5.20.0/changelog'),
      page('release-notes/5.20.0/upgrade-guide'),
    ]),
    collapsable('5.19.1', [
      page('release-notes/5.19.1/changelog'),
      page('release-notes/5.19.1/upgrade-guide'),
    ]),
    collapsable('5.19.0', [
      page('release-notes/5.19.0/changelog'),
      page('release-notes/5.19.0/upgrade-guide'),
    ]),
    collapsable('Older Releases', [
      collapsable('5.18.0', [
        page('release-notes/5.18.0/changelog'),
        page('release-notes/5.18.0/upgrade-guide'),
      ]),
      collapsable('5.17.0', [
        page('release-notes/5.17.0/changelog'),
        page('release-notes/5.17.0/upgrade-guide'),
      ]),
      collapsable('5.16.0', [
        page('release-notes/5.16.0/changelog'),
        page('release-notes/5.16.0/upgrade-guide'),
      ]),
      collapsable('5.15.0', [
        page('release-notes/5.15.0/changelog'),
        page('release-notes/5.15.0/upgrade-guide'),
      ]),
      collapsable('5.14.0', [
        page('release-notes/5.14.0/changelog'),
        page('release-notes/5.14.0/upgrade-guide'),
      ]),
      collapsable('5.13.0', [
        page('release-notes/5.13.0/changelog'),
        page('release-notes/5.13.0/upgrade-guide'),
      ]),
      collapsable('5.12.0', [
        page('release-notes/5.12.0/changelog'),
        page('release-notes/5.12.0/upgrade-guide'),
      ]),
      collapsable('5.11.1', [
        page('release-notes/5.11.1/changelog'),
        page('release-notes/5.11.1/upgrade-guide'),
      ]),
      collapsable('5.11.0', [
        page('release-notes/5.11.0/changelog'),
        page('release-notes/5.11.0/upgrade-guide'),
      ]),
      collapsable('5.10.0', [
        page('release-notes/5.10.0/changelog'),
        page('release-notes/5.10.0/upgrade-guide'),
      ]),
      collapsable('5.9.0', [
        page('release-notes/5.9.0/changelog'),
        page('release-notes/5.9.0/upgrade-guide'),
      ]),
      collapsable('5.8.0', [
        page('release-notes/5.8.0/changelog'),
        page('release-notes/5.8.0/upgrade-guide'),
      ]),
      collapsable('5.7.0', [
        page('release-notes/5.7.0/changelog'),
        page('release-notes/5.7.0/upgrade-guide'),
      ]),
      collapsable('5.6.0', [
        page('release-notes/5.6.0/changelog'),
        page('release-notes/5.6.0/upgrade-guide'),
      ]),
      collapsable('5.5.0', [
        page('release-notes/5.5.0/changelog'),
        page('release-notes/5.5.0/upgrade-guide'),
      ]),
      collapsable('5.4.0', [
        page('release-notes/5.4.0/changelog'),
        page('release-notes/5.4.0/upgrade-guide'),
      ]),
      collapsable('5.3.0', [page('release-notes/5.3.0/changelog')]),
    ]),
  ]),
  collapsable('Contributing', [
    page('contributing/documentation'),
    page('contributing/new-page-template'),
  ]),
  collapsable('Enterprise', [
    page('enterprise/multi-tenancy'),
    page('enterprise/theme-manager'),
    page('enterprise/okta-integration'),
  ]),
  page('webiny-telemetry'),
]
