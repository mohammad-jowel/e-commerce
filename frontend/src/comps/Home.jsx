import { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { UserContext } from '../UserContext';
import { Link } from 'react-router-dom';

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
      <>
      <aside id="logo-sidebar" class="fixed top-15 left-0 z-40 w-64 h-screen pt-8 transition-transform -translate-x-full sm:translate-x-0 " aria-label="Sidebar">
        <div class="h-full pl-10 px-3 pb-4 overflow-y-auto bg-white">
            <ul class="space-y-2 font-medium">
                <li>
                    <Link to="/" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-800 hover:text-gray-100 group">
                    <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
                    </Link>
                </li>
            </ul>
        </div>
        </aside>

        <div class="border-l bg-white min-h-svh max-w-full p-4 sm:ml-64">
        <div class="mx-auto p-4 border-2 border-gray-200 border-dashed rounded-lg mt-2">
            <div class="grid grid-cols-2 lg:grid-cols-4  gap-4 lg:gap-8 mb-4">

            <div class="max-w-fit bg-white border border-gray-200 rounded-lg shadow">
                <img class="p-4 rounded-t-lg" src="https://flowbite.com/docs/images/products/apple-watch.png" alt="product image" />
              <div class="px-5 pb-5">
                  <a href="#">
                      <h5 class="text-base font-semibold tracking-tight text-gray-900 ">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                  </a>
                  
                  <div class="flex items-center space-x-2">
                      <span class="text-base font-bold text-gray-900">$599</span>
                      <span class="text-base line-through font-bold text-gray-500">$700</span>
                      <span class="text-base font-bold text-red-400">20% OFF</span>
                  </div>
                  
                  <button type="button" class="flex items-center mt-2 w-full text-white focus:outline-none focus:ring-4 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    <div className="mx-auto flex items-center space-x-2">
                      <svg className="size-5" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 32 32" viewBox="0 0 32 32" id="shopping-bag">
                        <g>
                          <path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M25.8716,28.9377H8.0341c-1.0475,0-1.9292-0.7839-2.0519-1.8242L4.3781,13.7176
                          c-0.1448-1.2284,0.8149-2.308,2.0519-2.308h21.0458c1.237,0,2.1967,1.0796,2.0519,2.308l-1.6042,13.3959
                          C27.8008,28.1538,26.9191,28.9377,25.8716,28.9377z"></path>
                          <path fill="none" stroke="#ffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M11.3279,15.4096v-6.515c0-3.1066,2.5184-5.625,5.625-5.625h0c3.1066,0,5.625,2.5184,5.625,5.625v6.515"></path>
                        </g>
                      </svg>
                      <span>
                        Add to cart
                      </span>
                    </div>
                  </button>
              </div>
          </div>

                <div class="flex items-center justify-center h-24 rounded bg-gray-50">
                    <p class="text-2xl text-gray-400">
                      
                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
                <div class="flex items-center justify-center h-24 rounded bg-gray-50">
                    <p class="text-2xl text-gray-400">
                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
            </div>
            
        </div>
        </div>
        </>
    );
  }

export default Home;