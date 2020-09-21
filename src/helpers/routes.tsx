import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import * as ROUTES from "../constants/routes";

interface IsUserRedirectProps extends RouteProps {
  user: any;
  loggedInPath: string;
}

export const IsUserRedirect: React.FC<IsUserRedirectProps> = ({
  user,
  loggedInPath,
  children,
  ...restProps
}) => {
  return (
    <Route
      {...restProps}
      render={() => {
        if (!user) return children;
        if (user) return <Redirect to={{ pathname: loggedInPath }} />;
        return null;
      }}
    />
  );
};

interface ProtectedRouteProps
  extends Omit<IsUserRedirectProps, "loggedInPath"> {}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  user,
  children,
  ...restProps
}) => {
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        if (user) return children;
        if (!user)
          return (
            <Redirect
              to={{ pathname: ROUTES.SIGN_IN, state: { from: location } }}
            />
          );
        return null;
      }}
    />
  );
};
