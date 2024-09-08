import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; 
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tokens = localStorage.getItem('Tokens');
    if (tokens) {
      const parsedTokens = JSON.parse(tokens);
      const decodedToken = jwtDecode(tokens);

      refreshTokens(parsedTokens);
      setUser(decodedToken);
    }
    else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let interval;

    if (authTokens) {
      interval = setInterval(() => {
          refreshTokens(authTokens);
        }, 300000);
      } else {
      clearInterval(interval);

    }
  
    return () => clearInterval(interval);
  }, [authTokens]);

  const refreshTokens = (tokens) => {
    console.log('Refresh token requested.')
    axios.post('http://localhost:8000/api/token/refresh/', {
      'refresh': tokens.refresh }, {
      headers: {
           'Content-Type': 'application/json',
      }})
    .then(function (response) {
      const data = response.data; 

      setAuthTokens(data);
      localStorage.removeItem('Tokens');
      localStorage.setItem('Tokens', JSON.stringify(data));
      setLoading(false);
    })
    .catch(function (error) {
      console.log(error);
      setAuthTokens(null);
      setUser(null);
      localStorage.removeItem('Tokens');
      setLoading(false);
    })
  };

  const signup = (userInfo) => {
    axios.post('http://localhost:8000/api/signup', userInfo, {
            headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
            const data = response.data;
            setAuthTokens(data);
            setUser(jwtDecode(data.access));

            localStorage.removeItem('Tokens');
            localStorage.setItem('Tokens', JSON.stringify(data));
        })
        .catch(function (error) {
            console.log(error.response.data);
        });
  }

  const LogIn = (userInfo) => {
    axios.post('http://localhost:8000/api/token/', userInfo, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        })
        .then(function (response) {
            const data = response.data;

            setAuthTokens(data);
            setUser(jwtDecode(data.access));
            localStorage.removeItem('Tokens');
            localStorage.setItem('Tokens', JSON.stringify(data));
        })
        .catch(function (error) {
            console.log(error);
        });
  }

  const LogOut = () => {
    axios.post('http://localhost:8000/api/logout', 
      {'refresh_token': authTokens.refresh} ,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authTokens.access}`
        }
    })
    .then(response => {
        if(response.status === 205) {
            setAuthTokens(null);
            setUser(null);
            localStorage.removeItem('Tokens');
            console.log('Logout succesfully!')
        } else {
            console.log('Failed to log out user');
            handelError('Failed to log out user');
        }
    })
    .catch((error) => console.error('Error:', error));
  }


  return (
    <UserContext.Provider value={{ authTokens, user, signup, LogIn, LogOut }}>
      {loading ? null : children}
    </UserContext.Provider>
  );
};
