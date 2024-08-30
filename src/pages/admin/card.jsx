import React, { useEffect, useState } from 'react'
import { url } from '../../helpers/url'
import axios from 'axios'

const Card = () => {
    const [product, setPoduct] = useState([])
    useEffect(() => {
        axios.get(`${url}/product/list`)
            .then(response => {
                console.log(response);
                if (response.data && response.data.body) {
                    setPoduct(response.data.body)
                }
            })
            .catch(err => console.error(err))
    }, [])
    console.log(product);

    return (
        <div className='flex gap-3 '>
            {product && product.length > 0 && product.map((item) => (
                <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <span href="#">
                        <img class="mx-auto p-8 rounded-t-lg" src={item.file.length > 0 ? item.file : "data:image/jpeg;base64,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"} alt="product image" />
                    </span>
                    <div class="px-5 pb-5">
                        <a href="#">
                            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                        </a>
                        <a href="#">
                            <h5 class=" font-semibold tracking-tight text-gray-900 dark:text-white">{item.description}</h5>
                        </a>
                        <div class="flex items-center mt-2.5 mb-5">
                            <div class="flex items-center space-x-1 rtl:space-x-reverse">
                                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-3xl font-bold text-gray-900 dark:text-white">{item.price}</span>
                            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card
