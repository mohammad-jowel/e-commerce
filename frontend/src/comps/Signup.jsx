import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../UserContext';


const Signup = () => {
    const { user, SingUp } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if(user){
            navigate('/')
        }
    }, [user])

    const [firstName, setFirstname] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(firstName.length < 1){
            console.log('First Name is required!');
            return;
        }
        if(lastName.length < 1){
            console.log('Last Name is required!');
            return;
        }
        if(email.length < 5){
            console.log('Email is required!');
            return;
        }
        if(password.length < 8){
            console.log('Password must be greater than 8 characters!');
            return;
        }
        if(password !== confirmation){
            console.log("Confirmation password doesn't match!");
            return;
        }

        const userInfo = {
            'first_name': firstName,
            'last_name': lastName,
            'email': email,
            'password': password
        };

        SingUp(userInfo);
    };

    return(
        <div className="flex w-full h-full">
        <div className="min-h-lvh w-screen md:w-1/2 flex items-center justify-center bg-white">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-xl">
        <h1 className="text-center text-2xl font-medium">Welcome To</h1>
        <h2 className="text-center text-3xl font-bold mt-2">Furni<span className="text-blue-500">Flex</span></h2>
        <p className="text-center text-gray-600 mt-2">Signup for purchase your desire products</p>
        <form className="mt-6" onSubmit={handleSubmit}>
            <div className="flex space-x-4">
                <div className="w-1/2">
                    <label className="block text-gray-700">First name (optional)</label>
                    <input onChange={(e) => setFirstname(e.target.value)}
                    type="text" className="mt-1 p-2 w-full border rounded" value={firstName} />
                </div>
                <div className="w-1/2">
                    <label className="block text-gray-700">Last name (optional)</label>
                    <input onChange={(e) => setLastName(e.target.value)}
                    type="text" className="mt-1 p-2 w-full border rounded" value={lastName} />
                </div>
            </div>
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
            <div className="mt-4 relative">
                <label className="block text-gray-700">Confirm password</label>
                <input onChange={(e) => setConfirmation(e.target.value)}
                type="password" className="mt-1 p-2 w-full border rounded" value={confirmation} />
                <i className="fas fa-eye absolute right-3 top-10 text-gray-500"></i>
            </div>
            <div className="mt-4 flex items-center">
                <input type="checkbox" className="mr-2" />
                <label className="text-gray-700">I agree to the <a href="#" className="text-blue-500">Terms & Policy</a></label>
            </div>
            <button type="submit" className="font-medium mt-6 w-full bg-black text-white py-3 rounded-md">Signup</button>
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
        <p className="text-center font-medium text-gray-800 mt-6">Have an account? <a href="/login" className="text-blue-500">Login</a></p>
        </div>
        </div>
        <div className="w-1/2 bg-cover bg-center hidden md:block" style={{ backgroundImage: 'url("./hero.png")' }}>
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                <div className="text-center text-white">
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center">
                        <svg width="89" height="85" viewBox="0 0 89 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="89" height="85" rx="42" fill="#1E99F5"/>
                            <path d="M39.7793 39.959L41.0273 38.5527H42.8906L45.1055 27.3555C42.7031 27.3555 40.752 28.0059 39.252 29.3066C37.7637 30.5957 37.0195 32.2832 37.0195 34.3691L37.0371 34.7559L33.6094 36.4082C33.9141 32.8105 35.3086 30.1738 37.793 28.498C40.2891 26.8223 44.0508 25.9844 49.0781 25.9844H59.2207L57.6387 30.959H56.5137C56.666 30.4902 56.7422 30.0273 56.7422 29.5703C56.7422 28.0469 54.3457 27.2852 49.5527 27.2852H48.7969L46.5645 38.5527H54.2285L52.4883 40.3457C50.6133 40.0879 48.832 39.959 47.1445 39.959H46.2832L45.2637 45.1094C44.4082 49.4453 42.75 52.9082 40.2891 55.498C37.8398 58.0879 34.9863 59.3828 31.7285 59.3828C29.9707 59.3828 28.4004 58.7207 27.0176 57.3965L29.6016 54.7598C30.5273 56.6816 32.0156 57.6426 34.0664 57.6426C35.9414 57.6426 37.4121 56.793 38.4785 55.0938C39.5566 53.4062 40.5234 50.4121 41.3789 46.1113L42.6094 39.959H39.7793Z" fill="black"/>
                        </svg>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Furni<span className="text-blue-500">Flex</span></h2>
                    <p className="text-gray-300 px-4 lg:px-20">Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Signup;