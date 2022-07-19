import { useState, useEffect } from "react";

const useFetch = (URL) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      if (data) {
        setLoading(false);
        setData(data);
      }
    };

    fetchData();
  }, [URL]);


  const reFetch = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    if (data) {
      setLoading(false);
      setData(data);
    }
  }

  return { data, loading, reFetch };
};

export default useFetch;
