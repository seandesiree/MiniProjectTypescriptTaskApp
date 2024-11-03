import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';
import { Task } from '../types/taskTypes';

const TaskDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { tasks } = useContext(TaskContext);
  const task = tasks.find((task: Task) => task.id === id);

  if (!task) {
    return <p>Task not found</p>;
  }

  return (
    <div className="container">
      <h2>Task Details</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{task.title}</h5>
          <p className="card-text">{task.description}</p>
          <p>Status: {task.status}</p>
          <Link to={`/tasks/edit/${task.id}`} className="btn btn-primary">Edit</Link>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
