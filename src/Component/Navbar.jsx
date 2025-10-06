import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar w-11/12 mx-auto px-0">
      <div className="navbar-start w-full lg:w-[1/2]">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden pl-0 pr-1 mt-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-200 rounded-box z-1 mt-3 w-60 p-3 shadow space-y-2"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/wishlist">Wishlist</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-2xl font-bold">
          Home Decor
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex space-x-4">
        <ul className="menu menu-horizontal space-x-4 text-base">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/wishlist">Wishlist</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
