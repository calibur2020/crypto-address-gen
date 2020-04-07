import { P403 } from '@/components/Pages';
import { createRoute } from '@/utils/core';

const routesConfig = (app) => ({
  path: '/403',
  title: '403',
  component: P403,
});

export default (app) => createRoute(app, routesConfig);
