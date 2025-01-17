import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';


type Auth0ProviderNavigateProps = {
  children: any;
}

const Auth0ProviderNavigate: React.FC<Auth0ProviderNavigateProps> = ({ children, }) => {
  const navigate = useNavigate();
  const domain = "dev-rea751pyhaav3jlz.us.auth0.com";
  const clientId = "SpbHRJXVj2b66o97UBJDpVROEuuPJNBT";
  const redirectUri = "http://localhost:3000/callback";


  const onRedirectCallback = (appState: any) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {return null;

  }

  return (
    <Auth0ProviderNavigate>
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        scope: "openid profile email"
      }}
      onRedirectCallback={onRedirectCallback}
      cacheLocation = "localstorage"
    
      {children}
    </Auth0ProviderNavigate>
  );
};

export default Auth0Provider;