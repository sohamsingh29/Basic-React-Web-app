import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import HomePage from "./pages/Home";
import Gallery from "./pages/gallery";
import Services from "./pages/services";
import About from "./pages/about";
import NotFoundPage from "./pages/404";
import Contact from "./pages/contact";
import Layout from "./components/layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Experience from "./pages/experience";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routing />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

const Routing = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/gallery" exact component={Gallery} />
      <Route path="/services" exact component={Services} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/experience" exact component={Experience} />
      <Route path="*" exact component={NotFoundPage} />
    </Switch>
  );
};

export default App;
