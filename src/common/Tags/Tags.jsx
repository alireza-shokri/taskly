import { useDispatch, useSelector } from "react-redux";
import AddTagOrList from "../../features/sideBar/AddTagOrList";
import ItemTag from "./ItemTag";
import { addItemTag, deleteItemTag } from "./TagsSlice";

function Tags() {
  const dispatch = useDispatch();
  function handleAddItem(newItem) {
    dispatch(addItemTag(newItem));
  }
  function handelDeleteItemTag(name) {
    dispatch(deleteItemTag(name));
  }
  const tags = useSelector((state) => state.tags.tags);
  return (
    <div className="mt-3">
      <h3 className="font-semibold uppercase">tags :</h3>
      <div className="grid grid-cols-2 gap-2  py-2 pl-1">
        {tags.map((tag) => (
          <ItemTag
            onDelete={() => handelDeleteItemTag(tag.title)}
            title={tag.title}
            color={tag.color}
            key={`${tag.title}${tag.color}`}
          />
        ))}
      </div>
      <AddTagOrList onAddItem={handleAddItem}>Add Tage</AddTagOrList>
    </div>
  );
}

export default Tags;
