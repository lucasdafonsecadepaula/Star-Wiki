import axios from "axios";
import React, { useContext } from "react";
import { dataContext } from "../../context/DataProvider";
import { searchContext } from "../../context/SearchProvider";
import { Body } from "./styles";

export default function SearchBox() {
  const { data, pagination, setLoading } = useContext(dataContext);
  const { setSearchText, setPersonSearchedArray } = useContext(searchContext);

  const handlerSearch = async (searched) => {
    const searchedToLowerCase = searched.toLowerCase();
    setSearchText(searchedToLowerCase);

    if(searchedToLowerCase === ''){
      setLoading(false);
    }

    function checkIfContains(item) {
      const text = item.name.toLowerCase();
      const result = text.includes(searchedToLowerCase);
      if (result) {
        return item;
      } else return;
    }

    const results = data[pagination].results.filter(checkIfContains);
    setPersonSearchedArray(results);

    if (results.length === 0) {
      setLoading(true);
      const dataSearched = await axios
        .get(`https://swapi.dev/api/people/?search=${searchedToLowerCase}`)
        .then((res) => {
          setLoading(false);
          return res.data.results;
        });
      setPersonSearchedArray(dataSearched);
    }
  };

  return (
    <>
      <Body>
        <input
          spellCheck="false"
          onChange={(e) => handlerSearch(e.target.value)}
          placeholder="Pesquisar"
          type="text"
          className="input"
        />
        <div className="dot"></div>
        <div className="divider"></div>
      </Body>
    </>
  );
}
