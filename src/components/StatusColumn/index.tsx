import useTasks from "../../hooks/useTasks";
import { Status } from "../../types/Status";
import { getReadableStatus } from "../../utils/getReadableStatus";
import Task from "../Task";

type Props = {
  status: Status;
};

const StatusColumn = ({ status }: Props) => {
  const tasks = useTasks(status);

  return (
    <div className="flex flex-col items-center h-[360px] shadow-all-around rounded-xl">
      <h2 className="text-2xl text-zinc-800 py-4 px-6">
        {getReadableStatus(status)}
      </h2>
      <div className="flex flex-col items-center gap-4 py-4 px-6 w-full max-h-[80%] overflow-x-hidden overflow-y-scroll">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default StatusColumn;
