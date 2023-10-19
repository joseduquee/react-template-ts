import logo from '../assets/react.svg';
import { LazyPage1, LazyPage2, LazyPage3 } from '../features/lazyload/pages';
import { schowActive } from '../helpers/showActive';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  NavLink,
  Navigate,
} from "react-router-dom";

export const Navigation = () => {
  return <RouterProvider router={router} />;
};

export const Root = () => {
  return (
    <div className="main-layout">
      <nav>
        <img src={logo} alt="React log" />
        <ul>
          <li>
            <NavLink
              to="/lazy1"
              className={ schowActive }
            >
              Lazy1
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/lazy2"
              className={ schowActive }
            >
              Lazy2
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/lazy3"
              className={ schowActive }
            >
              Lazy3
            </NavLink>
          </li>
        </ul>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "lazy1",
        element: <LazyPage1 />,
      },
      {
        path: "lazy2",
        element: <LazyPage2 />,
      },
      {
        path: "lazy3",
        element: <LazyPage3 />,
      },
    ],
  },
  {
    path: "/*",
    element: <Navigate to="/lazy1" replace={true} />,
  },
]);

