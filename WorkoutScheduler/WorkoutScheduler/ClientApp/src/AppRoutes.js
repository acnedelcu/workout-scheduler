import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { MakePlan } from "./components/MakePlan";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/make-plan',
    element: <MakePlan />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
