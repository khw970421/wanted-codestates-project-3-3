import React, { useState } from "react";
import ChangeSize from "./ChangeSize";
import InputText from "./InputText";
import SettingsItem from "./SettingsItem";
import InputRadio from "./InputRadio";
import "../scss/Settings.scss";

import { HiCog } from "react-icons/hi";

const Settings = (props) => {
  const {
    titleInput,
    setTitleInput,
    searchChecked,
    setSearchChecked,
    unitMoveChecked,
    setUnitMoveChecked,
    selectedItemsChecked,
    setSelectedItemsChecked,
    itemSizeRadio,
    setItemSizeRadio,
    screenSizeInput,
    setScreenSizeInput,
  } = props;

  const [titleChecked, settitleCheck] = useState(true);
  const [showSetting, setShowSetting] = useState(true);

  return (
    <div className="settings-wrap">
      <button
        onClick={() => {
          setShowSetting(!showSetting);
        }}
        className="settings-btn"
      >
        <HiCog color="#333" size="20" />
      </button>
      <div className="settings">
        {showSetting ? (
          <div>
            <SettingsItem
              id={"title"}
              title={"타이틀"}
              item={titleChecked}
              setItems={settitleCheck}
            />
            {titleChecked ? (
              <InputText textInput={titleInput} setTextInput={setTitleInput} />
            ) : null}
            <SettingsItem
              id={"search"}
              title={"검색"}
              item={searchChecked}
              setItems={setSearchChecked}
            />
            <SettingsItem
              id={"lift"}
              title={"하나씩만 옮기기"}
              item={unitMoveChecked}
              setItems={setUnitMoveChecked}
            />
            <SettingsItem
              id={"count"}
              title={"선택된 아이템 갯수 표시"}
              item={selectedItemsChecked}
              setItems={setSelectedItemsChecked}
            />
            <InputRadio
              title={"아이템 크기"}
              itemSizeRadio={itemSizeRadio}
              setItemSizeRadio={setItemSizeRadio}
              className="item-size-box"
            />
            <ChangeSize
              textInput={screenSizeInput}
              setTextInput={setScreenSizeInput}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Settings;
