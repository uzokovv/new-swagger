import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { url } from '../../helpers/url'
import { configImg } from '../../helpers/token'
import { toast } from 'react-toastify'

const FormAdd = () => {
    const [img, setimg] = useState(null)

    function push() {
        if (!img) {
            toast.error("Please select an image first");
            return;
        }

        console.log(img);
        const formData = new FormData();
        formData.append('image', img);

        axios.post(url + '/api/videos/upload', formData, configImg)
            .then((response) => {
                console.log(response);
                toast.success("Image uploaded successfully");
            })
            .catch((err) => {
                console.error(err);
                toast.error(err.message);
            })

    }
    return (
        <div>
            <h1>formAdd</h1>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
            <input onChange={(e) => {
                setimg(e.target.files[0])
            }} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
            <button onClick={push} type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                Purple
            </button>
        </div>
    )
}

export default FormAdd