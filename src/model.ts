export interface Task {
  id: number;
  taskName: string;
  isDone: boolean;
}

type Actions =
  | { type: "add"; payload: string }
  | { type: "delete"; payload: number }
  | { type: "edit"; payload: number };

export const taskReducer = (state: Task[], action: Actions) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { taskName: action.payload, id: Date.now(), isDone: false },
      ];
    case "edit":
      return state.map((task) =>
        task.id === action.payload ? { ...task, isDone: !action.payload } : task
      )
    case "delete":
      return state.filter((task) => task.id !== action.payload)
    default:
      break;
  }
};
