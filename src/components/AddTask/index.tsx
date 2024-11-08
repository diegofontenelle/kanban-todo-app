import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskType } from "../../types/Task";
import { Status } from "../../types/Status";

type Props = {
  addTaskCallback: (task: TaskType) => void;
};

const AddTask = ({ addTaskCallback }: Props) => {
  const [task, setTask] = useState<string>("");

  function handleAddTask() {
    addTaskCallback({
      id: uuidv4(),
      title: task,
      status: Status.TODO,
    });
    setTask("");
  }

  return (
    <div className="flex gap-4">
      <input
        className="border py-2 px-3 rounded-xl"
        type="text"
        placeholder="Add Task"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            handleAddTask();
          }
        }}
      />
      <button
        className="border py-2 px-3 rounded-xl w-12 bg-blue-400 text-white text-2xl"
        type="button"
        onClick={() => handleAddTask()}
      >
        +
      </button>
    </div>
  );
};

export default AddTask;
