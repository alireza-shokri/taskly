import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Notes from "./features/notes/Notes";
import Tasks from "./features/task/Tasks";
import Layout from "./ui/Layout";
import NoPage from "./ui/NoPage";
import Result from "./features/Results/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate replace to="/tasks" />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/result/:query" element={<Result />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
