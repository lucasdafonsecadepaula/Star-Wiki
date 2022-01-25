import React from "react";
import { DataProvider } from "./DataProvider";
import { FavoriteProvider } from "./FavoriteProvider";
import { ModalProvider } from "./ModalProvider";
import { SearchProvider } from "./SearchProvider";

export default function AllProviders({ children }) {
  return (
    <DataProvider>
      <ModalProvider>
        <FavoriteProvider>
          <SearchProvider>{children}</SearchProvider>
        </FavoriteProvider>
      </ModalProvider>
    </DataProvider>
  );
}
