import { useDispatch } from "react-redux";
import ItemTag from "../../common/Tags/ItemTag";
import Button from "../../ui/Button";
import { deleteNote } from "./notesSlice";

function ShowNotes({ notes }) {
  return (
    <div className="flex flex-wrap gap-4 py-4">
      {notes.map((note) => (
        <NoteItem note={note} key={note.id} />
      ))}
    </div>
  );
}

export default ShowNotes;

function NoteItem({ note }) {
  const dispatch = useDispatch();
  const { topic, description, color, tags } = note;

  function handleDeleteNote(id) {
    dispatch(deleteNote(id));
  }

  return (
    <div
      className="group relative flex h-fit max-w-50 min-w-30 flex-col gap-2 rounded-2xl border border-gray-200 p-4 shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
      style={{
        background: color || "#f5f5f5",
      }}
    >
      {/* for Delete  */}
      <Button
        customStyle="absolute top-2 right-2 text-sm text-gray-500 hover:text-red-600 lg:hidden lg:group-hover:block transition"
        onClick={() => handleDeleteNote(note.id)}
      >
        ❌
      </Button>

      <h4 className="text-lg font-bold text-gray-800">{topic}</h4>

      <p className="indent-1 text-sm text-[0.95rem] whitespace-pre-line text-gray-700">
        {description}
      </p>

      {tags.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-1">
          {tags.map((tag, i) => (
            <ItemTag title={tag.title} color={tag.color} key={i} />
          ))}
        </div>
      )}
    </div>
  );
}
