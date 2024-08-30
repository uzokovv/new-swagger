import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { url } from '../../helpers/url'
import AdminScreen from '.'
import Catg from '../../components/catugry'

const Products = () => {
    const [product, setProduct] = useState([])
    // axios products
    const getProduct = useCallback(() => {
        axios.get(`${url}/product/list`)
            .then((res) => {
                // Check if the response is successful and the body is present
                if (res.data && res.data.body) {
                    setProduct(res.data.body)
                } else {
                    setProduct([]) // Set an empty array if the data is not as expected
                }
            })
            .catch((err) => {
                console.error(err);
                setProduct([]); // Set an empty array in case of error
            });
    }, [setProduct])

    // useEffect
    useEffect(() => {
        getProduct()
    }, [getProduct])

    return (
        <div className="mt-5 relative overflow-x-auto shadow-md sm:rounded-lg">
            <Catg />
            <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Name</th>
                        <th scope="col" className="px-6 py-3">Description</th>
                        <th scope="col" className="px-6 py-3">Price</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {product.length === 0 ? (
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td colSpan="4" className="px-6 py-4 text-gray-500 text-sm dark:text-gray-400">
                                No products found. Add some products to get started.
                            </td>
                        </tr>
                    ) : (
                        product.map((item) => (
                            <tr
                                key={item.id} // Assuming each item has a unique id
                                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {item.name}
                                </th>
                                <td className="px-6 py-4">{item.description}</td>
                                <td className="px-6 py-4">{item.price}</td>
                                <td className="px-6 py-4">
                                    
                                    <button
                                        type="button"
                                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Products
