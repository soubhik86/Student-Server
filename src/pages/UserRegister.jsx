import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './UserRegister.css'; 
import { userRegisterMutation } from '../hooks/react-query/UserMutation';



export const UserRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [img, setImg] = useState();
const {mutate} = userRegisterMutation();


  const HandleImage = (e) => {
    setImg(e.target.files[0]);
  };

  const onSubmit = (data) => {
    const formdata = new FormData();
    formdata.append('name', data.name);
    formdata.append('email', data.email);
    formdata.append('mobile', data.mobile);
    formdata.append('password', data.password);
    formdata.append('first_school', data.first_school);
    if (img) {
      formdata.append('image', img);
    }

    console.log([...formdata]);
    mutate(formdata)
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input type="text" {...register('name', { required: true })} />
        {errors.first_name && <span className="error-message">This field is required</span>}
        <br />

        <label>Email</label>
        <input type="email" {...register('email', { required: true })} />
        {errors.email && <span className="error-message">This field is required</span>}
        <br />
        <label>Mobile</label>
        <input type="text" {...register('mobile', { required: true })} />
        {errors.email && <span className="error-message">This field is required</span>}
        <br />

        <label>Password</label>
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <span className="error-message">This field is required</span>}
        <br />
        <label>first School</label>
        <input type="text" {...register('first_school', { required: true })} />
        {errors.password && <span className="error-message">This field is required</span>}
        <br />

        <label>Image</label>
        <input type="file" name="image" onChange={HandleImage} />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};