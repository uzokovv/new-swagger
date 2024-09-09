import React, { useContext, useState } from 'react'
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
import { ThemeContex } from '../src/contextHook/contex'
const App = () => {
  const [addModal, removeModal] = useState(false)
  const openModal = () => removeModal(!addModal)
  function addProduct() {

  }
  const [text, setss] = useContext(ThemeContex)
  return (
    <div>
      <ThemeContex.Pr >
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
      </ThemeContex>
      <ToastContainer />
    </div>
  )
}

export default App