import { dynamicWrapper, createRoute } from "@/utils/core";

const routesConfig = app => ({
  path: "/segwit",
  title: "SegWit Address Generator",
  component: dynamicWrapper(app, [], () => import("./components"))
});

export default app => createRoute(app, routesConfig);
