import { useState } from "react";
import StatusColumn from "../StatusColumn";
import { TaskType } from "../../types/Task";
import AddTask from "../AddTask";

const Board = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const handleMoveForward = (id: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status: task.status === "To Do" ? "In Progress" : "Done",
        } as TaskType;
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const handleMoveBack = (id: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status: task.status === "In Progress" ? "To Do" : "In Progress",
        } as TaskType;
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="w-full h-5/6 py-8 px-12">
      <div className="grid grid-cols-3 h-full gap-4 mb-4">
        <StatusColumn
          tasks={tasks}
          handleMoveBack={handleMoveBack}
          handleMoveForward={handleMoveForward}
          status="To Do"
        />
        <StatusColumn
          tasks={tasks}
          handleMoveBack={handleMoveBack}
          handleMoveForward={handleMoveForward}
          status="In Progress"
        />
        <StatusColumn
          tasks={tasks}
          handleMoveBack={handleMoveBack}
          handleMoveForward={handleMoveForward}
          status="Done"
        />
      </div>
      <AddTask
        addTaskCallback={(task: TaskType) => setTasks([task, ...tasks])}
      />
    </div>
  );
};

export default Board;
