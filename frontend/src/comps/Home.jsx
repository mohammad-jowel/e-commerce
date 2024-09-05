import { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { UserContext } from '../UserContext';

const Home =  () =>{
    const { authTokens, user } = useContext(UserContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
      if(authTokens) {
        getUser();
      }
    }, [])
    
    const getUser = () => {
      axios.get('http://localhost:8000/api/home', {
        headers: {
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${authTokens.access}`
        }})
        .then(response => {
          setUsers(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }

    return (
      <div className='text-xl font-medium text-white text-center py-5'>
        <p className='mb-4 text-3xl'>Home</p>
        {!user ?
           <p>Not logged in</p>:

          <>
            <p>Logged in is as {user.username}</p>
            <h3>All Users</h3>
            {user && users.map(user => (
              <li key={user.id}>{user.username}</li>
            ))}
          </>
          
        }
      </div>
    );
  }

export default Home;