import { Status } from "../../types/Status";
import { TaskType } from "../../types/Task";
import Task from "../Task";

type Props = {
  handleMoveBack: (id: string) => void;
  handleMoveForward: (id: string) => void;
  tasks: TaskType[];
  status: Status;
};

const StatusColumn = ({
  handleMoveBack,
  handleMoveForward,
  tasks,
  status,
}: Props) => {
  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <div className="flex flex-col items-center h-[360px] shadow-all-around rounded-xl">
      <h2 className="text-2xl text-zinc-800 py-4 px-6">{status}</h2>
      <div className="flex flex-col items-center gap-4 py-4 px-6 w-full max-h-[80%] overflow-x-hidden overflow-y-scroll">
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleMoveBack={handleMoveBack}
            handleMoveForward={handleMoveForward}
          />
        ))}
      </div>
    </div>
  );
};

export default StatusColumn;
