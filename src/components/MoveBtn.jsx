import "./MoveBtn.css";
import _ from "lodash";

function MoveBtn({
  emojiMenus,
  availableSaveOptionsArr,
  selectedSaveOptionsArr,
  setSelectedOptionsArr,
  setAvailableOptionsArr,
  setSelectedSaveOptionsArr,
  setAvailableSaveOptionsArr,
  target,
  setTarget,
}) {
  // 초기화
  const initialization = () => {
    const availableOptionsArr = emojiMenus.filter((val) => !val.visible);
    const selectedOptionsArr = emojiMenus.filter((val) => val.visible);
    setAvailableOptionsArr(availableOptionsArr);
    setAvailableSaveOptionsArr(availableOptionsArr);
    setSelectedOptionsArr(selectedOptionsArr);
    setSelectedSaveOptionsArr(selectedOptionsArr);
  };

  // 모두 selected로 옮김
  const moveAllSelected = () => {
    const res = availableSaveOptionsArr.map((val) => {
      return { ...val, visible: true };
    });
    // selectedOptionsArr : 기본으로 사용하는 렌더링 값
    setSelectedOptionsArr([...selectedSaveOptionsArr, ...res]);
    setSelectedSaveOptionsArr([...selectedSaveOptionsArr, ...res]);
    setAvailableOptionsArr([]);
    setAvailableSaveOptionsArr([]);
  };

  // 모두 available로 옮김
  const moveAllAvailable = () => {
    const res = selectedSaveOptionsArr.map((val) => {
      return { ...val, visible: false };
    });

    // availableOptionsArr : 기본으로 사용하는 렌더링 값
    setAvailableOptionsArr([...availableSaveOptionsArr, ...res]);
    setAvailableSaveOptionsArr([...availableSaveOptionsArr, ...res]);
    setSelectedOptionsArr([]);
    setSelectedSaveOptionsArr([]);
  };

  // 선택한 것을 selected로 옮기기
  const moveSelected = () => {
    const res = target.map((val) => {
      return { ...val, visible: true };
    });
    let arr = [...availableSaveOptionsArr];
    arr.filter((el) => {
      for (let obj of target) {
        console.log(el);
        console.log(obj);
        return el.name !== obj.name;
      }
    });
    console.log(arr);
    // setAvailableOptionsArr([]);
    // setAvailableSaveOptionsArr([]);
    setSelectedOptionsArr([...selectedSaveOptionsArr, ...res]);
    setSelectedSaveOptionsArr([...selectedSaveOptionsArr, ...res]);
    setTarget([]);
  };

  // 선택한 것을 available로 옮기기
  const moveAvailable = () => {
    const res = target.map((val) => {
      return { ...val, visible: false };
    });

    setAvailableOptionsArr([...availableSaveOptionsArr, ...res]);
    setAvailableSaveOptionsArr([...availableSaveOptionsArr, ...res]);
    setTarget([]);
  };
  return (
    <div>
      <button onClick={initialization}>초기화</button>
      <button onClick={moveAllSelected}>selected로 모두 옮기기</button>
      <button onClick={moveAllAvailable}>available로 모두 옮기기</button>
      <button onClick={moveSelected}>selected로 선택한 것 옮기기</button>
      <button onClick={moveAvailable}>available로 선택한 것 옮기기</button>
    </div>
  );
}

export default MoveBtn;
