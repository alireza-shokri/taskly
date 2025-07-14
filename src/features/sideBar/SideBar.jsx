import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonSideBar from "./ButtonSideBar";
import BtnLink from "../../ui/BtnLink";
import Input from "../../ui/Input";
import Lists from "../../common/Lists/Lists";
import Tags from "../../common/Tags/Tags";
import { useDispatch, useSelector } from "react-redux";
import {
  setDragStartX,
  setInputValue,
  setSidebarVisible,
} from "./sideBarSlice";
import Title from "../../ui/Title";

function SideBar() {
  const { isSidebarVisible, inputValue, dragStartX } = useSelector(
    (state) => state.sideBar,
  );
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      navigate(`/result/${inputValue}`);
      document.activeElement.blur();
    }
  };

  const handleInputValue = (value) => {
    dispatch(setInputValue(value));
  };

  const handleMouseDown = (e) => {
    const start = e.type === "mousedown" ? e.clientX : e.touches[0].clientX;
    dispatch(setDragStartX(start));
  };

  const handleMouseUp = (e) => {
    const end = e.type === "mouseup" ? e.clientX : e.changedTouches[0].clientX;
    if (dragStartX > end + 70) {
      dispatch(setSidebarVisible(false));
    }
    dispatch(setDragStartX(0));
  };

  useEffect(() => {
    dispatch(setSidebarVisible(false));
    if (location.pathname === "/notes" || location.pathname === "/tasks")
      setInputValue("");
  }, [location, dispatch]);

  return (
    <aside
      className={`absolute z-50 h-full max-w-[17rem] transform bg-gray-200 transition-transform duration-300 ease-in-out select-none md:sticky md:translate-x-0 md:rounded-xl lg:h-[98dvh] ${
        isSidebarVisible ? "translate-x-0" : "-translate-x-full"
      }`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
    >
      <div className="custom-scroll h-full px-5 py-5">
        
        <h1 className="mb-4 text-3xl font-semibold text-gray-800">
          🗂️ My Note
        </h1>

        <Input
          placeholder="Search ..."
          inputValue={inputValue}
          handleInputValue={handleInputValue}
          iconBtn="🔍"
          onSubmit={handleSubmit}
          customStyle=" px-3 py-1 rounded-2xl bg-gray-50 outline-none"
        />

        <nav className="mt-5 flex flex-col gap-2">
          <BtnLink to="/tasks">📋 Tasks</BtnLink>
          <BtnLink to="/notes">📝 Notes</BtnLink>
        </nav>

        <Lists />
        <Tags />

      </div>
      <ButtonSideBar />
    </aside>
  );
}

export default SideBar;
