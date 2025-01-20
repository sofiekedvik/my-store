"use client";
import { useState } from "react";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></div>
  );
}

export default Modal;
