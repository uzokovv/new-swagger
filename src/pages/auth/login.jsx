import axios from 'axios'
import React, { useRef } from 'react'
import { url } from '../../helpers/url'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    const name = useRef('')
    const password = useRef('')

    const navigate = useNavigate();


    function login() {
        let userData = {
            "login": name.current.value,
            "password": password.current.value
        }

        if (userData.login !== '' || userData.password !== '') {
            axios.post(`${url}/auth/login`, userData)
                .then((res) => {
                    console.log(res);
                    localStorage.setItem('token', res.data.token)
                    if (res.data.role === "ROLE_ADMIN") {
                        console.log(res.data.role);
                        navigate('/admin')
                        toast.success('You have successfully logged in (admin)')

                    } else if (res.data.role === "ROLE_SELLER") {
                        navigate('/seller')
                        toast.success('You have successfully logged in (seller)')
                    } else if (res.data.role === "ROLE_BUYER") {
                        navigate('/buyer')
                        toast.success('You have successfully logged in (customer)')
                    }
                }).catch(error => {
                    toast.error(error.response.data.message, 'Error logging in');
                })
        } else {
            toast.error('Please fill in all fields');
            if (name.current.value === '') name.current.style.borderColor = 'red';
            if (password.current.value === '') password.current.style.borderColor = 'red';
        }
    }


    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input ref={name} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input ref={password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>

                            <button onClick={login} type="submit" className="w-full bg-blue-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            <Link to={"/register"} >
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">register</a>
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Login
