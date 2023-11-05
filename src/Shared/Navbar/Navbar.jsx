import { Link, NavLink } from "react-router-dom";
import DarkMode from "../../DarkMode/DarkMode";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logout completed successfully",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

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
    </>
  );

  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="flex justify-between navbar ">
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
            <div className="  ">
              <img
                className="w-60 "
                src="https://i.ibb.co/H4cPk8b/final-Copy.png"
                alt=""
              />
            </div>

            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {links}
              </ul>
            </div>
            <DarkMode></DarkMode>
            {user ? (
              <div className="flex items-center gap-3 ml-2">
                <div>
                  <img
                    className="w-10 rounded-full"
                    src={user.photoURL}
                    alt={user.displayName}
                  />
                  <p>{user.displayName}</p>
                </div>
                <button onClick={handleLogOut} className="btn normal-case">
                  LogOut
                </button>
              </div>
            ) : (
              <button className=" btn normal-case">
                <Link to="/login">Login</Link>
              </button>
            )}
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
    </div>
  );
};

export default Navbar;
