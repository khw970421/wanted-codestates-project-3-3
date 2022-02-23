import DualSelector from "./components/DualSelector";
import { useState } from "react";
import emojiMenus from "./components/data";
import "./scss/App.scss";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { HiChevronDoubleRight } from "react-icons/hi";
import Settings from "./components/Settings";

const App = () => {
  // available에서 검색 및 기본으로 사용하는 렌더링 값
  const [availableOptionsArr, setAvailableOptionsArr] = useState(
    emojiMenus.filter((val) => !val.visible)
  );
  // selected에서 검색 및 기본으로 사용하는 렌더링 값
  const [selectedOptionsArr, setSelectedOptionsArr] = useState(
    emojiMenus.filter((val) => val.visible)
  );

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
  const [itemSizeRadio, setItemSizeRadio] = useState("S");
  const [screenSizeInput, setScreenSizeInput] = useState([171, 300]);

  return (
    <div id='App'>
      <div className='center-box'>
        <DualSelector
          title={titleInput[0]}
          optionsArr={availableOptionsArr}
          searchChecked={searchChecked}
          selectedArr={clickedAvailableArr}
          setSelectedArr={setClickedAvailableArr}
        />
        <div>
          <button>
            <HiChevronDoubleRight color='#333' size='18' />
          </button>
          <button>
            <HiChevronDoubleLeft color='#333' size='18' />
          </button>
          {/* 환경설정에서 사용하는 input 태그 이벤트 예시 */}
          {/* <input onChange={onChangeAvailable} value={availableName} />
          <input onChange={onChangeSelected} value={selectedName} /> */}
        </div>
        <DualSelector
          title={titleInput[1]}
          optionsArr={selectedOptionsArr}
          selectedArr={clickedselectedArr}
          setSelectedArr={setClickedselectedArr}
          searchChecked={searchChecked}
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
