import logo from "./logo.svg";
import "./App.css";
import MoveBtn from "./components/MoveBtn";
import DualSelector from "./components/DualSelector";
import { useState } from "react";
import emojiMenus from "./components/data";
const App = () => {
  // titleName
  const [availableName, setAvailableName] = useState("available options");
  const [selectedName, setSelectedName] = useState("selected options");
  // available에서 검색 및 기본으로 사용하는 렌더링 값
  const [availableOptionsArr, setAvailableOptionsArr] = useState(
    emojiMenus.filter((val) => !val.visible)
  );
  // available에서 검색으로 삭제된(filter) 기존의 값을 저장하는 값
  const [availableSaveOptionsArr, setAvailableSaveOptionsArr] = useState(
    emojiMenus.filter((val) => !val.visible)
  );
  // selected에서 검색 및 기본으로 사용하는 렌더링 값
  const [selectedOptionsArr, setSelectedOptionsArr] = useState(
    emojiMenus.filter((val) => val.visible)
  );
  // selected에서 검색으로 삭제된(filter) 기존의 값을 저장하는 값
  const [selectedSaveOptionsArr, setSelectedSaveOptionsArr] = useState(
    emojiMenus.filter((val) => val.visible)
  );

  // input에 따라 title 값 변경
  const onChangeAvailable = ({ target }) => setAvailableName(target.value);
  const onChangeSelected = ({ target }) => setSelectedName(target.value);

  const [target, setTarget] = useState([]);
  const selectTarget = (e) => {
    let selectedOne = "";
    for (let i = 3; i < e.target.textContent.length; i++) {
      selectedOne += e.target.textContent[i];
    }
    let filtered = emojiMenus.filter((el) => el.name === selectedOne);

    setTarget([...target, ...filtered]);
    console.log(target);
  };

  return (
    <>
      <DualSelector
        titleName={availableName}
        optionsArr={availableOptionsArr}
        saveOptionsArr={availableSaveOptionsArr}
        changeOptionsArr={(res) => {
          setAvailableOptionsArr(res);
        }}
        selectTarget={selectTarget}
      />
      <MoveBtn
        emojiMenus={emojiMenus}
        availableSaveOptionsArr={availableSaveOptionsArr}
        selectedSaveOptionsArr={selectedSaveOptionsArr}
        setSelectedOptionsArr={setSelectedOptionsArr}
        setAvailableOptionsArr={setAvailableOptionsArr}
        setSelectedSaveOptionsArr={setSelectedSaveOptionsArr}
        setAvailableSaveOptionsArr={setAvailableSaveOptionsArr}
        availableOptionsArr={availableOptionsArr}
        selectedOptionsArr={selectedOptionsArr}
        target={target}
        setTarget={setTarget}
      />
      {/* 버튼 태그에서 전체 옮기기 버튼 예시 */}

      {/* 환경설정에서 사용하는 input 태그 이벤트 예시 */}
      <input onChange={onChangeAvailable} value={availableName} />
      <input onChange={onChangeSelected} value={selectedName} />
      <DualSelector
        titleName={selectedName}
        optionsArr={selectedOptionsArr}
        saveOptionsArr={selectedSaveOptionsArr}
        changeOptionsArr={(res) => {
          setSelectedOptionsArr(res);
        }}
        selectTarget={selectTarget}
      />
    </>
  );
};

export default App;
