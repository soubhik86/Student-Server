import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./ProductList.css"; // Import custom CSS
import { useNavigate } from "react-router-dom";
import { useDeleteMutation, useFetchProductQuery } from "../hooks/react-query/ProductMutation";


export const ProductList = () => {
  const navigate = useNavigate();
 const {mutate} = useDeleteMutation();

 const handleDelete = (id) => {
  console.log(id);
  mutate( {id} );
};


  const { isPending, isError, data } = useFetchProductQuery()

  if (isPending) return <div className="text-center mt-5">Loading...</div>;
  if (isError)
    return <div className="text-center mt-5">Error: {isError.message}</div>;

  return (
    <div className="product-list-container">
      <div className="header">
        <h1>Product List</h1>
        <Button
          onClick={() => navigate("/create")}
          variant="success"
          className="create-button"
        >
          Create Product
        </Button>
      </div>
      <Table striped bordered hover responsive className="mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {data?.data.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.brand}</td>
              <td>${product.price}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
              </td>
              <td>{product.price}</td>
              <td>
                <Button
                 
                  variant="primary"
                  size="sm"
                  className="me-2"
                  onClick={() =>  handleDelete(product._id)}
                >
                  Edit
                </Button>
                <Button
                  onClick={() =>  handleDelete(product._id)}
                  variant="danger"
                  size="sm"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
