import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState(false);
    const [loading, setLoading] = useState(true);
    const { authTokens } = useContext(UserContext);

    useEffect(() => {
        if (authTokens) {
            get_products();
        } else {
        setLoading(false);
        }
      
    }, [authTokens]);

    const get_products = () => {
        axios.get('http://localhost:8000/api/get_products', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authTokens.access}`
            }
        })
        .then(response => {
            setProducts(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            setLoading(false);
        });
    }


    const AddToCart = (productId) => {
        axios.post('http://localhost:8000/api/add_to_cart', {
                "product_id": productId
            }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authTokens.access}`
            }})
            .then(response => {
                console.log(response.data);
                getCart();
            })
            .catch(error => {
                console.log(error);
            });
    }


    const getCart = () => {
        axios.get('http://localhost:8000/api/get_cart', {
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authTokens.access}`
            }
        })
        .then(response => {
            setCart(response.data);
        })
        .catch(error => {
            console.error('Error fetching Cart:', error);
        });
    }

    
    const RemoveFromCart = (productId) => {
        axios.post('http://localhost:8000/api/remove_from_cart', {
                "product_id": productId
            }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authTokens.access}`
            }})
            .then(response => {
                console.log(response.data);
                getCart();
            })
            .catch(error => {
                console.log(error);
            });
    }


  return (
    <ShopContext.Provider value={{ products, AddToCart, cart, getCart, RemoveFromCart }}>
      {loading ? null : children}
    </ShopContext.Provider>
  );
};
