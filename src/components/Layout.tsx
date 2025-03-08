import { NavLink } from "react-router-dom";
import { FaStore, FaBoxes, FaCalendarAlt, FaChartBar } from "react-icons/fa";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  // Function to determine active link classes
  const getLinkClasses = (isActive: boolean) => {
    return `flex items-center w-full px-4 py-2 rounded ${
      isActive
        ? "bg-white text-gray-800 font-bold shadow"
        : "text-gray-700 hover:bg-gray-100"
    }`;
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-52 min-h-screen bg-gray-100 p-5">
        <ul className="w-full p-0 list-none">
          <li className="mb-2 w-full">
            <NavLink
              to="/"
              className={({ isActive }: { isActive: boolean }) =>
                getLinkClasses(isActive)
              }
            >
              <FaStore className="mr-3 text-lg" />
              Stores
            </NavLink>
          </li>
          <li className="mb-2 w-full">
            <NavLink
              to="/sku"
              className={({ isActive }: { isActive: boolean }) =>
                getLinkClasses(isActive)
              }
            >
              <FaBoxes className="mr-3 text-lg" />
              SKU
            </NavLink>
          </li>
          <li className="mb-2 w-full">
            <NavLink
              to="/planning"
              className={({ isActive }: { isActive: boolean }) =>
                getLinkClasses(isActive)
              }
            >
              <FaCalendarAlt className="mr-3 text-lg" />
              Planning
            </NavLink>
          </li>
          <li className="mb-2 w-full">
            <NavLink
              to="/chart"
              className={({ isActive }: { isActive: boolean }) =>
                getLinkClasses(isActive)
              }
            >
              <FaChartBar className="mr-3 text-lg" />
              Chart
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main content area */}
      <div className="flex-1 p-5">{children}</div>
    </div>
  );
};
