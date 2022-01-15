import React, { useContext } from "react";
import { dataContext } from "../../context/DataProvider";
import { Body } from "./style";

export default function BottomButtons() {
  const { pagination, changePage } = useContext(dataContext);

  return (
    <Body className="bottom" pagination={pagination}>
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
    </Body>
  );
}
