import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

export const LazyLayout = () => {
  return (
    <>
      <h1>LazyLayout Page</h1>
      <ul>
        <li>
          <NavLink to="lazy1">lazy1</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">lazy2</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">lazy3</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path='lazy1' element={ <LazyPage1 /> }></Route>
        <Route path='lazy2' element={ <LazyPage2 /> }></Route>
        <Route path='lazy3' element={ <LazyPage3 /> }></Route>
        {/* <Route path='*' element={ <h1>Not Found</h1> }></Route> */}
        <Route path='*' element={ <Navigate replace to='lazy1' /> }></Route>
      </Routes>
    </>
  );
};

export default LazyLayout;