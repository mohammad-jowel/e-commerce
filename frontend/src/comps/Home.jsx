import { useEffect, useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import { ShopContext } from '../ShopContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Pagination from './Pagination';

const Home = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { products, AddToCart } = useContext(ShopContext);
    const [categories, setcategories] = useState(null);
    const [currProducts, setCurrProducts] = useState();
    const [currCategory, setCurrCategory] = useState("all");
    const [currCartBtn, setCurrCartBtn] = useState();


    useEffect(() => {
        if (!user) {
            navigate('login');
        } else {
            setCurrProducts(products);
            get_categories();
        }
    }, [user]);

    const get_categories = () => {
        axios.get('http://localhost:8000/api/get_categories')
        .then(response => {
            setcategories(response.data)
        })
        .catch(error => {
            console.error('Error fetching categories:', error);
        });
    }

    const filterProducts = (categoryName) => {
        if (categoryName === "all") {
            setCurrCategory("all");
            setCurrProducts(products);
        } else {
            setCurrCategory(categoryName);
            const filtered = products.filter(product => product.category === categoryName);
            setCurrProducts(filtered);
        }
    };

    const HandleCartBtn= (productId) => {
        AddToCart(productId);
        setCurrCartBtn(productId);
        setTimeout(() => {
            setCurrCartBtn("");
        }, 900)
    }

    return (
        <>
        <div className="flex min-h-dvh">
            <div className="hidden md:block w-1/5 p-4 md:pl-10 md:pt-7">
                <ul className="space-y-2 font-medium">
                    <li  className="w-full">
                        <button 
                        onClick={() => filterProducts("all")}
                        className={`w-full p-2 ${currCategory != "all" ? "text-gray-950" : "bg-slate-900 text-gray-100" } rounded-md hover:bg-slate-900 hover:text-gray-100 group`}>
                            All
                        </button>
                    </li>
                    {categories && categories.map((c, i) => (
                    <li key={i} className="w-full">
                        <button onClick={() => filterProducts(c)}
                        className={`w-full p-2 ${currCategory === c && "bg-slate-900 text-gray-100" } rounded-md hover:bg-slate-900 hover:text-gray-100 group`}>
                            {c}
                        </button>
                    </li>
                    ))}
                    
                </ul>
            </div>
            <div className="border-l w-full p-4 pt-7">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 lg:gap-6">
                {currProducts && currProducts.map((product) => (
                    <div key={product.id} className="border p-4 rounded-lg">
                        <img src={product.image_url} alt={product.name} className="w-full object-cover mb-4"/>
                        <h2 className="text-lg font-bold">{product.name}</h2>
                        <div className="text-lg font-bold flex space-x-2">
                            <p className="text-slate-900">€{product.price}</p>
                            <span className="line-through text-gray-500">€{product.old_price}</span> 
                            <span className="text-red-500">{product.discount}% OFF</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">
                         {product.description}
                        </p>
                        <button disabled = {currCartBtn == product.id}
                            type="button" onClick={() =>    HandleCartBtn(product.id)}
                            className="flex items-center mt-2 w-full text-white focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 bg-gray-900 hover:bg-gray-800 hover:text-gray-300 border-gray-700 disabled:bg-gray-800 disabled:text-gray-300">
                            <div className="mx-auto flex items-center space-x-2">
                                <svg className="size-5" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 32 32" viewBox="0 0 32 32" id="shopping-bag">
                                    <g>
                                        <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M25.8716,28.9377H8.0341c-1.0475,0-1.9292-0.7839-2.0519-1.8242L4.3781,13.7176
                                        c-0.1448-1.2284,0.8149-2.308,2.0519-2.308h21.0458c1.237,0,2.1967,1.0796,2.0519,2.308l-1.6042,13.3959
                                        C27.8008,28.1538,26.9191,28.9377,25.8716,28.9377z"></path>
                                        <path fill="none" stroke="#ffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M11.3279,15.4096v-6.515c0-3.1066,2.5184-5.625,5.625-5.625h0c3.1066,0,5.625,2.5184,5.625,5.625v6.515"></path>
                                    </g>
                                </svg>
                                
                                {currCartBtn === product.id ?
                                <snap className="pl-2 text-md font-medium text-green-500">
                                    Added to cart
                                </snap> : 
                                <span>Add to cart</span>
                                }
                            </div>
                        </button>
                        
                    </div>
                ))}
                </div>
                
            </div>
        </div>
        <div className="pb-4 md:pb-6 flex justify-center">
            <Pagination />
        </div>
        </>
    )
}

export default Home;