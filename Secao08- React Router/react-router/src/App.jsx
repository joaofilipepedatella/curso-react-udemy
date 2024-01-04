import './App.css'

//1 - Config react router

import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components

import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'

// pages

import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import Search from './pages/Search'



function App() {

  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - links com react router */}
        <Navbar />
        {/* 9 - Search */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* 4 - Roda Dinamica */}
          <Route path='/products/:id' element={<Product />} />
          {/* 6 - Nested Routes */}
          <Route path='/products/:id/info' element={<Info />} />
          {/* 9 - Search */}
          <Route path="/search" element={<Search />} />
          {/* 7 - No match route */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
