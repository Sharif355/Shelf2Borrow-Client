import { NavLink } from "react-router-dom";
import DarkMode from "../../DarkMode/DarkMode";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addBook"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Add Book
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allBooks"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          All Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/borrowed"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Borrowed
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Login
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="flex justify-between navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="">Shelf2Borrow</div>

            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {links}
              </ul>
            </div>
            <DarkMode></DarkMode>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu  w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            {links}
          </ul>
        </div>
      </div>
      s
    </div>
  );
};

export default Navbar;
