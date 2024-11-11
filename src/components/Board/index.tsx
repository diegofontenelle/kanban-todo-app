import StatusColumn from "../StatusColumn";
import AddTask from "../AddTask";
import { Status } from "../../types/Status";
import TasksProvider from "../../context/TasksProvider";

const Board = () => {
  return (
    <TasksProvider>
      <div className="w-full h-5/6 py-8 px-12">
        <div className="grid grid-cols-3 h-full gap-4 mb-4">
          <StatusColumn status={Status.TODO} />
          <StatusColumn status={Status.IN_PROGRESS} />
          <StatusColumn status={Status.DONE} />
        </div>
        <AddTask />
      </div>
    </TasksProvider>
  );
};

export default Board;
