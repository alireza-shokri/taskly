import { useDispatch, useSelector } from "react-redux";
import AddTagOrList from "../../features/sideBar/AddTagOrList";
import { addItemList, deleteItemList } from "./listSlice";
import ItemList from "./ItemList";

function Lists() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list.list);

  function handleAddItem(newItem) {
    dispatch(addItemList(newItem));
  }
  function handleDeleteItem(name) {
    dispatch(deleteItemList(name));
  }
  return (
    <div className="mt-3 border-b border-gray-300">
      <h3 className="font-semibold uppercase">lists :</h3>
      <ul className="custom-scroll space-y-2 rounded-md p-2">
        {list.map((item) => (
          <ItemList
            onDelete={() => handleDeleteItem(item.title)}
            color={item.color}
            title={item.title}
            key={`${item.title}${item.color}`}
          />
        ))}
      </ul>

      <AddTagOrList onAddItem={handleAddItem}>Add List</AddTagOrList>
    </div>
  );
}

export default Lists;
