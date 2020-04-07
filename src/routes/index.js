import { createRoutes } from "@/utils/core";
import MainLayout from "@/layouts/MainLayout";
import Page403 from "./Pages/403";
import NotFound from "./Pages/404";
import Page500 from "./Pages/500";
import Home from "./Home";
import SegWit from "./SegWit";
import MultiSig from "./MultiSig";

const routesConfig = app => [
  {
    path: "/",
    component: MainLayout,
    childRoutes: [
      SegWit(app),
      MultiSig(app),
      Home(app),
      Page403(),
      Page500(),
      NotFound()
    ]
  }
];

export default app => createRoutes(app, routesConfig);
