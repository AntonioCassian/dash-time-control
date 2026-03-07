'use client';

import { useState, useEffect, useRef } from "react";

type ModalType =
  | "funcionario"
  | null;

export const useModal = () => {
  const [modalType, setModalType] = useState<ModalType>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

   const openModal = (type: Exclude<ModalType, null>) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent ) => {
      if (
        modalRef.current &&
        !modalRef.current?.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    if (modalType) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalType]);

  return {
    modalType,
    openModal,
    closeModal,
    modalRef,
  };
};