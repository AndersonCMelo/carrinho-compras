import React from "react";
import { Switch, Route } from "react-router-dom";

import Products from "../pages/Products";

const Routes = () => {

  return (
    <Switch>
      <Route path="/" exact component={Products} />

    </Switch>
  );
};

export default Routes;
