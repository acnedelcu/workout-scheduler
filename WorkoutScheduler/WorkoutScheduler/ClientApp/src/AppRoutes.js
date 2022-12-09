import ApiAuthorzationRoutes from "./components/api-authorization/ApiAuthorizationRoutes";
import { MakePlan } from "./components/MakePlan";
import { Home } from "./components/Home";
import { ViewTrainings } from "./components/ViewTrainings";

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/make-plan",
    element: <MakePlan />,
  },
  {
    path: "/view-trainings",
    element: <ViewTrainings />,
  },
  ...ApiAuthorzationRoutes,
];

export default AppRoutes;
