import { useDispatch } from "react-redux";
import ItemTag from "../../common/Tags/ItemTag";
import ItemList from "../../common/Lists/ItemList";
import Button from "../../ui/Button";
import { deleteTask, statusTask } from "./taskSlice";

function ShowTask({ tasks }) {
  return (
    <ul className="space-y-2 pr-2">
      {tasks.map((item) => (
        <ItemTasks key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ShowTask;

function ItemTasks({ item }) {
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(deleteTask(item.id));
  };

  const handleDoTask = () => {
    dispatch(statusTask(item.id));
  };

  return (
    <li
      className={`group rounded-xl border border-gray-200 px-4 py-3 shadow-sm transition-all hover:shadow-md ${
        item.status ? "opacity-60 grayscale" : ""
      }`}
    >
      <div className="mb-2 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            className="h-5 w-5 cursor-pointer accent-green-500"
            onChange={handleDoTask}
            checked={item.status}
          />
          <h2 className="text-lg font-medium text-gray-800">{item.topic}</h2>
        </div>
        <Button
          onClick={handleDeleteTask}
          customStyle="lg:hidden  text-lg lg:group-hover:inline-block transition"
        >
          ❌
        </Button>
      </div>

      {(item.tags.length > 0 || item.lists.length > 0) && (
        <ul className="flex flex-wrap items-center gap-2 pl-8">
          {item.tags.map((tag) => (
            <ItemTag key={tag.title} title={tag.title} color={tag.color} />
          ))}
          {item.tags.length > 0 && item.lists.length > 0 && <span> | </span>}

          {item.lists.map((list) => (
            <ItemList key={list.title} title={list.title} color={list.color} />
          ))}
        </ul>
      )}
    </li>
  );
}
