import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { setSidebarVisible } from "./sideBarSlice";

function ButtonSideBar() {
  const dispatch = useDispatch();

  return (
    <Button
      customStyle="active:scale-100 absolute -z-10 -right-4 top-1/2 h-64 w-10 -translate-y-1/2 flex justify-end rounded-full border-r-1 border-black bg-gray-200 md:hidden"
      onClick={() => dispatch(setSidebarVisible())}
    ></Button>
  );
}

export default ButtonSideBar;
