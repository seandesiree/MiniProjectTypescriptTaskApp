import React, { useState, useContext, useEffect } from 'react';
import { TaskContext } from '../context/TaskContext.tsx';
import { Task } from '../types/taskTypes.ts';
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
      const foundTask = tasks.find((task: { id: string; }) => task.id === id);
      if (foundTask) {
        setTask(foundTask);
      }
    }
  }, [id, tasks]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
  
    const taskToSave = id ? task : { ...task, id: Date.now().toString() };
    
    if (id) {
      editTask(taskToSave);
    } else {
      addTask(taskToSave);
    }
    navigate('/');
  };

  return (
    <div className="container">
      <h2>{id ? 'Edit Task' : 'Create Task'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            required
          />
        </div>

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

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            {id ? 'Update Task' : 'Create Task'}
          </button>
          <button 
            type="button" 
            className="btn btn-secondary ml-2"
            onClick={() => navigate('/')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;