import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Login from '../component/Login'

const PrivateRoute = ()=>{
    const token = localStorage.getItem('user_token')

    return token ? <Outlet /> : <Navigate to='/login'/>
}

export default PrivateRoute