import React from "react";
import { DataProvider } from "./DataProvider";
import { ModalProvider } from "./ModalProvider";
import { SearchProvider } from "./SearchProvider";

export default function AllProviders({ children }) {
  return (
    <DataProvider>
      <ModalProvider>
        <SearchProvider>{children}</SearchProvider>
      </ModalProvider>
    </DataProvider>
  );
}
