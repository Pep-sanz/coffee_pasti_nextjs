import { useState, useEffect } from "react";
import { getData, getDataById } from "@/lib/firebase/firebase.service";

export const useGetProducts = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [productsById, setProductsById] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await getData("products");
      setProducts(response);
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getProductsById = async (id: string) => {
    try {
      const response = await getDataById("products", id);
      setProductsById(response);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { products, loading, error, productsById, getProductsById };
};
