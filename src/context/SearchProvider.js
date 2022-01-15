import React, { useState, createContext } from "react";

export const searchContext = createContext({});

export function SearchProvider({ children }) {
  const [personSearchedArray, setPersonSearchedArray] = useState([]);
  const [searchText, setSearchText] = useState("");

  return (
    <searchContext.Provider
      value={{
        personSearchedArray,
        setPersonSearchedArray,
        searchText,
        setSearchText,
      }}
    >
      {children}
    </searchContext.Provider>
  );
}
