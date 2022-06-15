import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "../pages/home";

export const Routers = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};
