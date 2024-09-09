import React from 'react'
import Headers from '../../components/headrs'
import Products from './product';
import FormData from './formAdd'

const AdminScreen = () => {
  // console.log(title);

  return (
    <div>
      <Headers users={"users"} />
      <h1 className='text-3xl '>users</h1>
      <Products />
      <FormData />
    </div>
  )
}

export default AdminScreen