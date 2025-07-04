import React from 'react'
import { Navigate } from 'react-router-dom'

const Protectedroute = ({children}) => {
  
  let user = localStorage.getItem("username")

  return user ? children:<Navigate to={'/profile'}/>
 
}

export default Protectedroute