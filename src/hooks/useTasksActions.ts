import { useContext } from "react"
import { TaskDispatchContext } from "../context/TasksContext"

const useTasksActions = () => {
  const context = useContext(TaskDispatchContext)

  if (!context) {
    throw new Error('useTasksActions must be used within a TasksProvider');
  }

  return context;
}

export default useTasksActions;