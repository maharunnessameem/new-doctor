import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    return isOpen ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
            <div className="bg-white p-6 rounded-lg shadow-md z-10">
                {children}
                <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                    Close
                </button>
            </div>
        </div>
    ) : null;
};

export default Modal;