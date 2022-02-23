import React, { useState } from "react";
import SettingsItem from "./SettingsItem";
import './scss/Settings.scss';

const items = [
  {
    title: "타이틀",
    inputType: "checkbox",
  },
  {
    title: "타이틀input",
    inputType: "text",
  },
  {
    title: "검색",
    inputType: "checkbox",
  },
  {
    title: "하나씩만 옮기기",
    inputType: "checkbox",
  },
  {
    title: "선택된 아이템 갯수 표시",
    inputType: "checkbox",
  },
  {
    title: "타이틀",
    inputType: "radio",
  },
  {
    title: "타이틀",
    inputType: "text",
  },
];
const Settings = () => {
  const [titleChecked, settitleCheck] = useState(false);
  const [titleInput, setTitleInput] = useState([
    "available options",
    "selected options",
  ]);
  const [searchChecked, setSearchChecked] = useState(false);
  const [unitMoveChecked, setUnitMoveChecked] = useState(false);
  const [selectedItemsChecked, setSelectedItemsChecked] = useState(false);
  const [itemSizeRadio, setItemSizeRadio] = useState("s");
  const [screenSizeInput, setScreenSizeInput] = useState([171, 300]);

  return (
    <div className="settings">
      {items.map((item, index) => (
        <SettingsItem key={index} item={item} items={items} />
      ))}
    </div>
  );
};

export default Settings;
