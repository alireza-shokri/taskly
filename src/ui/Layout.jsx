import { Outlet } from "react-router-dom";
import SideBar from "../features/sideBar/SideBar";
import { useSelector } from "react-redux";

function Layout() {
  const isSidebarVisible = useSelector(
    (state) => state.sideBar.isSidebarVisible,
  );
  return (
    <div className="relative mx-auto grid h-[100dvh] w-full max-w-[75rem] grid-cols-1 overflow-hidden md:h-[98dvh] md:grid-cols-[17rem_1fr] md:px-2 md:py-3">
      <SideBar />
      <div
        className={`custom-scroll h-full transition-opacity duration-300 md:pointer-events-auto md:opacity-100 ${isSidebarVisible ? "pointer-events-none opacity-40" : "pointer-events-auto opacity-100"}`}
      >
        <Outlet />
      </div>
    </div>
  );
}
export default Layout;
