import React, { useState, createContext } from "react";

export const contextModal = createContext({});

export function ModalProvider({ children }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState();

  const handlerOpenModalWithData = (personData) => {
    setModalData(personData)
    setModalIsOpen(true)
  }

  return (
    <contextModal.Provider value={{ modalIsOpen, setModalIsOpen, modalData, handlerOpenModalWithData }}>
      {children}
    </contextModal.Provider>
  );
}
