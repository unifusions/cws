import React from "react";
import { createRoot } from "react-dom/client";
import Welcome from "./pages/welcome";
import Contact from "./pages/contact";
import Error404 from "./pages/errors/error-404";
import Privacy from "./pages/privacy";
import Uniform from "./pages/uniform";

 
const components = {
  welcome: Welcome,
  contact: Contact,
  privacy: Privacy,
  error404: Error404,
  uniforms : Uniform
};

Object.entries(components).forEach(([id, Component]) => {
  const el = document.getElementById(id);

  if (el) {
    createRoot(el).render(<Component />);
  }
});