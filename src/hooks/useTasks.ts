import { useContext } from "react"
import { TasksStateContext } from "../context/TasksContext"
import { Status } from "../types/Status";

const useTasks = (status: Status) => {
  const tasks = useContext(TasksStateContext)

  if (!tasks) {
    throw new Error('useTasks must be used within a TasksProvider');
  }

  return tasks[status];
}

export default useTasks;