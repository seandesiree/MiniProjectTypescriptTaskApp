import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext.tsx';
import { Task } from '../types/taskTypes.ts';
import { Link } from 'react-router-dom';

const TaskDashboard: React.FC = () => {
  const { tasks, deleteTask } = useContext(TaskContext);

  return (
    <div className="container">
      <h2>Task Dashboard</h2>
      <ul className="list-group">
        {tasks.map((task: Task) => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{task.title}</h5>
              <p>{task.description}</p>
              <span>Status: {task.status}</span>
            </div>
            <div>
              <Link to={`/tasks/edit/${task.id}`} className="btn btn-primary btn-sm mx-2">Edit</Link>
              <button onClick={() => deleteTask(task.id)} className="btn btn-danger btn-sm">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskDashboard;
