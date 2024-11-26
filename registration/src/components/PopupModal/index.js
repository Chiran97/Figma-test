import React, { useState } from "react";
import Modal from "../Modal";
import styles from "./styles.module.css";

const PopupModal = () => {
  const [showModal, setShowModal] = useState(false);

  const modalData = {
    title: "Student Registration Request Rejection",
    description: "Remarks",
    inputPlaceholder: "Enter your remarks...",
    buttons: [
      { label: "Yes", color: "#FFFFFF", backgroundColor: "#00AC4F" },
      { label: "No", color: "#FFFFFF", backgroundColor: "#DC2626" },
    ],
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className={styles.container}>
      <h1>Popup Modal Example</h1>
      <button onClick={() => setShowModal(true)} className={styles.openButton}>
        Open Modal
      </button>
      {showModal && (
        <Modal
          title={modalData.title}
          description={modalData.description}
          inputPlaceholder={modalData.inputPlaceholder}
          buttons={modalData.buttons}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default PopupModal;
