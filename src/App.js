import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './components/Header'
import About from './pages/About'
import AddEditBlog from './pages/AddEditBlog'
import Blog from './pages/Blog'
import Home from './pages/Home'
import Lost from './pages/Lost'
import './app.css';
const App = () => {
  return (
    <div className='app'>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs/:id' element={<Blog />} />
        <Route path='/addblog/' element={<AddEditBlog />} />
        <Route path='/editblog/:id' element={<AddEditBlog />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Lost />} />
      </Routes>
    </div>
  )
}

export default App
