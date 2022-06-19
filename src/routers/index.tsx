
import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "react-router-dom";
import { ContactPage } from "../pages/contact";
import { HomePage } from "../pages/home";
import { ProjectsPage } from "../pages/projects";

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
        <Route exact path="/projetos">
          <ProjectsPage/>
        </Route>
      </Switch>
    </AnimatePresence>
  );
};
