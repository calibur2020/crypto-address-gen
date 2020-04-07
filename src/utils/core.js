import React from "react";
import dynamic from "dva/dynamic";
import { Route, Switch, Redirect } from "dva/router";
import { Helmet } from "react-helmet";

function randomString4() {
  return String.fromCharCode(
    Math.floor(97 + 26 * Math.random()),
    Math.floor(97 + 26 * Math.random()),
    Math.floor(97 + 26 * Math.random()),
    Math.floor(97 + 26 * Math.random())
  );
}
export const dynamicWrapper = (app, models, component) =>
  dynamic({
    app,
    models: () => models,
    component
  });

window.dva_router_pathMap = {};

export const createRoute = (app, routesConfig) => {
  const {
    component: Comp,
    path,
    indexRoute,
    title,
    exact,
    ...otherProps
  } = routesConfig(app);
  if (path && path !== "/") {
    window.dva_router_pathMap[path] = { path, title, ...otherProps };
    if (otherProps.childRoutes && otherProps.childRoutes.length) {
      otherProps.childRoutes.forEach(item => {
        if (window.dva_router_pathMap[item.key]) {
          window.dva_router_pathMap[item.key].parentPath = path;
        }
      });
    }
  }
  const routeProps = Object.assign(
    {
      key: path || randomString4(),
      render: props => (
        <>
          <Comp
            routerData={otherProps}
            helmetTitle={title}
            helmetPath={path}
            {...props}
          />
          <Helmet>{title ? <title>{title}</title> : null}</Helmet>
        </>
      )
    },
    path && {
      path
    },
    exact && {
      exact
    }
  );

  if (indexRoute) {
    return [
      <Redirect key={`${path}_redirect`} exact from={path} to={indexRoute} />,
      <Route {...routeProps} />
    ];
  }

  return <Route {...routeProps} />;
};

export const createRoutes = (app, routesConfig) => (
  <Switch>
    {routesConfig(app).map(config => createRoute(app, () => config))}
  </Switch>
);

export const debounce = (func, wait, immediate) => {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
