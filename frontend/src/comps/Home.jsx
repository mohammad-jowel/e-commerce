import { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { UserContext } from '../UserContext';

const Home =  () =>{
    const { authTokens, user } = useContext(UserContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
      if(authTokens) {
        getUser();
      }
    }, [])
    
    const getUser = () => {
      axios.get('http://localhost:8000/api/get_products', {
        headers: {
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${authTokens.access}`
        }})
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }

    return (
      <div className='text-xl font-medium text-slate-800 text-center py-5'>
        <p className='mb-4 text-3xl'>Home</p>
        {!user ?
           <p>Not logged in</p>:

          <>
            <p>Logged in is as {user.name}</p>
            <h3>All Users</h3>
            {user && products.map(product => (
              <li key={product.id}>{product.name}</li>
            ))}
          </>
          
        }
      </div>
    );
  }

export default Home;