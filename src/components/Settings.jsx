import React, { useState } from "react";
import ChaingeSize from "./ChaingeSize";
import InputText from "./InputText";
import SettingsItem from "./SettingsItem";
import InputRadio from './InputRadio'
import '../scss/Settings.scss';
import { HiCog } from "react-icons/hi";

const Settings = (props) => {
  const {
    titleInput,
    setTitleInput,
    setSearchChecked,
    setUnitMoveChecked,
    setSelectedItemsChecked,
    itemSizeRadio,
    setItemSizeRadio,
    screenSizeInput,
    setScreenSizeInput
  } = props

  const [titleChecked, settitleCheck] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  return (
    <div className="settings-wrap">
      <button onClick={()=>{setShowSetting(!showSetting)}} className="settings-btn">
        <HiCog color="#333" size="20" />
      </button>
      <div className="settings">
        {
          showSetting
          ?<div>
                <SettingsItem title={'타이틀'} setItems={settitleCheck} />
              {
                titleChecked
                ?<InputText textInput={titleInput} setTextInput={setTitleInput} />
                :null
              }
              <SettingsItem title={'검색'} setItems={setSearchChecked} />
              <SettingsItem title={'하나씩만 옮기기'} setItems={setUnitMoveChecked} />
              <SettingsItem title={'선택된 아이템 갯수 표시'} setItems={setSelectedItemsChecked} />
              <InputRadio
                title={"아이템 크기"}
                itemSizeRadio={itemSizeRadio}
                setItemSizeRadio={setItemSizeRadio}
                className="item-size-box"
              />
              <ChaingeSize
                textInput={screenSizeInput}
                setTextInput={setScreenSizeInput}                
              />
            </div> 
          : null
        }
      </div>
    </div>
  );
};

export default Settings;
