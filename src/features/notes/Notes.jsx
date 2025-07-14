import { useSelector } from "react-redux";
import InputBox from "../../common/InputBox";
import Title from "../../ui/Title";
import ShowNotes from "./ShowNotes";
import { getNotesLen } from "./notesSlice";
import { useEffect } from "react";

function Notes() {
  const notesLen = useSelector(getNotesLen);
  const notes = useSelector((state) => state.notes.notes);

  useEffect(() => {
    document.title = "My Notes";
  }, []);

  return (
    <div className=" py-5 pr-2 pl-4.5 md:px-8 md:py-4">
      <header>
        <Title subject="Sticky Notes" length={notesLen} />
        <InputBox type="notes" />
      </header>
      <main className="my-2">
        <ShowNotes notes={notes} />
      </main>
    </div>
  );
}

export default Notes;
