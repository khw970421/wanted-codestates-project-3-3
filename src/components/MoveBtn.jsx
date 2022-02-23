import "./MoveBtn.css";
import _ from "lodash";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { HiChevronDoubleRight } from "react-icons/hi";
import emojiMenus from "./data";
import { useState } from "react";

function MoveBtn({
  availableOptionsArr,
  selectedOptionsArr,
  setAvailableOptionsArr,
  setSelectedOptionsArr,
  clickedAvailableArr,
  clickedselectedArr,
  setClickedAvailableArr,
  setClickedselectedArr,
}) {
  // 초기화
  const initialize = () => {
    setAvailableOptionsArr(emojiMenus.filter((val) => !val.visible));
    setSelectedOptionsArr(emojiMenus.filter((val) => val.visible));
  };

  // selected options로 전체이동
  const allSelected = () => {
    // selected 로 전체 목록이 이동
    const res = availableOptionsArr.map((el) => {
      return { ...el, visible: true };
    });
    setAvailableOptionsArr([]); // 왼쪽
    setSelectedOptionsArr([...selectedOptionsArr, ...res]); // 오른쪽

    console.log(availableOptionsArr);
    console.log(selectedOptionsArr);
  };

  // available options로 전체이동
  const allAvailable = () => {
    const res = selectedOptionsArr.map((el) => {
      return { ...el, visible: false };
    });
    setSelectedOptionsArr([]);
    setAvailableOptionsArr([...availableOptionsArr, ...res]);
  };

  // selected option로 지정이동

  const Selected = () => {
    console.log(clickedAvailableArr); // index를 포함한 배열 [];
    console.log(clickedselectedArr);

    for (let index of clickedAvailableArr) {
      console.log("반복문 시작");
      setSelectedOptionsArr([
        ...selectedOptionsArr,
        availableOptionsArr[index],
      ]);
    }
  };

  // available options로 지정이동
  const Available = () => {};
  return (
    <div>
      <button onClick={initialize}>초기화</button>
      <button onClick={allAvailable}>
        <HiChevronDoubleLeft color="#333" size="18" />
      </button>
      <button onClick={allSelected}>
        <HiChevronDoubleRight color="#333" size="18" />
      </button>

      {/* 환경설정에서 사용하는 input 태그 이벤트 예시 */}
      {/* <input onChange={onChangeAvailable} value={availableName} />
          <input onChange={onChangeSelected} value={selectedName} /> */}
      <button onClick={Available}>왼쪽</button>
      <button onClick={Selected}>오른쪽</button>
    </div>
  );
}

export default MoveBtn;
