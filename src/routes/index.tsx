import { useRoutes } from "react-router-dom";
import { HomePage } from "modules/HomePage";
import { About } from "modules/About";
import { pathName } from "constants/routePath";

const Router = () => {
  const routes = useRoutes([
    {
      path: pathName.about,
      element: <About />,
    },
    {
      path: pathName.home,
      element: <HomePage />,
    },
  ]);

  return routes;
};

export default Router;
