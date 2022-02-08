import React from "react";

const AboutPage = React.lazy(() => import("./AboutPage"));
const Foo = React.lazy(() => import("./Foo"));

const routes = [
  {
    exact: true,
    path: "/about",
    component: AboutPage,
  },
  {
    exact: true,
    path: "/about/foo",
    component: Foo,
  },
];

export default routes;
