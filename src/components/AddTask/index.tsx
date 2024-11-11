import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Status } from "../../types/Status";
import useTasksActions from "../../hooks/useTasksActions";

const AddTask = () => {
  const { addTask } = useTasksActions();
  const [title, setTitle] = useState<string>("");

  function handleAddTask() {
    if (title.trim() === "") {
      return;
    }

    addTask({
      id: uuidv4(),
      title,
      status: Status.TODO,
    });
    setTitle("");
  }

  return (
    <div className="flex gap-4">
      <input
        className="border py-2 px-3 rounded-xl"
        type="text"
        placeholder="Add Task"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
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
