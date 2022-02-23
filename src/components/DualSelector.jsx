import React, { useState, useEffect } from "react";
import emojiMenus from "./data";

const DualSelector = ({ titleName,
  optionsArr,
  saveOptionsArr,
  changeOptionsArr, }) => {
  // options는 props
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [checkedItemCount, setCheckedItemCount] = useState(0);

  // 검색한 단어가 존재하는지 체크하고 이에따라 changeOptionsArr 함수 실행
  const searchValue = ({ target }) => {
    const res = saveOptionsArr.filter(({ name }) => {
      return name.includes(target.value);
    });
    changeOptionsArr(res);
  };

  // Todo : 선택된 태그를 감지하는 핸들러로 선택된 것에 대한 체크 처리 필요
  const selectTarget = (e) => {
    console.log(e.target);
  };
  useEffect(() => {
    document.addEventListener("mousedown", onBlurHandler);
    return () => {
      document.removeEventListener("mousedown", onBlurHandler);
    };
  }, []);

  const ctrlClick = (idx) => {
    console.log("ctrl");
    // 이미 클릭 되어있는 item을 클릭할 때
    if (selectedOptions.includes(idx)) {
      const selected = selectedOptions.filter((item) => idx !== item);

      setSelectedOptions(selected);
    }
    // 클릭 되어있지 않은 item을 클릭할 때
    else {
      const selected = [...selectedOptions, idx];

      setSelectedOptions(selected);
    }
  };

  const shiftClick = (idx) => {
    console.log("shift");

    const len = selectedOptions.length;
    // 클릭된게 없으면 0번 부터 있으면 가장 처음 클릭 된 것
    const start = len === 0 ? 0 : selectedOptions[0];
    const end = idx;
    const selected = [];

    // 수정의 여지가 있음
    // start가 작을 땐 오름차순, 클 때는 내림차순
    if (start < end) {
      for (let sel = start; sel <= end; sel++) {
        selected.push(sel);
      }
    } else {
      for (let sel = start; sel >= end; sel--) {
        selected.push(sel);
      }
    }

    setSelectedOptions(selected);
  };

  const normalClick = (idx) => {
    console.log("normal");
    setSelectedOptions([idx]);
  };

  const onClickHandler = (e, idx) => {
    // ctrl 또는 command를 누르고 클릭 했을 때
    if (e.ctrlKey || e.metaKey) {
      ctrlClick(idx);
    }
    // shift를 누르고 클릭 했을 때
    else if (e.shiftKey) {
      shiftClick(idx);
    }
    // 그냥 클릭 했을 때
    else {
      normalClick(idx);
    }
  };

  const onBlurHandler = (e) => {
    console.log("blur");
    if (e.target.classList[0] !== "stop-dragging") {
      setSelectedOptions([]);
    }
  };

  return (
    <div>
      <ul>
        {optionsArr?.map((option, idx) => {
          const { id, emoji, nameKo } = option;

          return (
            <li key={id}>
              <button
                className={
                  selectedOptions.includes(idx)
                    ? "stop-dragging gray"
                    : "stop-dragging green"
                }
                onClick={(e) => onClickHandler(e, idx)}
              >
                {emoji}&nbsp;{nameKo}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};


export default DualSelector