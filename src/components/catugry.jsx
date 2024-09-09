import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { url } from '../helpers/url'
import { config } from '../helpers/token'


const Catg = () => {
    const [catg, setCatg] = useState([])
    
    useEffect(() => {
        axios.get(url + '/category/list')
            .then(response => {
                console.log(response);
                setCatg(response.data.body)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>Categories</h1>
            {catg.map((c) => (
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    {c.name}
                </button>
            ))
            }
        </div>
    )
}

export default Catg