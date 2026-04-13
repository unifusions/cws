import React from "react";
import { createRoot } from "react-dom/client";
import Welcome from "./static/welcome";
import Contact from "./static/contact";
import Error404 from "./pages/errors/error-404";
import Privacy from "./static/privacy";
import Uniform from "./static/uniform";

 
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