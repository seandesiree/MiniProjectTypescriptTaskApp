import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskDashboard from './components/TaskDashboard.tsx';
import TaskDetails from './components/TaskDetails.tsx';
import TaskForm from './components/TaskForm.tsx';
import { TaskProvider } from './context/TaskContext.tsx';
import { Auth0Provider } from '@auth0/auth0-react';

const App: React.FC = () => {
  return (
    <Auth0Provider
      domain="YOUR_AUTH0_DOMAIN"
      clientId="YOUR_AUTH0_CLIENT_ID"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <TaskProvider>
        <Router>
          <Routes>
            <Route path="/" element={<TaskDashboard />} />
            <Route path="/tasks/new" element={<TaskForm />} />
            <Route path="/tasks/edit/:id" element={<TaskForm />} />
            <Route path="/tasks/:id" element={<TaskDetails />} />
          </Routes>
        </Router>
      </TaskProvider>
    </Auth0Provider>
  );
};

export default App;