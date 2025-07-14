function Button({ children, onClick, customStyle = "" }) {
  const baseStyle = "cursor-pointer active:scale-90 select-none ";
  return (
    <button className={`${baseStyle}${customStyle}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
