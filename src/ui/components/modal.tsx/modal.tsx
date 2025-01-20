"use client";
import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <button onClick={closeModal}>
        <XCircleIcon />
      </button>
    </div>
  );
}

export default Modal;
