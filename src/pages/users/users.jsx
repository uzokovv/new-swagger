import React, { useCallback, useEffect, useState } from 'react'
import Table from '../../components/table'
import Headers from '../../components/headrs'
import axios from 'axios'
import { url } from '../../helpers/url'
import { toast } from 'react-toastify'
import { config } from '../../helpers/token'
import Catg from '../../components/catugry'


const Users = () => {
  const [users, setUsers] = useState([])
  const getUsers = useCallback(() => {
    axios.get(url + '/user/list', config)
      .then(res => {
        console.log(res)
        if (res.data && res.data.body) {
          setUsers(res.data.body)
          toast.success('User List was successfully')
        } else {
          setUsers([])
          toast.error('Failed to fetch user list')
        }  // Set an empty array if the data is not as expected
      })
      .catch(err => {
        console.error(err)
        setUsers([])
        toast.error('Failed to fetch user list')  // Set an empty array in case of error
      })
  }, [])
  useEffect(() => {

  }, [users])
  useEffect(() => {
    getUsers()
  }, [])
  return (
    <div>
      <Headers />
      <h1 className="text-3xl font-bold">Sotuvchi</h1>
      <Table users={users} />
    </div>
  )
}

export default Users