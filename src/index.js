import React from "react";

import dva from "dva";
import { Router } from "dva/router";
import createLoading from "dva-loading";

import { createBrowserHistory } from "history";

import createRoutes from "@/routes";
import "./global.scss";

import segWitModel from "@/models/segWit";
import multiSegModel from "@/models/multiSig";

const appMain = dva({
  history: createBrowserHistory({
    basename: "/"
  })
});

const onErrorHandler = (err, dispatch) => {
  console.error("DVA ERROR ", err);
};
appMain.use({ onError: onErrorHandler });

appMain.use(createLoading());

appMain.model(segWitModel);
appMain.model(multiSegModel);

appMain.router(({ history, app }) => (
  <Router history={history}>{createRoutes(app)}</Router>
));

appMain.start("#root");
