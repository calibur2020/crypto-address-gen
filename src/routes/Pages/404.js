import { P404 } from '@/components/Pages';
import { createRoute } from '@/utils/core';

const routesConfig = (app) => ({
  title: '页面没有找到',
  component: P404,
});

export default (app) => createRoute(app, routesConfig);
