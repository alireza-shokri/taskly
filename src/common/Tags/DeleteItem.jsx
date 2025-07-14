import { useEffect, useRef, useState } from "react";
import Button from "../../ui/Button";

function DeleteItem({ onDelete, commonStyle, title }) {
  const [showDelete, setshowDelete] = useState(false);
  const touchTimer = useRef(null);
  const hideTimer = useRef(null);
  function handleTouchStart() {
    touchTimer.current = setTimeout(() => {
      setshowDelete(true);
    }, 500);
  }

  function handleTouchEnd() {
    clearTimeout(touchTimer.current);
  }

  function handleDelete() {
    setshowDelete(false);
    onDelete();
  }

  useEffect(() => {
    if (showDelete)
      hideTimer.current = setTimeout(() => {
        setshowDelete(false);
      }, 2000);

    return () => clearTimeout(hideTimer);
  }, [showDelete]);

  return (
    <div
      {...commonStyle}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
    >
      <span>{title}</span>
      {showDelete && <Button onClick={handleDelete}>❌</Button>}
    </div>
  );
}

export default DeleteItem;
