import axios from 'axios'
import React from 'react'
import { url } from '../helpers/url'
import { config } from '../helpers/token'
import { toast } from 'react-toastify'

const Table = ({ users }) => {

    function editRole(role, userID) {
        // console.log(`${url}/user/update/role/${userID}?role=${role}`, config);
        axios.put(`${url}/user/update/role/${userID}?role=${role}`, config)
            .then(res => {
                console.log(res);
                toast.success('Updated users role')
            })
            .catch(error => {
                console.error(error);
                toast.error('Failed to update user role')
            })
    }
    function deleteUser(userID) {
        axios.delete(`${url}/user/delete/${userID}`, config)
        .then(res => {
            console.log(res)
            toast.success('User deleted successfully')
        }
        )
        .catch(err => console.error(err))
    }
    return (
        <div>
            <div className="mt-5 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Description</th>
                            <th scope="col" className="px-6 py-3">Price</th>
                            <th scope="col" className="px-6 py-3">role</th>
                            <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length === 0 ? (
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <td colSpan="4" className="px-6 py-4 text-gray-500 text-sm dark:text-gray-400">
                                    No products found. Add some products to get started.
                                </td>
                            </tr>
                        ) : ''}
                        {users.map((item) => (
                            <tr
                                key={item.id} // Assuming each item has a unique id
                                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {item.fullName}
                                </th>
                                <td className="px-6 py-4">{item.userName}</td>
                                <td className="px-6 py-4">{item.role}</td>
                                <td className="px-6 py-4">
                                    <select onChange={(e) => editRole(e.target.value, item.id)} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected disabled>Choose role</option>
                                        <option value="ROLE_ADMIN">admin</option>
                                        <option value="ROLE_SELLER">sotuvchi</option>
                                        <option value="ROLE_BUYER">foydaluvchi</option>
                                    </select>
                                </td>
                                <td className="px-6 py-4">
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                    >
                                        Edit
                                    </button>
                                    <button onClick={() => {
                                        deleteUser(item.id);
                                    }} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                        Delete
                                    </button>

                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table