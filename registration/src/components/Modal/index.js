import React, { useRef } from "react";
import styles from "./styles.module.css";
import { FaTimes } from "react-icons/fa";

const Modal = ({ title, description, inputPlaceholder, buttons, onClose }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current && modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} ref={modalRef} onClick={closeModal}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <input
          type="text"
          placeholder={inputPlaceholder}
          className={styles.input}
        />
        <div className={styles.buttonContainer}>
          {buttons.map((button, index) => (
            <button
              key={index}
              style={{
                color: button.color,
                backgroundColor: button.backgroundColor,
              }}
              className={styles.button}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
