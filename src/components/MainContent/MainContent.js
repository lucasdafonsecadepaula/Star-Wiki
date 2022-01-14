import React, { useContext } from "react";
import { dataContext } from "../../context/DataProvider";
import { Body, Footer } from "./style";

export default function MainContent() {
  const { data, pagination, changePage} = useContext(dataContext);
  const { length } = data;
  
  return (
    <Body>
      <div className="title">
        <h2>Personagens</h2>
      </div>

      {length >= pagination ? (
        <>
          {data[pagination].results.map((person, id) => (
            <div className="item" key={id}>
              <h4>{person.name}</h4>
            </div>
          ))}

          <Footer className="bottom" pagination={pagination}>
            <div className="bottom-btn">
              <button className="bottom-btn-left" onClick={() => changePage(-1)}>
                {"<"}
              </button>
            </div>
            <p className="bottom-text">{pagination}/9</p>
            <div className="bottom-btn">
              <button className="bottom-btn-right" onClick={() => changePage(1)}>
                {">"}
              </button>
            </div>
          </Footer>
        </>
      ) : (
        <>
          <div className="loading">
            <img
              className="img"
              src={"./lightsaber.png"}
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
