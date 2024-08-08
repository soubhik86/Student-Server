import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './UserLogin.css'; // Import your external CSS file
import { userLogininMutation } from '../hooks/react-query/UserMutation';


export const UserLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
const {mutate} = userLogininMutation();

  const HandleClick = () => {
    navigate('/register');
  };

  const onSubmit = (data) => {
    console.log(data);
mutate(data)
   
  };

  return (
    <div className="form-container">
  
    <form onSubmit={handleSubmit(onSubmit)} className="form">
    <h1 className="heading">Sign In</h1>
      <label className="label">Email Address</label>
      <input type="email" {...register('email', { required: true })} className="input" />
      {errors.email && <span className="error-message">This field is required</span>}
      <br />

      <label className="label">Password</label>
      <input type="password" {...register('password', { required: true })} className="input" />
      {errors.password && <span className="error-message">This field is required</span>}
      <br />

      <button type="submit" className="submit-button">Submit</button>
      <div className="register-link">
        <button type="button" onClick={HandleClick}>Not have an account? Register here</button>
      </div>
    </form>
  </div>
  );
};