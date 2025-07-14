import { NavLink } from "react-router-dom";

function BtnLink({ children, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `rounded text-[1.1rem] transition duration-200 ${
          isActive
            ? "underline underline-offset-4"
            : "text-gray-700 hover:text-blue-500"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

export default BtnLink;
