import React, { useState, useEffect, createContext } from "react";
import swApi from "../services/swApiConection";

export const dataContext = createContext({});

export function DataProvider({ children }) {
  const [data, setData] = useState({ length: 0 });
  const [pagination, setPagination] = useState(1);

  useEffect(() => {
    swApi
      .get(`people/?page=1`)
      .then((res) => {
        setData({ 1: res.data, length: 1 });
      })
      .catch(() => setData([]));
  }, []);

  const changePage = (e) => {
    const sum = pagination + e;
    if (e === -1) {
      setPagination(sum);
      return;
    }
    if(e === 1 && sum <= data.length){
      console.log("entro")
      setPagination(sum);
      return;
    }

    setPagination(sum);
    swApi
      .get(`people/?page=${sum}`)
      .then((res) => {
        setData({ ...data, [sum]: res.data, length: sum });
      })
      .catch(() => setData([]));
  };

  return (
    <dataContext.Provider value={{ data, pagination, changePage }}>
      {children}
    </dataContext.Provider>
  );
}
