import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.css';

const SidebarCreateAgent = () => {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);

  const handleClick = (path) => {
    setSelected(path);
  };

  return (
    <div className="sidebar-createAgent">
      <Link to="/create-agent" onClick={() => handleClick("/create-agent")}>
        <button className={selected === "/create-agent" ? "selected" : ""}>
          <i className="fas fa-id-card"></i> Identity {selected === "/create-agent" && <span className="checkmark">✔</span>}
        </button>
      </Link>
      <Link to="/behavior" onClick={() => handleClick("/behavior")}>
        <button className={selected === "/behavior" ? "selected" : ""}>
          <i className="fas fa-behavior"></i> Behavior {selected === "/behavior" && <span className="checkmark">✔</span>}
        </button>
      </Link>
      <Link to="/knowledge" onClick={() => handleClick("/knowledge")}>
        <button className={selected === "/knowledge" ? "selected" : ""}>
          <i className="fas fa-book"></i> Knowledge {selected === "/knowledge" && <span className="checkmark">✔</span>}
        </button>
      </Link>
      <Link to="/actions" onClick={() => handleClick("/actions")}>
        <button className={selected === "/actions" ? "selected" : ""}>
          <i className="fas fa-tasks"></i> Actions {selected === "/actions" && <span className="checkmark">✔</span>}
        </button>
      </Link>
      <Link to="/deploy" onClick={() => handleClick("/deploy")}>
        <button className={selected === "/deploy" ? "selected" : ""}>
          <i className="fas fa-rocket"></i> Deploy {selected === "/deploy" && <span className="checkmark">✔</span>}
        </button>
      </Link>
    </div>
  );
};

export default SidebarCreateAgent;
