import React from 'react';
import { useGlobalContext } from './context';

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? 'modal-container isOpen' : 'modal-container'
      }`}
    >
      <div className="modal-content">
        <h2>Parabéns!</h2>
        <p>
          Você acertou {((correct / questions.length) * 100).toFixed(0)}% das
          perguntas
        </p>
        <button className="close-btn" onClick={closeModal}>
          Jogar novamente
        </button>
      </div>
    </div>
  );
};

export default Modal;
