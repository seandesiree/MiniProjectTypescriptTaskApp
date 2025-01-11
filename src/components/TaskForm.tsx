import React, { useState, useContext, useEffect } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Task } from '../types/taskTypes';
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm: React.FC = () => {
  const { addTask, editTask, tasks } = useContext(TaskContext);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [task, setTask] = useState<Task>({
    id: '',
    title: '',
    description: '',
    status: 'pending',
  });

  useEffect(() => {
    if (id) {
      const foundTask = tasks.find((task) => task.id === id);
      if (foundTask) {
        setTask(foundTask);
      }
    }
  }, [id, tasks]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      editTask(task);
    } else {
      addTask(task);
    }
    navigate('/');
  };

  return (
    <div className="container">
      <h2>{id ? 'Edit Task' : 'Create Task'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Status</label>
          <select
            className="form-control"
            value={task.status}
            onChange={(e) => setTask({ ...task, status: e.target.value as Task['status'] })}
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
