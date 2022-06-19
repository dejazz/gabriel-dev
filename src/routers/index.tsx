
import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "react-router-dom";
import { ContactPage } from "../pages/contact";
import { HomePage } from "../pages/home";

export const Routers = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <HomePage  />
        </Route>
        <Route exact path="/contato">
          <ContactPage/>
        </Route>
      
      </Switch>
    </AnimatePresence>
  );
};
