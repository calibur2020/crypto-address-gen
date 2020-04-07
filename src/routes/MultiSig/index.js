import { dynamicWrapper, createRoute } from "@/utils/core";

const routesConfig = app => ({
  path: "/multisig",
  title: "MultiSig Address Generator",
  component: dynamicWrapper(app, [], () => import("./components"))
});

export default app => createRoute(app, routesConfig);
