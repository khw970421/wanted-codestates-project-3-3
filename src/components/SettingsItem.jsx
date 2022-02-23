import React, { useRef } from "react";

const SettingsItem = ({ title, setItems }) => {
  const check = useRef();
  const clickCheckbox = () => {
    setItems(check.current.checked);
    console.log(setItems)
  };

  return (
    <div className="setting-item">      
      <p>{title}</p>
      <div className={"switch-box"}>
        <input
          onClick={clickCheckbox}
          ref={check}
          type="checkbox"
          id="switch"
          className="switch-checkbox"
        />
        <label htmlFor="switch" className="switch-label">
          <div className="ball"></div>
        </label>
      </div>
    </div>
  );
};

export default SettingsItem;
