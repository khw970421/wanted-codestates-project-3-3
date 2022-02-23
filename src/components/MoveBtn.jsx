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
  };

  // available options로 전체이동
  const allAvailable = () => {
    const res = selectedOptionsArr.map((el) => {
      return { ...el, visible: false };
    });
    setSelectedOptionsArr([]);
    setAvailableOptionsArr([...availableOptionsArr, ...res]);
  };

  // selected options로 지정이동

  const Selected = () => {
    const arr = [];

    for (let index of clickedAvailableArr) {
      arr.push(availableOptionsArr[index]);
    }

    const res = arr.map((el) => {
      return { ...el, visible: true };
    });
    let arr2 = availableOptionsArr.filter(
      (el, index) => !clickedAvailableArr.includes(index)
    );
    setAvailableOptionsArr([...arr2]); // 왼쪽
    setSelectedOptionsArr([...selectedOptionsArr, ...res]); // 오른쪽 부분

    // 선택해제 => 빈배열
    setClickedAvailableArr([]);
  };

  // available options로 지정이동
  const Available = () => {
    const arr = [];
    for (let index of clickedselectedArr) {
      console.log("반복문 시작");
      arr.push(selectedOptionsArr[index]);
    }
    let arr2 = selectedOptionsArr.filter(
      (el, index) => !clickedselectedArr.includes(index)
    );
    const res = arr.map((el) => {
      return { ...el, visible: false };
    });
    setAvailableOptionsArr([...availableOptionsArr, ...res]);
    setSelectedOptionsArr([...arr2]);
    // 선택해제 => 빈배열
    setClickedselectedArr([]);
  };
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
