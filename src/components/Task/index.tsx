import { Status } from "../../types/Status";
import { TaskType } from "../../types/Task";

type Props = {
  handleMoveBack: (id: string) => void;
  handleMoveForward: (id: string) => void;
  task: TaskType;
};

const Task = ({ task, handleMoveBack, handleMoveForward }: Props) => {
  const isMoveBackDisabled = task.status === Status.TODO;
  const isMoveForwardDisabled = task.status === Status.DONE;

  return (
    <div
      className={
        "flex items-center justify-between gap-8 max-w-[320px] py-2 px-3 border rounded-lg"
      }
    >
      <button
        type="button"
        className={`text-3xl  ${
          isMoveBackDisabled ? "text-gray-300" : "text-rose-700"
        }`}
        disabled={isMoveBackDisabled}
        onClick={() => handleMoveBack(task.id)}
      >
        ←
      </button>
      <label className="text-center">{task.title}</label>
      <button
        type="button"
        className={`text-3xl ${
          isMoveForwardDisabled ? "text-gray-300" : "text-lime-700"
        }`}
        disabled={isMoveForwardDisabled}
        onClick={() => handleMoveForward(task.id)}
      >
        →
      </button>
    </div>
  );
};

export default Task;
