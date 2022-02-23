import DualSelector from "./components/DualSelector";
import { useState } from "react";
import emojiMenus from "./components/data";
import './App.css'
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

  // 전체 items 옮기는 핸들러
  const moveAllSelected = () => {
    const res = availableSaveOptionsArr.map((val) => {
      return { ...val, visible: true };
    });
    setSelectedOptionsArr([...selectedSaveOptionsArr, ...res]);
    setSelectedSaveOptionsArr([...selectedSaveOptionsArr, ...res]);
    setAvailableSaveOptionsArr([]);
    setAvailableOptionsArr([]);
  };
  const moveAllAvailable = () => {
    const res = selectedSaveOptionsArr.map((val) => {
      return { ...val, visible: true };
    });
    setAvailableOptionsArr([...availableSaveOptionsArr, ...res]);
    setAvailableSaveOptionsArr([...availableSaveOptionsArr, ...res]);
    setSelectedOptionsArr([]);
    setSelectedSaveOptionsArr([]);
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
      />
      {/* 버튼 태그에서 전체 옮기기 버튼 예시 */}
      <button onClick={moveAllSelected}>selected로 모두 옮기기</button>
      <button onClick={moveAllAvailable}>available로 모두 옮기기</button>
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
      />
    </>
  );
};

export default App;
