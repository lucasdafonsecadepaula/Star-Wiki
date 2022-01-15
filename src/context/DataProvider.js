import React, { useState, useEffect, createContext } from "react";
import swApi from "../services/swApiConection";

export const dataContext = createContext({});

export function DataProvider({ children }) {
  const [data, setData] = useState({ length: 0 });
  const [pagination, setPagination] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    swApi
      .get(`people/?page=1`)
      .then((res) => {
        setData({ 1: res.data, length: 1 });
        setLoading(false);
      })
      .catch(() => setData([]));
  }, []);

  const changePage = (e) => {
    const sum = pagination + e;
    if (e === -1) {
      setPagination(sum);
      return;
    }
    if (e === 1 && sum <= data.length) {
      setPagination(sum);
      return;
    }
    setLoading(true);
    setPagination(sum);
    swApi
      .get(`people/?page=${sum}`)
      .then((res) => {
        setData({ ...data, [sum]: res.data, length: sum });
        setLoading(false);
      })
      .catch(() => setData([]));
  };

  return (
    <dataContext.Provider
      value={{ data, pagination, changePage, loading, setLoading }}
    >
      {children}
    </dataContext.Provider>
  );
}
