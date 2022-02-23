import React, { useState } from "react";
import ChaingeSize from "./ChaingeSize";
import InputText from "./InputText";
import SettingsItem from "./SettingsItem";
import InputRadio from './InputRadio'
import '../scss/Settings.scss';

const Settings = () => {
  const [titleChecked, settitleCheck] = useState(true);
  const [titleInput, setTitleInput] = useState([
    "available options",
    "selected options",
  ]);
  const [searchChecked, setSearchChecked] = useState(false);
  const [unitMoveChecked, setUnitMoveChecked] = useState(false);
  const [selectedItemsChecked, setSelectedItemsChecked] = useState(false);
  const [itemSizeRadio, setItemSizeRadio] = useState("S");
  const [screenSizeInput, setScreenSizeInput] = useState([171, 300]);


  console.log(titleChecked, titleInput, searchChecked, unitMoveChecked, selectedItemsChecked, itemSizeRadio, screenSizeInput);

  const [showSetting, setShowSetting] = useState(false)
  return (
    <div className="settings">
      <button onClick={()=>{setShowSetting(!showSetting)}}>설정</button>
      <div>
        {
          showSetting
          ?<>
              <SettingsItem title={'타이틀'} setItems={settitleCheck} />
              <InputText textInput={titleInput} setTextInput={setTitleInput} />
              <SettingsItem title={'검색'} setItems={setSearchChecked} />
              <SettingsItem title={'하나씩만 옮기기'} setItems={setUnitMoveChecked} />
              <SettingsItem title={'선택된 아이템 갯수 표시'} setItems={setSelectedItemsChecked} />
              <InputRadio title={"아이템 크기"} itemSizeRadio={itemSizeRadio} setItemSizeRadio={setItemSizeRadio}/>
              <ChaingeSize textInput={screenSizeInput} setTextInput={setScreenSizeInput} />
            </> 
          : null
        }
      </div>
    </div>
  );
};

export default Settings;
