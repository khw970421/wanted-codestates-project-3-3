import DualSelector from "./components/DualSelector";
import { useState } from "react";
import emojiMenus from "./components/data";
import "./scss/App.scss";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { HiChevronDoubleRight } from "react-icons/hi";
import Settings from "./components/Settings";

import MoveBtn from "./components/MoveBtn";


const App = () => {
  // available에서 검색 및 기본으로 사용하는 렌더링 값
  const [availableOptionsArr, setAvailableOptionsArr] = useState(
    emojiMenus.filter((val) => !val.visible)
  );
  // selected에서 검색 및 기본으로 사용하는 렌더링 값
  const [selectedOptionsArr, setSelectedOptionsArr] = useState(
    emojiMenus.filter((val) => val.visible)
  );

  // 왼쪽,오른쪽
  const [clickedAvailableArr, setClickedAvailableArr] = useState([]);
  const [clickedselectedArr, setClickedselectedArr] = useState([]);

  // Settings
  const [titleChecked, settitleCheck] = useState(true);
  const [titleInput, setTitleInput] = useState([
    "available options",
    "selected options",
  ]);
  const [searchChecked, setSearchChecked] = useState(false);
  const [unitMoveChecked, setUnitMoveChecked] = useState(false);
  const [selectedItemsChecked, setSelectedItemsChecked] = useState(false);

  const [itemSizeRadio, setItemSizeRadio] = useState("XS");
  const [screenSizeInput, setScreenSizeInput] = useState([200, 300]);


  return (
    <div id="App">
      <div className="center-box">
        <DualSelector
          title={titleInput[0]}
          optionsArr={availableOptionsArr}
          searchChecked={searchChecked}
          selectedArr={clickedAvailableArr}
          setSelectedArr={setClickedAvailableArr}
          selectedCheck={selectedItemsChecked}
          screenSizeInput={screenSizeInput}
          itemSizeRadio={itemSizeRadio}
        />

        <MoveBtn
          availableOptionsArr={availableOptionsArr}
          selectedOptionsArr={selectedOptionsArr}
          setAvailableOptionsArr={setAvailableOptionsArr}
          setSelectedOptionsArr={setSelectedOptionsArr}
          clickedAvailableArr={clickedAvailableArr}
          clickedselectedArr={clickedselectedArr}
          setClickedAvailableArr={setClickedAvailableArr}
          setClickedselectedArr={setClickedselectedArr}
        />


        <DualSelector
          title={titleInput[1]}
          optionsArr={selectedOptionsArr}
          selectedArr={clickedselectedArr}
          setSelectedArr={setClickedselectedArr}
          searchChecked={searchChecked}
          selectedCheck={selectedItemsChecked}
          screenSizeInput={screenSizeInput}
          itemSizeRadio={itemSizeRadio}
        />
      </div>
      <Settings
        titleInput={titleInput}
        setTitleInput={setTitleInput}
        setSearchChecked={setSearchChecked}
        setUnitMoveChecked={setUnitMoveChecked}
        setSelectedItemsChecked={setSelectedItemsChecked}
        itemSizeRadio={itemSizeRadio}
        setItemSizeRadio={setItemSizeRadio}
        screenSizeInput={screenSizeInput}
        setScreenSizeInput={setScreenSizeInput}
      />
    </div>
  );
};

export default App;
