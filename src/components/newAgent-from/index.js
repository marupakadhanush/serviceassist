import React from 'react';
import './index.css';

const NewAgentForm = () => {
  return (
    <div className="new-agent-form">
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Give your AI a name..." />
        </div>
        <div className="form-group">
          <label>Voice</label>
          <select>
            <option value="aaliyah">Aaliyah</option>
          </select>
          <button type="button">Create a voice clone</button>
        </div>
        <div className="form-group">
          <label>Avatar</label>
          <button type="button">Upload Image</button>
        </div>
        <div className="form-group">
          <label>Privacy</label>
          <select>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default NewAgentForm;
