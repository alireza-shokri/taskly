import Button from "../../ui/Button";

function ItemList({ title, color, isSelected, onClick, onDelete }) {
  const styleOndelete = onDelete
    ? "transform flex  items-center gap-2 transition-transform hover:translate-x-2 group relative"
    : "";

  const styleOnclick = onClick ? "cursor-pointer hover:scale-110" : "";

  const styleIsSelected = isSelected
    ? "border-1 border-gray-950 bg-teal-900"
    : "";

  if (onDelete)
    return (
      <li className={`${styleOndelete} `}>
        <span
          className={`inline-block h-5 w-5 rounded-md border border-gray-400 shadow`}
          style={{ background: color }}
        ></span>
        <span className="text-sm capitalize">{title}</span>

        <Button
          customStyle=" lg:group-hover:block text-sm lg:hidden  absolute right-0 "
          onClick={onDelete}
        >
          ❌
        </Button>
      </li>
    );

  if (onClick)
    return (
      <>
        <span
          className={`m-1 h-5 w-5 rounded-md border border-gray-400 shadow ${styleOnclick} ${styleIsSelected}`}
          style={{ background: color }}
          onClick={onClick}
        ></span>
        <span>{title}</span>
      </>
    );

  return (
    <span className="flex items-center gap-1">
      <span
        className={`inline-block h-5 w-5 rounded-md border border-gray-400 shadow`}
        style={{ background: color }}
        onClick={onClick}
      ></span>
      <span>{title}</span>
    </span>
  );
}

export default ItemList;
