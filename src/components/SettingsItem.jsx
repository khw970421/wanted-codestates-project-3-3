import React, { useRef } from "react";

const SettingsItem = ({ item, items, setItems }) => {
  const title = item.title;
  const check = useRef();
  const clickCheckbox = () => {
    console.log(check.current.checked);
    const copy = [...items];
    setItems(copy);
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
