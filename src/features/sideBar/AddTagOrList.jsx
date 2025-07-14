import { useState } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { lightColors } from "../../common/lightColor";

function AddTagOrList({ children, onAddItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(null);
  const [labelItem, setLabelItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!color || !labelItem.trim()) return;
    onAddItem({ title: labelItem, color });
    setColor(null);
    setLabelItem("");
    setIsOpen(false);
  }
  function handleToggleBox() {
    setIsOpen((open) => !open);
    setColor(null);
    setLabelItem("");
  }
  return (
    <div className="relative mt-3">
      <Button customStyle=" p-1 text-gray-800 " onClick={handleToggleBox}>
        {isOpen ? "❌ close " : `➕ ${children}`}
      </Button>

      {isOpen && (
        <>
          <Input
            isFocuse={true}
            placeholder="add Name ..."
            inputValue={labelItem}
            handleInputValue={setLabelItem}
            onSubmit={handleSubmit}
            customStyle="relative flex h-10  items-center justify-between border-b border-gray-400"
          >
            <Button customStyle="peer ml-2 text-2xl ">
              {color ? (
                <span
                  className="block h-6 w-6 cursor-pointer rounded-md border border-gray-400"
                  style={{ backgroundColor: color }}
                ></span>
              ) : (
                <span className="cursor-pointer">🎨</span>
              )}
            </Button>

            <div className="absolute -top-24 right-0 hidden w-40 flex-wrap gap-1 rounded-xl bg-gray-50 p-2 shadow-xl peer-focus:flex active:flex">
              {lightColors.map((color, i) => (
                <span
                  onClick={() => setColor(color)}
                  className="block h-6 w-6 cursor-pointer rounded-md border border-gray-400 transition-all duration-200 hover:scale-110"
                  style={{ backgroundColor: color }}
                  key={i}
                ></span>
              ))}
            </div>
          </Input>

          {labelItem.trim() && color && (
            <Button
              onClick={handleSubmit}
              customStyle="active:scale-100 w-full mt-1 px-2 py-1 bg-blue-200  rounded-md "
            >
              Add
            </Button>
          )}
        </>
      )}
    </div>
  );
}

export default AddTagOrList;
