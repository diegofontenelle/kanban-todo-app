import { createContext } from "react";
import { TasksState } from "../reducers/tasksReducer";
import { Task } from "../types/Task";

type TasksStateContextProps = TasksState | null;

export const TasksStateContext = createContext<TasksStateContextProps>(null);

type TasksDispatchActions = {
  addTask: (task: Task) => void;
  moveBackward: (task: Task) => void;
  moveForward: (task: Task) => void;
};

type TaskDispatchContextProps = TasksDispatchActions | null;

export const TaskDispatchContext =
  createContext<TaskDispatchContextProps>(null);