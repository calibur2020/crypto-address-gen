import React from "react";
import { Switch } from "dva/router";
import RootLayout from "@/layouts/RootLayout";
import { mainPage } from "./MainLayout.scss";
import NavBar from "@/components/NavBar";

export default props => {
  const { routerData } = props;
  const { childRoutes } = routerData;
  return (
    <RootLayout className={mainPage}>
      <NavBar />
      <div className="pageBody">
        <Switch>{childRoutes}</Switch>
      </div>
    </RootLayout>
  );
};
