import { useReducer, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../features/task/taskSlice";
import { generateUniqueId } from "../utils/generateUniqueId";
import Input from "../ui/Input";
import ItemTag from "./Tags/ItemTag";
import ItemList from "./Lists/ItemList";
import { addNote } from "../features/notes/notesSlice";
import { lightColors } from "./lightColor";

const initialState = {
  inputValue: "",
  selectedTags: [],
  selectedList: [],
  color: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "updateInputValue":
      return { ...state, inputValue: action.payload };
    case "selectColor":
      return { ...state, color: action.payload };

    case "updateTags": {
      const exists = state.selectedTags.find(
        (tag) => tag.title === action.payload.title,
      );
      return {
        ...state,
        selectedTags: exists
          ? state.selectedTags.filter(
              (tag) => tag.title !== action.payload.title,
            )
          : [...state.selectedTags, action.payload],
      };
    }

    case "updateList": {
      const exists = state.selectedList.find(
        (item) => item.title === action.payload.title,
      );
      return {
        ...state,
        selectedList: exists
          ? state.selectedList.filter(
              (item) => item.title !== action.payload.title,
            )
          : [...state.selectedList, action.payload],
      };
    }

    case "reset":
      return { ...initialState };

    default:
      return state;
  }
}

function InputBox({ type }) {
  const tags = useSelector((state) => state.tags.tags);
  const list = useSelector((state) => state.list.list);
  const dispatch = useDispatch();
  const textareaRef = useRef();
  const [{ inputValue, selectedTags, selectedList, color }, inputBoxDispatch] =
    useReducer(reducer, initialState);

  function handleSubmit(e) {
    e.preventDefault();
    if (type === "notes") {
      const textareaValue = textareaRef.current.value;
      if (!inputValue.trim() || !textareaValue.trim()) return;
      const newNotes = {
        id: generateUniqueId(),
        topic: inputValue,
        description: textareaValue,
        tags: selectedTags,
        color,
      };
      dispatch(addNote(newNotes));
    } else {
      if (!inputValue.trim()) return;
      const newTask = {
        id: generateUniqueId(),
        topic: inputValue,
        lists: selectedList,
        tags: selectedTags,
        status: false,
      };
      dispatch(addTask(newTask));
    }

    inputBoxDispatch({ type: "reset" });
  }

  function handleInputValue(value) {
    inputBoxDispatch({ type: "updateInputValue", payload: value });
  }

  return (
    <div className="mt-4 rounded-xl border border-gray-300 p-2 shadow-md select-none">
      <Input
        placeholder={
          type === "task" ? "Add new task ..." : "Add Note Title ..."
        }
        inputValue={inputValue}
        handleInputValue={handleInputValue}
        onSubmit={handleSubmit}
        iconBtn="✅"
      >
        {type === "notes" && inputValue.trim() && (
          <textarea
            ref={textareaRef}
            className="w-full pl-6 outline-0"
            placeholder="Take your note! ..."
          ></textarea>
        )}
      </Input>

      {/* Tags */}
      {inputValue.trim() && (
        <div className="mt-2 ml-2 flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-amber-100 text-gray-700 capitalize">
            tags :
          </span>
          {tags.map((tag) => {
            const isSelected = selectedTags.some((t) => t.title === tag.title);
            return (
              <ItemTag
                key={tag.title}
                title={tag.title}
                onClick={() =>
                  inputBoxDispatch({ type: "updateTags", payload: tag })
                }
                color={isSelected ? tag.color : undefined}
              />
            );
          })}
        </div>
      )}

      {/* Lists or Color Picker */}
      {inputValue.trim() && (
        <>
          {type === "notes" ? (
            <div className="mt-2 ml-2 flex flex-wrap items-center">
              <span className="bg-amber-100 mr-2">color :</span>
              {lightColors.map((item) => (
                <ItemList
                  key={item}
                  onClick={() =>
                    inputBoxDispatch({
                      type: "selectColor",
                      payload: item,
                    })
                  }
                  color={item}
                  isSelected={color === item}
                />
              ))}
            </div>
          ) : (
            <div className="mt-2 ml-2 flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-amber-100 text-gray-700 capitalize">
                lists :
              </span>
              {list.map((item) => {
                const isSelected = selectedList.some(
                  (l) => l.title === item.title,
                );
                return (
                  <ItemTag
                    key={item.title}
                    title={item.title}
                    onClick={() =>
                      inputBoxDispatch({
                        type: "updateList",
                        payload: item,
                      })
                    }
                    color={isSelected ? item.color : undefined}
                  />
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default InputBox;
