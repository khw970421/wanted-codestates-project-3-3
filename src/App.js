import DualSelector from "./components/DualSelector";
import { useState, useRef } from "react";
import emojiMenus from "./components/data";
import "./scss/App.scss";
import Settings from "./components/Settings";
import MoveBtn from "./components/MoveBtn";

const App = () => {
  // available에서 검색 및 기본으로 사용하는 렌더링 값
  const [availableOptionsArr, setAvailableOptionsArr] = useState(
    emojiMenus.filter((val) => !val.visible)
  );
  const [availableSaveOptionsArr, setAvailableSaveOptionsArr] = useState(
    emojiMenus.filter((val) => !val.visible)
  );
  // selected에서 검색 및 기본으로 사용하는 렌더링 값
  const [selectedOptionsArr, setSelectedOptionsArr] = useState(
    emojiMenus.filter((val) => val.visible)
  );
  const [selectedSaveOptionsArr, setSelectedSaveOptionsArr] = useState(
    emojiMenus.filter((val) => val.visible)
  );

  // 왼쪽,오른쪽
  const [clickedAvailableArr, setClickedAvailableArr] = useState([]);
  const [clickedselectedArr, setClickedselectedArr] = useState([]);

  // Settings
  const [titleInput, setTitleInput] = useState([
    "available options",
    "selected options",
  ]);
  const [searchChecked, setSearchChecked] = useState(true);
  const [unitMoveChecked, setUnitMoveChecked] = useState(true);
  const [selectedItemsChecked, setSelectedItemsChecked] = useState(true);

  const [itemSizeRadio, setItemSizeRadio] = useState("XS");
  const [screenSizeInput, setScreenSizeInput] = useState([200, 300]);
  const [draggingSectionId, setDraggingSectionId] = useState(null);

  const draggingItemIndex = useRef(null);
  const draggingOverItemIndex = useRef(null);

  const onDragStart = (e, index, id) => {
    draggingItemIndex.current = index;
    e.target.classList.add("grabbing");
    setDraggingSectionId(id);
    setClickedAvailableArr([]);
    setClickedselectedArr([]);
  };

  const onAvailableItemDragEnter = (e, index) => {
    if (draggingSectionId === "availableSelector") {
      draggingOverItemIndex.current = index;
      const copyListItems = [...availableOptionsArr];
      const dragItemContent = copyListItems[draggingItemIndex.current];
      // 얕은 복사로 만든 카피 배열에서 드래깅되는 아이템을 하나 제거해주고
      copyListItems.splice(draggingItemIndex.current, 1);
      // 카피 리스트 배열에서 드레깅되는 아이템이 지나간 아이템의 인덱스에 드레그된 아이템을 추가해준다.
      copyListItems.splice(draggingOverItemIndex.current, 0, dragItemContent);
      // 드래깅된 아이템의 장소를 드래그 오버된 아이템의 인덱스로 바꾸어준다.
      draggingItemIndex.current = draggingOverItemIndex.current;
      // 드래그 오버 아이템의 useRef객체의 current 값을 초기화해준다.
      draggingOverItemIndex.current = null;
      // 리스트를 새롭게 랜더링할 수 있도록 상태를 업데이트해준다.
      setAvailableOptionsArr(copyListItems);
    }
  };

  const onSelectedItemDragEnter = (e, index) => {
    if (draggingSectionId === "selectedItemSelector") {
      draggingOverItemIndex.current = index;
      const copyListItems = [...selectedOptionsArr];
      const dragItemContent = copyListItems[draggingItemIndex.current];
      // 얕은 복사로 만든 카피 배열에서 드래깅되는 아이템을 하나 제거해주고
      copyListItems.splice(draggingItemIndex.current, 1);
      // 카피 리스트 배열에서 드레깅되는 아이템이 지나간 아이템의 인덱스에 드레그된 아이템을 추가해준다.
      copyListItems.splice(draggingOverItemIndex.current, 0, dragItemContent);
      // 드래깅된 아이템의 장소를 드래그 오버된 아이템의 인덱스로 바꾸어준다.
      draggingItemIndex.current = draggingOverItemIndex.current;
      // 드래그 오버 아이템의 useRef객체의 current 값을 초기화해준다.
      draggingOverItemIndex.current = null;
      // 리스트를 새롭게 랜더링할 수 있도록 상태를 업데이트해준다.
      setSelectedOptionsArr(copyListItems);
    }
  };

  const onDragEnd = (e) => {
    e.target.classList.remove("grabbing");
    setDraggingSectionId(null);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onChangeAvailableSearch = (res) => {
    console.log(res);
    setAvailableOptionsArr(res);
  };
  const onChangeSelectedSearch = (res) => {
    console.log(res);
    setSelectedOptionsArr(res);
  };
  return (
    <div id="App">
      <div className="center-box">
        <DualSelector
          title={titleInput[0]}
          optionsArr={availableOptionsArr}
          searchChecked={searchChecked}
          selectedArr={clickedAvailableArr}
          setSelectedArr={setClickedAvailableArr}
          saveArr={availableSaveOptionsArr}
          selectedCheck={selectedItemsChecked}
          screenSizeInput={screenSizeInput}
          itemSizeRadio={itemSizeRadio}
          onDragStart={onDragStart}
          onDragEnter={onAvailableItemDragEnter}
          onDragOver={onDragOver}
          onDragEnd={onDragEnd}
          id="availableSelector"
          onChangeSearch={onChangeAvailableSearch}
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
          availableSaveOptionsArr={availableSaveOptionsArr}
          setAvailableSaveOptionsArr={setAvailableSaveOptionsArr}
          selectedSaveOptionsArr={selectedSaveOptionsArr}
          setSelectedSaveOptionsArr={setSelectedSaveOptionsArr}
        />

        <DualSelector
          title={titleInput[1]}
          optionsArr={selectedOptionsArr}
          selectedArr={clickedselectedArr}
          setSelectedArr={setClickedselectedArr}
          saveArr={selectedSaveOptionsArr}
          searchChecked={searchChecked}
          selectedCheck={selectedItemsChecked}
          screenSizeInput={screenSizeInput}
          itemSizeRadio={itemSizeRadio}
          onDragStart={onDragStart}
          onDragEnter={onSelectedItemDragEnter}
          onDragOver={onDragOver}
          onDragEnd={onDragEnd}
          id="selectedItemSelector"
          onChangeSearch={onChangeSelectedSearch}
        />
      </div>
      <Settings
        titleInput={titleInput}
        setTitleInput={setTitleInput}
        searchChecked={searchChecked}
        setSearchChecked={setSearchChecked}
        unitMoveChecked={unitMoveChecked}
        setUnitMoveChecked={setUnitMoveChecked}
        selectedItemsChecked={selectedItemsChecked}
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
