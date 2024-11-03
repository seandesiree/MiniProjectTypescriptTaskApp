// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskDashboard from './components/TaskDashboard';
import TaskDetails from './components/TaskDetails';
import TaskForm from './components/TaskForm';
import Auth from './components/Auth';
import { TaskProvider } from './context/TaskContext';
import { Auth0Provider } from '@auth0/auth0-react';

const App: React.FC = () => {
  return (
    <Auth0Provider
      domain="YOUR_AUTH0_DOMAIN"
      clientId="YOUR_AUTH0_CLIENT_ID"
      redirectUri={window.location.origin}
    >
      <TaskProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={TaskDashboard} />
            <Route path="/tasks/new" component={TaskForm} />
            <Route path="/tasks/edit/:id" component={TaskForm} />
            <Route path="/tasks/:id" component={TaskDetails} />
            <Route path
