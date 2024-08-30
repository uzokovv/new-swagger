import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/login'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Products from './pages/admin/product';
import AdminScreen from './pages/admin';
import Sellar from './pages/sellar/sellar';
import Buyer from './pages/customer/buyer';
import Modals from './components/modal';
import Users from './pages/users/users';
import Register from './pages/auth/register';

const App = () => {
  const [addModal, removeModal] = useState(false)
  const openModal = () => removeModal(!addModal)
  function addProduct() {

  }
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/products' element={<Products />} />
        <Route path='/admin' element={<AdminScreen />} />
        <Route path='/seller' element={<Sellar addProduct={addProduct} openModal={openModal} />} />
        <Route path='/buyer' element={<Buyer />} />
        <Route path='/users' element={<Users />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Modals addModal={addModal} openModal={openModal} />
      <ToastContainer />
    </div>
  )
}

export default App