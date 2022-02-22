import React, { useRef } from "react";

const SettingsItem = ({ title, setItems }) => {
  const check = useRef();
  const clickCheckbox = () => {
    setItems(check.current.checked);
  };

  return (
    <div className="change-title">
      <div>
        <p>{title}</p>
        <div>
          <input
            onClick={clickCheckbox}
            ref={check}
            type="checkbox"
            id="switch"
          />
          <label htmlFor="switch"></label>
        </div>
      </div>
    </div>
  );
};

export default SettingsItem;
