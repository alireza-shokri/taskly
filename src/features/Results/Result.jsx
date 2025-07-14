import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Title from "../../ui/Title";
import ShowTask from "../task/showTask";
import ShowNotes from "../notes/ShowNotes";
import NoPage from "../../ui/NoPage";
import Button from "../../ui/Button";

function Result() {
  const { query = "" } = useParams();
  const searchQuery = query.toLowerCase();
  const navigate = useNavigate();
  const tasks = useSelector((state) => state.tasks.tasks);
  const notes = useSelector((state) => state.notes.notes);

  const [searchedTask, setSearchedTask] = useState([]);
  const [searchedNotes, setSearchedNotes] = useState([]);

  useEffect(() => {
    setSearchedTask(
      tasks.filter((task) => task.topic.toLowerCase().includes(searchQuery)),
    );
    setSearchedNotes(
      notes.filter((note) =>
        `${note.topic} ${note.description}`.toLowerCase().includes(searchQuery),
      ),
    );
  }, [searchQuery, tasks, notes]);

  const lenResult = searchedTask.length + searchedNotes.length;
  useEffect(()=>{
    document.title='taskly result'
  },[])

  return (
    <div className="space-y-6  bg-gradient-to-br py-4 pr-2 pl-4.5 md:px-10 md:py-8">
      <Title subject="Result " length={lenResult} />

      {lenResult === 0 && (
        <div className="mt-10 text-center text-lg text-gray-500">
          No results found for
          <mark className="rounded bg-red-300 px-2">{query}</mark>
          <br />
          <span className="mt-2 mb-6 block text-sm text-gray-400">
            Please add something related to your search.
          </span>
          <NoPage />
        </div>
      )}

      {searchedTask.length > 0 && (
        <div className="rounded-xl border-l-4 border-cyan-300 bg-white p-4 shadow">
          <h3 className="mb-2 -ml-2 flex items-center gap-1 text-xl font-semibold text-cyan-700">
            Tasks :
          </h3>
          <ShowTask tasks={searchedTask} />
        </div>
      )}

      {searchedNotes.length > 0 && (
        <div className="rounded-xl border-l-4 border-amber-400 bg-white p-4 shadow">
          <h3 className="mb-2 -ml-2 flex items-center gap-1 text-xl font-semibold text-amber-700">
            Notes :
          </h3>
          <ShowNotes notes={searchedNotes} />
        </div>
      )}
      <Button
        customStyle="font-semibold bg-blue-400 ml-2 transition-all duration-100 hover:bg-blue-300 px-3 py-1 rounded-md"
        onClick={() => navigate(-1)}
      >
        back
      </Button>
    </div>
  );
}

export default Result;
