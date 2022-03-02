import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './components/Header'
import About from './pages/About'
import AddEditBlog from './pages/AddEditBlog'
import Blog from './pages/Blog'
import Home from './pages/Home'
import Lost from './pages/Lost'
const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/publish/:id' element={<AddEditBlog />} />
        <Route path='/about/:id' element={<About />} />
        <Route path='*' element={<Lost />} />
      </Routes>
    </>
  )
}

export default App
