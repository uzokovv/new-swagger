import axios from 'axios';
import React, { useRef, useState } from 'react';
import { url } from '../helpers/url';
import { config } from '../helpers/token';
import { toast } from 'react-toastify';

const Modals = ({ addModal, openModal }) => {
    const name = useRef()
    const disc = useRef()
    const [catyID, setcatygory] = useState(2)
    const price = useRef()
    
    function pushProduct() {

        if (name.current.value !== '' &&
            price.current.value !== '' &&
            disc.current.value !== '' &&
            catyID !== 'Choose category') {
            let newProduct = {
                "name": name.current.value,
                "description": disc.current.value,
                "categoryId": parseInt(catyID),
                "price": price.current.value,
                "file": [
                    0
                ]
            }
            openModal()

            axios.post(url + '/product/save', newProduct, config)
                .then(response => {
                    console.log(response);
                    toast.success(response.config.message)
                })
                .catch(error => {
                    console.error(error)
                    toast.error('Error adding product')
                })
        }else{
            toast.error('Please fill all fields')
        }
    }
    return (
        <div>
            {addModal &&
                <div id="authentication-modal" tabindex="-1" aria-hidden="true" className="flex mx-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Sign in to our platform
                                </h3>
                                <button onClick={openModal} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5">
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">name</label>
                                    <input ref={name} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="yuor name" required />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">description</label>
                                    <input ref={disc} type="text" name="password" id="password" placeholder="last name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                </div>
                                <div>
                                    <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                                    <select onChange={(e) => setcatygory(e.target.value)} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected disabled>Choose catyory</option>
                                        <option value="1">sabzavotlar</option>
                                        <option value="2">poliz mevalar</option>
                                        <option value="3">mevalar</option>
                                        <option value="4">nimadur</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">price</label>
                                    <input ref={price} type="number" name="password" id="password" placeholder="last name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                </div>
                                <button onClick={pushProduct} type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Modals;
