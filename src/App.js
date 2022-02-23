import DualSelector from "./components/DualSelector";
import { useState } from "react";
import emojiMenus from "./components/data";
import "./scss/App.scss";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { HiChevronDoubleRight } from "react-icons/hi";
import Settings from "./components/Settings";
import MoveBtn from "./components/MoveBtn";

const App = () => {
  // titleName
  const [availableName, setAvailableName] = useState("available options");
  const [selectedName, setSelectedName] = useState("selected options");
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

  // input에 따라 title 값 변경
  const onChangeAvailable = ({ target }) => setAvailableName(target.value);
  const onChangeSelected = ({ target }) => setSelectedName(target.value);

  // Settings
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

  return (
    <div id="App">
      <div className="center-box">
        <DualSelector
          titleName={availableName}
          optionsArr={availableOptionsArr}
          selectedArr={clickedAvailableArr}
          setSelectedArr={setClickedAvailableArr}
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
          titleName={selectedName}
          optionsArr={selectedOptionsArr}
          selectedArr={clickedselectedArr}
          setSelectedArr={setClickedselectedArr}
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
