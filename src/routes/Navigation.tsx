import logo from '../assets/react.svg';
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
              to="/home"
              className={ schowActive }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={ schowActive }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={ schowActive }
            >
              Users
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
        path: "/home",
        element: <h1>Home</h1>,
      },
      {
        path: "about",
        element: <h1>About</h1>,
      },
      {
        path: "users",
        element: <h1>Users page</h1>,
      },
    ],
  },
  {
    path: "/*",
    element: <Navigate to="/home" replace={true} />,
  },
]);

