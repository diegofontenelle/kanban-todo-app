import { Task } from "../types/Task";
import { Status } from "../types/Status";


export type TasksState = {
  [Status.TODO]: Task[];
  [Status.IN_PROGRESS]: Task[];
  [Status.DONE]: Task[];
};

export const initialState: TasksState = {
  [Status.TODO]: [],
  [Status.IN_PROGRESS]: [],
  [Status.DONE]: [],
};

export enum TASKS_ACTION_TYPES {
  ADD_TASK = "ADD_TASK",
  MOVE_BACKWARD = "MOVE_BACKWARD",
  MOVE_FORWARD = "MOVE_FORWARD",
}

const statuses = {
  [Status.TODO]: {
    backward: null,
    forward: Status.IN_PROGRESS,
  },
  [Status.IN_PROGRESS]: {
    backward: Status.TODO,
    forward: Status.DONE,
  },
  [Status.DONE]: {
    backward: Status.IN_PROGRESS,
    forward: null,
  },
};

export const tasksReducer: React.Reducer<
  TasksState,
  { type: TASKS_ACTION_TYPES; payload: Task }
> = (state, action) => {
  switch (action.type) {
    case TASKS_ACTION_TYPES.ADD_TASK: {
      return {
        ...state,
        todo: [action.payload, ...state.todo],
      };
    }

    case TASKS_ACTION_TYPES.MOVE_BACKWARD: {
      return moveTask(state, action.payload, "backward");
    }

    case TASKS_ACTION_TYPES.MOVE_FORWARD: {
      return moveTask(state, action.payload, "forward");
    }
    default:
      return state;
  }
};

const moveTask = (
  state: TasksState,
  task: Task,
  direction: "forward" | "backward"
) => {
  const currentStatus = task.status;
  const newStatus = statuses[currentStatus][direction];

  if (!newStatus) {
    return state;
  }

  return {
    ...state,
    [currentStatus]: state[currentStatus].filter((t) => t.id !== task.id),
    [newStatus]: [...state[newStatus], { ...task, status: newStatus }],
  };
};