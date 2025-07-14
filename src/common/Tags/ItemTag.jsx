import DeleteItem from "./DeleteItem";

function ItemTag({ title, color, onClick, onDelete }) {
  const baseClasses =
    "px-2 text-sm shadow-md p-0.5 capitalize select-none rounded-full";

  const hasInteraction = onDelete || onClick;

  const commonStyle = {
    style: color ? { background: color } : {},
    className: `${baseClasses} ${
      hasInteraction
        ? "flex items-center justify-between gap-2 cursor-pointer transition-transform hover:scale-105"
        : "border border-gray-500"
    }`,
  };

  if (onDelete) {
    return <DeleteItem onDelete={onDelete} commonStyle={commonStyle} title={title} />;
  }

  return (
    <span {...commonStyle} onClick={onClick}>
      {title}
    </span>
  );
}

export default ItemTag;
