import Dashboard from "../features/Dashboard";
import Home from "../features/Home";
import ProtectedError from "../features/ProtectedError";
import ProtectedRoute from "./ProtectedRoute";
interface Navigation {
  path: string;
  name: string;
  element: JSX.Element;
  isPrivate: boolean;
}

export const navigations: Navigation[] = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
    isPrivate: false,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    isPrivate: true,
  },
  {
    path: "/not-allowed",
    name: "Not Allowed",
    element: <ProtectedError />,
    isPrivate: true,
  },
];
