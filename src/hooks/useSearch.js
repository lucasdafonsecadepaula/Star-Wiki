import { useContext } from "react";
import { dataContext } from "../context/DataProvider";
import { searchContext } from "../context/SearchProvider";
import swApi from "../services/swApiConection";

export default function useSearch() {
  const { data, pagination, setLoading } = useContext(dataContext);
  const { setSearchText, setPersonSearchedArray } = useContext(searchContext);

  async function handlerSearch(searched) {
    const searchedToLowerCase = searched.toLowerCase();
    setSearchText(searchedToLowerCase);

    if (searchedToLowerCase === "") {
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
      const dataSearched = await swApi
        .get(`people/?search=${searchedToLowerCase}`)
        .then((res) => {
          setLoading(false);
          return res.data.results;
        });
      setPersonSearchedArray(dataSearched);
    }
  }

  return { handlerSearch };
}
