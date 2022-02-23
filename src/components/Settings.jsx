import React, { useState } from "react";
import SettingsItem from "./SettingsItem";
import InputRadio from "./InputRadio";

const Settings = () => {

  const [itemSizeRadio, setItemSizeRadio] = useState("S");

  return (
    <div className="settings">
      <InputRadio title='아이템크기' itemSizeRadio={itemSizeRadio} setItemSizeRadio={setItemSizeRadio} />
    </div>
  );
};

export default Settings;
