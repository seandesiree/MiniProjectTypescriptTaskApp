import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const Auth: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  

  }): void;
  return (
    <div className="container">
      {isAuthenticated ? (
        <div>
          <h4>Welcome, {user?.name}</h4>
          <button onClick={() => logout({ returnTo: window.location.origin })} className="btn btn-danger">
            Logout
          </button>
        </div>
      ) : (
        <button onClick={() => loginWithRedirect()} className="btn btn-primary">
          Login
        </button>
      )}
    </div>
  );
};

export default Auth;



