import { useState, useEffect } from "react";
import { getData } from "@/lib/firebase/firebase.service";

export const useGetCategory = () => {
  const [category, setCategory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getCategory = async () => {
    try {
      const response = await getData("category");
      setCategory(response);
      console.log(response);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return { category, loading, error };
};
