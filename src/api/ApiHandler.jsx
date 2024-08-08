import { AxiosInstance } from "./AxiosInstance"
import { endpoint } from "./Endpoint";


export const register = async (input)=>{
  try {

    const {data} = await AxiosInstance.post(`${endpoint.users.register}` , input);
    return data;
    
  } catch (error) {
    throw error
  }
}


export const login = async (input)=>{
  try {

    const {data} = await AxiosInstance.post(`${endpoint.users.login}` , input);
    return data;
    
  } catch (error) {
    throw error
  }
}


export const createProducts = async (input) => {
  try {
    const { data } = await AxiosInstance.post(
      `${endpoint.products.create}`,
      input
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchProducts = async (input) => {
  try {
    const { data } = await AxiosInstance.get(
      `${endpoint.products.list}`,
      input
    );
    return data;
  } catch (error) {
    throw error;
  }
};

// export const deleteProduct = async (id) => {
 
//   try {
//     const { data } = await AxiosInstance.delete(`${endpoint.products.delete}`, {
//       id,
//     });
//     return data;
//   } catch (error) {
//     console.error("Error occurred while deleting product:", error);
//     throw error;
//   }
// };



export const deleteProduct = async (id) => {
  try {
    const { data } = await AxiosInstance.delete(`${endpoint.products.delete}/${id}`);
    return data; // Assuming your server returns a status or message upon success
  } catch (error) {
    console.error('Error occurred while deleting product:', error);
    throw error;
  }
}

// export const fetchProductsById = async (id) => {
//   try {
//     const { data } = await AxiosInstance.get(
//       `${endpoint.products.edit}/${id}`
//     );
//     return data?.data;
//   } catch (error) {
//     throw error;
//   }
// };

