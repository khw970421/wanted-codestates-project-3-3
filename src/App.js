import DualSelector from "./components/DualSelector";
import { useState } from "react";
import emojiMenus from "./components/data";
const App = () => {
  const [availableName, setAvailableName] = useState("available options");
  const [selectedName, setSelectedName] = useState("selected options");
  const [availableOptionsArr, setAvailableOptionsArr] = useState(
    emojiMenus.filter((val) => !val.visible)
  );
  const [availableSaveOptionsArr, setAvailableSaveOptionsArr] = useState(
    emojiMenus.filter((val) => !val.visible)
  );
  const [selectedOptionsArr, setSelectedOptionsArr] = useState(
    emojiMenus.filter((val) => val.visible)
  );
  const [selectedSaveOptionsArr, setSelectedSaveOptionsArr] = useState(
    emojiMenus.filter((val) => val.visible)
  );
  const onChangeAvailable = (e) => {
    setAvailableName(e.target.value);
  };

  const onChangeSelected = (e) => {
    setSelectedName(e.target.value);
  };
  const moveAllSelected = () => {
    const res = availableSaveOptionsArr.map((val) => {
      return { ...val, visible: true };
    });
    console.log(selectedOptionsArr, selectedSaveOptionsArr, res);
    setSelectedOptionsArr([...selectedSaveOptionsArr, ...res]);
    setSelectedSaveOptionsArr([...selectedSaveOptionsArr, ...res]);
    setAvailableSaveOptionsArr([]);
    setAvailableOptionsArr([]);
  };
  const moveAllAvailable = () => {
    const res = selectedSaveOptionsArr.map((val) => {
      return { ...val, visible: true };
    });
    console.log(availableOptionsArr, availableSaveOptionsArr, res);
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
      <button onClick={moveAllSelected}>selected로 모두 옮기기</button>
      <button onClick={moveAllAvailable}>available로 모두 옮기기</button>
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
