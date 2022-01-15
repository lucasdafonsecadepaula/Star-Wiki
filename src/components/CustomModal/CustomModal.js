import React, { useContext } from "react";
import Modal from "react-modal";
import { contextModal } from "../../context/ModalProvider";
import { Body } from "./styles";

Modal.setAppElement("#root");

export default function CustomModal() {
  const { modalIsOpen, setModalIsOpen, modalData } = useContext(contextModal);

  return (
    <Modal
      className="modal-content"
      overlayClassName="modal-overlay"
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
    >
      <Body>
        <button
          aria-label="Close"
          type="button"
          className="close-button"
          onClick={() => setModalIsOpen(false)}
        >
          ✖️
        </button>

        {modalData && (
          <>
            <h4 className="item">Name: {modalData.name}</h4>
            <h4 className="item">Gender: {modalData.gender}</h4>
            <h4 className="item">Birth year: {modalData.birth_year}</h4>
            <h4 className="item">Eye Color: {modalData.eye_color}</h4>
            <h4 className="item">Hair Color: {modalData.hair_color}</h4>
            <h4 className="item">Height: {modalData.height}</h4>
            <h4 className="item">Mass: {modalData.mass}</h4>
            <h4 className="item">Skin Color: {modalData.skin_color}</h4>
          </>
        )}
      </Body>
    </Modal>
  );
}
