import React from 'react'
import Headers from '../../components/headrs'
import Products from './product';

const AdminScreen = () => {
  // console.log(title);

  return (
    <div>
      <Headers users={"users"} />
      <h1 className='text-3xl '>users</h1>
      <Products />
      {/* <div className='even:dark:bg-gray-800'>
        <div className='container mx-auto h-max'>
          {title && <h1 className='text-2xl font-bold py-5 text-white'>{title}</h1>}
          {children}
        </div>
      </div > */}
    </div>
  )
}

export default AdminScreen