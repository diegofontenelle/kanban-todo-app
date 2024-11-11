import { useCallback, useMemo, useReducer } from "react";
import {
  initialState,
  TASKS_ACTION_TYPES,
  tasksReducer,
} from "../reducers/tasksReducer";
import { Task } from "../types/Task";
import { TaskDispatchContext, TasksStateContext } from "./TasksContext";

type Props = {
  children: React.ReactNode;
};

const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialState);

  const addTask = useCallback(
    (task: Task) =>
      dispatch({ type: TASKS_ACTION_TYPES.ADD_TASK, payload: task }),
    []
  );

  const moveBackward = useCallback(
    (task: Task) =>
      dispatch({ type: TASKS_ACTION_TYPES.MOVE_BACKWARD, payload: task }),
    []
  );

  const moveForward = useCallback(
    (task: Task) =>
      dispatch({ type: TASKS_ACTION_TYPES.MOVE_FORWARD, payload: task }),
    []
  );

  const dispatchContextValue = useMemo(
    () => ({
      addTask,
      moveBackward,
      moveForward,
    }),
    [addTask, moveBackward, moveForward]
  );

  return (
    <TasksStateContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatchContextValue}>
        {children}
      </TaskDispatchContext.Provider>
    </TasksStateContext.Provider>
  );
};

export default TasksProvider;
