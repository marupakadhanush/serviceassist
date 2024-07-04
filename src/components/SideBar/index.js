import React, { useState } from 'react';
import Modal from '../Modal'; // Ensure correct path to Modal component
import logoImage from './image.png'; // Ensure correct path to image
import './index.css'; // Ensure CSS file for styling is imported

const Sidebar = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const openModal = (content) => {
        setShowModal(true);
        setModalContent(content);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="sidebar">
            <img src={logoImage} alt="Logo" className="sidebar-logo" />
            <button className="sidebar-button" onClick={() => openModal("Create Agent")}>
                <i className="fas fa-plus"></i> <span>Create Agent</span>
            </button>
            <button className="sidebar-button" onClick={() => openModal("My Agents")}>
                <i className="fas fa-users"></i> <span>My Agents</span>
            </button>
            <button className="sidebar-button" onClick={() => openModal("Conversations")}>
                <i className="fas fa-comments"></i> <span>Conversations</span>
            </button>
            <button className="sidebar-button" onClick={() => openModal("For Business")}>
                <i className="fas fa-briefcase"></i> <span>For Business</span>
            </button>
            <button className="sidebar-button" onClick={() => openModal("For Developers")}>
                <i className="fas fa-code"></i> <span>For Developers</span>
            </button>
            <button className="sidebar-button" onClick={() => openModal("Billing")}>
                <i className="fas fa-file-invoice-dollar"></i> <span>Billing</span>
            </button>
            <button className="sidebar-button" onClick={() => openModal("Actions")}>
                <i className="fas fa-tasks"></i> <span>Actions</span>
            </button>

            <Modal isOpen={showModal} onClose={closeModal} content={modalContent} />
            
            {/* Additional buttons with icons below */}
            <div className='sidebar-bottom'>
                <p className='sidebar-bottom-para'>Create an account for a free 30 min of conversation time</p>
                <button className='get-started-btn' onClick={() => openModal("get-started")}>Get Started</button>
                <div className='sidebar-bottom-btns'><button className='sidebar-icon-button' onClick={() => openModal("Help")}>
                    <i className="fas fa-question-circle"></i> Help
                </button>
                <button className='sidebar-icon-button' onClick={() => openModal("Settings")}>
                    <i className="fab fa-twitter"></i> 
                </button></div>
            </div>
        </div>
    );
};

export default Sidebar;
