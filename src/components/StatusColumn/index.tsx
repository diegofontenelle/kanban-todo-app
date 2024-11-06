import { Status } from "../../types/Status";
import { TaskType } from "../../types/Task";

type Props = {
  tasks: TaskType[];
  status: Status;
};

const StatusColumn = ({ tasks, status }: Props) => {
  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <div className="flex flex-col items-center h-[360px] py-4 px-6 shadow-all-around rounded-xl">
      <h2 className="text-2xl text-zinc-800 mb-8">{status}</h2>
      <div className="flex flex-col gap-4">
        {filteredTasks.map((task) => (
          <p key={task.title}>{task.title}</p>
        ))}
      </div>
    </div>
  );
};

export default StatusColumn;
