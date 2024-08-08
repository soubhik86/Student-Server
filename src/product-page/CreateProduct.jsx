import React, { useState } from "react";
import "./CreateProduct.css"; // Import the CSS file
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCreateProductMutation } from "../hooks/react-query/ProductMutation";


export const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [img, setImg] = useState(null);
  const {mutate}= useCreateProductMutation();



  const onSubmit = (data) => {
    // console.log(data);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("brand", data.brand);
    if (img) {
      formData.append("image", img);
    }
   mutate(formData);
  };

  return (
    <>
      <>
        <div className="container mt-5">
          <Link className="btn btn-success" to="/list">
            View Products List
          </Link>
          <h2 className="text-center text-info">Create Product</h2>
          <form
            className="shadow p-4 bg-white rounded"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                {...register("name", { required: true })}
              />
              {errors.title && <span>This field is required</span>}
            </div>


            <div className="mb-3">
              <label htmlFor="price" className="form-label">
              Price
              </label>
              <input
                type="number"
                name="price"
                className="form-control"
                id="price"
                {...register("price", { required: true })}
              />
              {errors.price && <span>This field is required</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                name="description"
                className="form-control"
                id="description"
                rows="3"
                {...register("description", { required: true })}
              />
              {errors.description && <span>This field is required</span>}
            </div>

            <div className="mb-3">
              <label htmlFor="brand" className="form-label">
              Brand
              </label>
              <input
                type="text"
                name="brand"
                className="form-control"
                id="brand"
                {...register("brand", { required: true })}
              />
              {errors.price && <span>This field is required</span>}
            </div>

            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input
                type="file"
                onChange={(e) => setImg(e.target.files[0])}
                accept="image/*"
                className="form-control"
              />
              {img && (
                <img
                  style={{ height: "180px", marginTop: "10px" }}
                  src={URL.createObjectURL(img)}
                  alt="Preview"
                  className="upload-img"
                />
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        {/* <ToastContainer /> */}
      </>
    </>
  );
};
