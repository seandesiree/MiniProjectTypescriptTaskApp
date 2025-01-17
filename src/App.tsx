import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskDashboard from './components/TaskDashboard.tsx';
import TaskDetails from './components/TaskDetails.tsx';
import TaskForm from './components/TaskForm.tsx';
import { TaskProvider } from './context/TaskContext.tsx';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import ProtectedPage from './components/ProtectedPage.tsx';
import AuthenticationGuard from './components/AuthenticationGuard.tsx';
import CallbackPage from './components/CallbackPage.tsx';
import HomePage from './components/HomePage.tsx';

const App: React.FC = () => {
  const { isLoading } = useAuth0();
    if ( isLoading ) return (<div>Loading...</div>
    )

  return (
    
    <Auth0Provider domain={''} clientId={''}>
      <TaskProvider>
          <Routes>
            <Route path="/dashboard" element={<TaskDashboard />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/tasks/new" element={<TaskForm />} />
            <Route path="/tasks/edit/:id" element={<TaskForm />} />
            <Route path="/tasks/:id" element={<TaskDetails />} />
            <Route path="/protected" element={<AuthenticationGuard component={ProtectedPage} />} />
            <Route path="/callback" element={<CallbackPage />} />
          </Routes>     
      </TaskProvider>
    </Auth0Provider>
  );
};

export default App;