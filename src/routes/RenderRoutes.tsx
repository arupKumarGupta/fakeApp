import { Route, Routes } from "react-router-dom";
import { navigations } from "./navigation";

export const RenderRoutes = () => {
  return (
    <Routes>
      {navigations.map((nav) => (
        <Route key={nav.name} path={nav.path} element={nav.element} />
      ))}
    </Routes>
  );
};
