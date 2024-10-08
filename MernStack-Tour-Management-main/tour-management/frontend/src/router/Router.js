import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import SearchResultList from '../Pages/SearchResultList'
import ToursDetails from '../Pages/ToursDetails'
import Tours from '../Pages/Tours'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/tours/:id' element={<ToursDetails/>}/>
        <Route path='tours/search' element={<SearchResultList/>}/>
    </Routes>
    
  )
}

export default Router