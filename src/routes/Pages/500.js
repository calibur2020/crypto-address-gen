import { P500 } from '@/components/Pages';
import { createRoute } from '@/utils/core';

const routesConfig = (app) => ({
  path: '/500',
  title: '500',
  component: P500,
});

export default (app) => createRoute(app, routesConfig);
