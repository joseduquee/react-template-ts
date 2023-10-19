import logo from "../assets/react.svg";
import { schowActive } from "../helpers/showActive";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  NavLink,
  Navigate,
} from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from 'react';

export const Navigation = () => {
  return <RouterProvider router={router} />;
};

export const Root = () => {
  return (
    // Con el fallback puedo definir un mensaje mientras esperala carga con el suspense
    <Suspense fallback= { <span>Loading</span> }>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React log" />
          <ul>
            {routes.map(({ to, name }) => (
              <li key={to}>
                <NavLink to={to} className={schowActive}>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </Suspense>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [...routes],
  },
  {
    path: "/*",
    element: <Navigate to={routes[0].to} replace={true} />,
  },
]);
