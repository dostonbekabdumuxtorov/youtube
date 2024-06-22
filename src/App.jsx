import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home'
import Detail from './components/Detail/Detail'
import Result from './components/Result/Result'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/watch/:id' element={<Detail />} />
        <Route path='/result/:searchtitle' element={<Result />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App