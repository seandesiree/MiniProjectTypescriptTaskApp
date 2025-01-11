import React, { createContext, useState, ReactNode } from 'react';
import { Task } from '../types/taskTypes'; 

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  editTask: (task: Task) => void;
  deleteTask: (id: string) => void;
}

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext<any>(null);

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (updatedTask: Task) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};