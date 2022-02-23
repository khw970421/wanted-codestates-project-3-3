import React, { useRef } from "react";

const SettingsItem = ({ title, setItems }) => {
  const check = useRef();
  const clickCheckbox = () => {
    setItems(check.current.checked);
  };

  return (
    <div className="setting-item">      
      <p>{title}</p>
      <div>
        <input
          onClick={clickCheckbox}
          ref={check}
          type="checkbox"
          id="switch"
        />
        <label htmlFor="switch">
          <div></div>
        </label>
      </div>
    </div>
  );
};

export default SettingsItem;
