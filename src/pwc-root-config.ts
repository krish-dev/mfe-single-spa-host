import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@pwc/microapp",
  app: () =>
    System.import(
      "http://localhost:4201/main.js"
    ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@pwc/navbar",
//   app: () => System.import("@pwc/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
