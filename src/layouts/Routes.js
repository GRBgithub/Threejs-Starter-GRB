import * as Pages from "../pages";
 const routes = [
    {
      path: "/",
      component: Pages.Threejs,
      protectedRoute: false,
      nav: {
        show: true,
        icon: <></>,
        name: "Threejs",
      },
    },

  ];
  export default routes;