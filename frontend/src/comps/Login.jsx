import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../UserContext';

const Login = () => {
    const navigate = useNavigate();
    const { user, LogIn } = useContext(UserContext);

    useEffect(() => {
            if(user){
                navigate('/');
            }
        }, [user])
        
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email.length < 1) {
            console.log('Username is requried!');
            return;
        }
        if (password.length < 1) {
           console.log('Password is requried!');
           return;
        }

        const userInfo = {
            email: email,
            password: password
        };

        LogIn(userInfo);
    };    

    return (
        <section className="bg-white dark:bg-gray-900 h-dvh">
            <div className="container flex items-center justify-center md:pt-20 pt-10 px-6 mx-auto">
                <form onSubmit={handleSubmit} className="w-full max-w-md">

                    <h1 className="text-center mt-3 text-2xl font-semibold text-gray-800 sm:text-3xl dark:text-white">Login</h1>

                    <div className="relative flex items-center mt-8">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                        </span>

                        <input type="text" placeholder="Username" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>

                    <div className="relative flex items-center mt-4">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </span>

                        <input type="password" placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>

                    <div className="mt-6">
                        <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Sign in
                        </button>

                        <div className="mt-6 text-center ">
                            <a href="/singup" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                Don't have an account yet? Sign up
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login;