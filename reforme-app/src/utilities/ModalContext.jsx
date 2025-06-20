// ModalContext.jsx
import React, { createContext, useContext, useState } from 'react';
import Modal from '../components/Blocks/Modal/Modal';

// Создаем контекст
const ModalContext = createContext();

// Создаем провайдер контекста
export const ModalProvider = ({ children }) => {
   const [isOpen, setIsOpen] = useState(false);
   const [modalContent, setModalContent] = useState(null);
   const [modalTitle, setModalTitle] = useState('');

   const openModal = (title, content) => {
      setModalTitle(title);
      setModalContent(content);
      setIsOpen(true);
   };

   const closeModal = () => {
      setIsOpen(false);
   };

   return (
      <ModalContext.Provider value={{ openModal, closeModal }}>
         {children}
         <Modal
            isOpen={isOpen}
            title={modalTitle}
            content={modalContent}
            onClose={closeModal}
         />
      </ModalContext.Provider>
   );
};

// Создаем хук для удобного использования контекста
export const useModal = () => useContext(ModalContext);
