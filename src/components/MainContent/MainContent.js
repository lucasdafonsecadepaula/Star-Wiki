import React, { useContext } from "react";
import { dataContext } from "../../context/DataProvider";
import { favoriteContext } from "../../context/FavoriteProvider";
import { contextModal } from "../../context/ModalProvider";
import { searchContext } from "../../context/SearchProvider";
import BottomButtons from "../BottomButtons/BottomButtons";
import Heart from "../Heart/Heart";
import SearchBox from "../SearchBox/SearchBox";
import { Body } from "./style";

export default function MainContent() {
  const { data, pagination, loading } = useContext(dataContext);
  const { searchText, personSearchedArray } = useContext(searchContext);
  const { handlerOpenModalWithData } = useContext(contextModal);
  const {addOrRemoveFavorite} = useContext(favoriteContext)
  const { length } = data;

  return (
    <Body>
      <div className="title">
        <h2>Personagens</h2>
      </div>

      {length >= pagination && (
        <>
          <SearchBox />

          {searchText.length === 0 && (
            <>
              {data[pagination].results.map((person, id) => (
                <div key={id} className="item">
                  <div className="column-item" onClick={() => handlerOpenModalWithData(person)}>
                    <h4>{person.name}</h4>
                  </div>
                  <div className="heart-icon"  onClick={() =>  addOrRemoveFavorite(person)}>
                    <Heart person={person.name} />
                  </div>
                </div>
              ))}

              <BottomButtons />
            </>
          )}

          {searchText.length !== 0 && (
            <>
              {!loading && (
                <div className="search-results">
                  <h3 className="search-results-title">
                    Resultados para {`"${searchText}"`}:
                  </h3>
                  {personSearchedArray.map((person, id) => (
                    <div
                      className="item"
                      key={id}
                      onClick={() => handlerOpenModalWithData(person)}
                    >
                      <h4>{person.name}</h4>
                    </div>
                  ))}
                  {personSearchedArray.length === 0 && (
                    <div className="search-results-failed">
                      <div className="item">
                        <h4>Nenhum Resultado Encontrado</h4>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </>
      )}

      {loading && (
        <>
          <div className="loading">
            <img
              className="img"
              src={"./lightsaber-32x32.png"}
              height={25}
              width={25}
              alt=""
            />
          </div>
        </>
      )}
    </Body>
  );
}
