import React from "react";
import { BrowserRouter } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { IsUserRedirect, ProtectedRoute } from "../helpers/routes";
import useAuth from "../hooks/useAuth";
import { Browse, Home, SignIn, SignUp } from "../pages";

const Routes = () => {
  const user = useAuth();

  return (
    <BrowserRouter>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        exact
        path={ROUTES.HOME}
      >
        <Home />
      </IsUserRedirect>
      <ProtectedRoute user={user} exact path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        exact
        path={ROUTES.SIGN_UP}
      >
        <SignUp />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        exact
        path={ROUTES.SIGN_IN}
      >
        <SignIn />
      </IsUserRedirect>
    </BrowserRouter>
  );
};

export default Routes;
