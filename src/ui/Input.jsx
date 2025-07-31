import { useEffect, useRef } from "react";
import Button from "./Button";

function Input({
  placeholder,
  inputValue,
  handleInputValue,
  iconBtn,
  onSubmit,
  customStyle,
  children,
  isFocuse,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isFocuse) return;
    inputRef.current.focus();
  }, [isFocuse]);

  return (
    <form onSubmit={onSubmit} className={`${customStyle} `}>
      <div className="flex items-center justify-between">
        <input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => handleInputValue(e.target.value)}
          type="text"
          placeholder={placeholder}
          className="w-full p-2 outline-0"
        />

        <Button customStyle="text-xl" onClick={onSubmit}>
          {inputValue.trim() && iconBtn}
        </Button>
      </div>
      {children}
    </form>
  );
}

export default Input;
