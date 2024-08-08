import { createProducts, deleteProduct, fetchProducts } from "../../api/ApiHandler";
import { Globalhooks } from "../Globalhooks";
import { useMutation, useQuery} from "@tanstack/react-query";
import { PRODUCTS } from "./Querykeys";

export const useCreateProductMutation = () => {
  const { queryClient, navigate } = Globalhooks();

  return useMutation({
    mutationFn: createProducts,
    onSuccess: (response) => {
      const { message, status } = response || {};
      if (status === true) {
        navigate("/list");
        queryClient.invalidateQueries({
          queryKey: [PRODUCTS],
        });
      }
    },
  });
};


export const useFetchProductQuery = () => {
  return useQuery({
    queryKey: [PRODUCTS],
    queryFn: fetchProducts,
  });
};


export const useDeleteMutation = () => {
  const { queryClient, navigate } = Globalhooks();

  return useMutation({
    mutationFn:({id}) => deleteProduct(id),
    onSuccess: (response) => {
      const { message, status } = response || {};
      if (status === true) {
        navigate("/list");
        queryClient.invalidateQueries({
          queryKey: [PRODUCTS],
        });
      }
    },
  });
};