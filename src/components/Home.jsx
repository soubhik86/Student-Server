import React from 'react'
import {useNavigate} from "react-router-dom"
import './Home.css';


export const Home = () => {
  const navigate = useNavigate();


const HandleClick = ()=>{
  navigate('/login')
}

  return (
    <div className="home-container">
    <button className="login-button" onClick={HandleClick}>
      Click Here To Login
    </button>
  </div>
  )
}
