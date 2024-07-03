import React from 'react';
import logoImage from './image.png'; // Import the image file
import './index.css'; // Make sure to create a CSS file for styling

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src={logoImage} alt="Logo" className="sidebar-logo" /> {/* Use imported image */}
            <button>
                <i className="fas fa-plus"></i> <span>Create Agent</span>
            </button>
            <button>
                <i className="fas fa-users"></i> <span>My Agents</span>
            </button>
            <button>
                <i className="fas fa-comments"></i> <span>Conversations</span>
            </button>
            <button>
                <i className="fas fa-briefcase"></i> <span>For Business</span>
            </button>
            <button>
                <i className="fas fa-code"></i> <span>For Developers</span>
            </button>
            <button>
                <i className="fas fa-file-invoice-dollar"></i> <span>Billing</span>
            </button>
            <button>
                <i className="fas fa-tasks"></i> <span>Actions</span>
            </button>
        </div>
    );
};

export default Sidebar;
