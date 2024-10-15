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
        <div className="flex w-full h-full">
        <div className="min-h-lvh w-screen md:w-1/2 flex items-center justify-center bg-white">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-xl">
        <h1 className="text-4xl font-medium">Welcome Back!</h1>
        <p className="text-lg font-medium text-gray-600 mt-2">Enter your Credentials to access your account</p>
        <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mt-4">
                <label className="block text-gray-700">Email address</label>
                <input onChange={(e) => setEmail(e.target.value)}
                type="email" className="mt-1 p-2 w-full border rounded" value={email} />
            </div>
            <div className="mt-4 relative">
                <label className="block text-gray-700">Password</label>
                <input onChange={(e) => setPassword(e.target.value)}
                type="password" className="mt-1 p-2 w-full border rounded" value={password} />
                <i className="fas fa-eye absolute right-3 top-10 text-gray-500"></i>
            </div>
            <div className="mt-4 flex items-center">
                <input type="checkbox" className="mr-2" />
                <label className="text-gray-700">I agree to the <a href="#" className="text-blue-500">Terms & Policy</a></label>
            </div>
            <button type="submit" className="font-medium mt-6 w-full bg-black text-white py-3 rounded-md">Login</button>
        </form>
        <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
        </div>
        <div className="flex space-x-4">
            <button className="flex items-center text-sm font-medium justify-center w-1/2 p-2 border-2 border-gray-300 rounded-md">
            <svg className="size-7 mx-1" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 48 48">
                <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
                Sign in with Google
            </button>
            <button className="flex items-center text-sm font-medium justify-center w-1/2 p-2 border-2 border-gray-300 rounded">
            <svg className="size-7 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
            </svg>
                Sign in with Apple
            </button>
        </div>
        <p className="text-center font-medium text-gray-800 mt-6">Don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a></p>
        </div>
        </div>
        <div className="w-1/2 bg-cover bg-center hidden md:block" style={{ backgroundImage: 'url("./hero.png")' }}>
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                <div className="text-center text-white">
                    <div className="flex items-center justify-center mb-4">
                        <div className="rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                            <path fill="#42A5F5" d="M40.084,32.613c-0.848,1.835-1.254,2.655-2.342,4.274c-1.521,2.264-3.67,5.089-6.326,5.109c-2.361,0.018-2.971-1.507-6.176-1.482c-3.204,0.016-3.872,1.51-6.237,1.484c-2.654-0.022-4.688-2.568-6.21-4.826c-4.259-6.34-4.707-13.768-2.076-17.721c1.861-2.803,4.807-4.449,7.572-4.449c2.817,0,4.588,1.514,6.916,1.514c2.262,0,3.638-1.517,6.896-1.517c2.464,0,5.07,1.313,6.931,3.575C32.942,21.836,33.931,30.337,40.084,32.613z"></path><path fill="#42A5F5" d="M30.046,12.072c1.269-1.577,2.232-3.804,1.882-6.072c-2.069,0.138-4.491,1.418-5.905,3.075c-1.282,1.51-2.345,3.752-1.931,5.922C26.351,15.066,28.689,13.764,30.046,12.072z"></path><path fill="#1E88E5" d="M36.736,20.421C28,30.001,20,21.001,9.228,27.842c0.375,3.027,1.53,6.303,3.565,9.331c1.521,2.258,3.556,4.804,6.21,4.826c2.365,0.025,3.033-1.469,6.237-1.484c3.205-0.024,3.814,1.5,6.176,1.482c2.656-0.021,4.805-2.846,6.326-5.109c1.088-1.619,1.494-2.439,2.342-4.274C34.878,30.688,33.389,24.314,36.736,20.421z"></path>
                        </svg>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Apple <span className="text-blue-500">Store</span></h2>
                    <p className="text-gray-300 px-4 lg:px-20">Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login;