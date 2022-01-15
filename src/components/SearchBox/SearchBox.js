import React from "react";
import useSearch from "../../hooks/useSearch";
import { Body } from "./styles";

export default function SearchBox() {
  const { handlerSearch } = useSearch("test");

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
