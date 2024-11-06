import { TaskType } from "../../types/Task";

type Props = {
  handleMoveBack: () => void;
  handleMoveForward: () => void;
  task: TaskType;
};

const Task = ({ task, handleMoveBack, handleMoveForward }: Props) => {
  const isMoveBackDisabled = task.status === "To Do";
  const isMoveForwardDisabled = task.status === "Done";

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
        onChange={handleMoveBack}
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
        onChange={handleMoveForward}
      >
        →
      </button>
    </div>
  );
};

export default Task;
