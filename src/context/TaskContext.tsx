import React, { createContext, useReducer } from 'react';
import { Task } from '../types/taskTypes';


type TaskAction =
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'EDIT_TASK'; payload: Task }
  | { type: 'DELETE_TASK'; payload: string };

const taskReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'EDIT_TASK':
      return state.map((task) => (task.id === action.payload.id ? action.payload : task));
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

const initialTasks: Task[] = [];

export const TaskContext = createContext<any>(null);

export const TaskProvider: React.FC = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  const addTask = (task: Task) => {
    dispatch({ type: 'ADD_TASK', payload: task });
  };

  const editTask = (task: Task) => {
    dispatch({ type: 'EDIT_TASK', payload: task });
  };

  const deleteTask = (id: string) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
