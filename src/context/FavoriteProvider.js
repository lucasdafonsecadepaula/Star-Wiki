import React, { useState, useEffect, createContext } from "react";

export const favoriteContext = createContext({});

export function FavoriteProvider({ children }) {
  const [favoritePerson, setFavoritePerson] = useState({});

  useEffect(() => {
    if (localStorage.getItem("favoritePerson")) {
      setFavoritePerson(JSON.parse(localStorage.getItem("favoritePerson")));
    }
  }, []);

  const addOrRemoveFavorite = (person) => {
    if (favoritePerson[person.name]) {
      delete favoritePerson[person.name];
      localStorage.setItem("favoritePerson", JSON.stringify(favoritePerson));
      setFavoritePerson({ ...favoritePerson });
      return;
    }
    localStorage.setItem(
      "favoritePerson",
      JSON.stringify({ ...favoritePerson, [person.name]: person })
    );
    setFavoritePerson({ ...favoritePerson, [person.name]: person });
  };

  return (
    <favoriteContext.Provider value={{ favoritePerson, addOrRemoveFavorite }}>
      {children}
    </favoriteContext.Provider>
  );
}
