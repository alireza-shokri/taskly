import { useSelector } from "react-redux";
import InputBox from "../../common/InputBox";
import ShowTask from "./showTask";
import { getTaskLen } from "./taskSlice";
import Title from "../../ui/Title";
import { useEffect } from "react";

function Tasks() {
  const taskLen = useSelector(getTaskLen);
  const tasks = useSelector((state) => state.tasks.tasks);
  useEffect(()=>{
      document.title='My Task'
    },[])
  return (
    <div className="  py-4 pr-2 pl-4.5 md:px-8 md:py-4">
      <header>
        <Title subject={"tasks"} length={taskLen} />
        <InputBox type="task" />
      </header>
      <main className="my-2">
        <ShowTask tasks={tasks} />
      </main>
    </div>
  );
}

export default Tasks;
