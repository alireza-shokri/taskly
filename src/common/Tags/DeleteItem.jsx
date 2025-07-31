import { useState } from "react";
import Button from "../../ui/Button";

function DeleteItem({ onDelete, title, commonStyle }) {
  const [isDeleting, setIsDeleting] = useState(false);

  function toggleDelete() {
    setIsDeleting((prev) => !prev);
  }

  return (
    <div {...commonStyle} onClick={toggleDelete} >
      <span>{title}</span>
      {isDeleting && <Button onClick={onDelete}>❌</Button>}
    </div>
  );
}

export default DeleteItem;
