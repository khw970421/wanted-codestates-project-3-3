import React, { useEffect, useRef } from "react";
import "../scss/dualSelector.scss";

const DualSelector = ({
  title,
  optionsArr,
  unitMoveChecked,
  selectedArr,
  setSelectedArr,
  saveArr,
  searchChecked,
  selectedCheck,
  screenSizeInput,
  itemSizeRadio,
  onDragEnd,
  onDragEnter,
  onDragStart,
  onDragOver,
  id,
  onChangeSearch,
}) => {
  //useRef를 통해 drag되는 아이템의 인덱스와 dragOver되는 아이템의 인덱스를 current에 저장한다.
  //드래깅 되는 아이템의 인덱스를 useRef객체의 current에 저장한다.
  // 드래깅 되어 지나가는 아이템들의 인덱스를 useRef 객체의 current에 저장한다.
  const wrapperRef = useRef(null);

  // 검색한 단어가 존재하는지 체크하고 이에따라 changeOptionsArr 함수 실행
  const searchValue = ({ target }) => {
    const res = saveArr.filter(({ name }) => {
      return name.includes(target.value);
    });
    onChangeSearch(res);
  };

  useEffect(() => {
    document.addEventListener("mousedown", onBlurHandler);
    return () => {
      document.removeEventListener("mousedown", onBlurHandler);
    };
  }, []);

  useEffect(() => {
    wrapperRef.current.style.width = `${screenSizeInput[0]}px`;
    wrapperRef.current.style.height = `${screenSizeInput[1]}px`;
  }, [screenSizeInput]);

  const ctrlClick = (idx) => {
    //setting 하나씩만옮기기
    if (!unitMoveChecked) return;
    // 이미 클릭 되어있는 item을 클릭할 때
    if (selectedArr.includes(idx)) {
      const selected = selectedArr.filter((item) => idx !== item);
      setSelectedArr(selected);
    }
    // 클릭 되어있지 않은 item을 클릭할 때
    else {
      const selected = [...selectedArr, idx];
      setSelectedArr(selected);
    }
  };

  const shiftClick = (idx) => {
    //setting 하나씩만옮기기
    if (!unitMoveChecked) return;

    const selected = [];
    const len = selectedArr.length;
    // 클릭된게 없으면 0번 부터 있으면 가장 처음 클릭 된 것
    const start = len === 0 ? 0 : selectedArr[0];
    const end = idx;

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

    setSelectedArr(selected);
  };

  const normalClick = (idx) => {
    if (selectedArr.includes(idx)) {
      const selected = selectedArr.filter((item) => item !== idx);
      setSelectedArr(selected);
    } else {
      setSelectedArr([idx]);
    }
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
    if (
      e.target.tagName !== "SPAN" &&
      e.target.tagName !== "LI" &&
      e.target.tagName !== "BUTTON"
    ) {
      setSelectedArr([]);
    }
  };

  return (
    <div ref={wrapperRef} className="dual-selector-wrap">
      <input
        type="text"
        onChange={searchValue}
        disabled={searchChecked ? false : true}
        className="search-input"
        placeholder="search"
      />
      <div className="selector-content">
        <header>{title}</header>
        <ul className="select-list">
          {optionsArr.map((option, idx) => {
            return (
              <li
                key={idx}
                className={
                  selectedArr.includes(idx)
                    ? "stop-dragging gray"
                    : "stop-dragging white"
                }
                onClick={(e) => onClickHandler(e, idx)}
                onDragStart={(e) => onDragStart(e, idx, id)}
                onDragEnter={(e) => onDragEnter(e, idx)}
                onDragOver={onDragOver}
                onDragEnd={onDragEnd}
                draggable
              >
                <span className={itemSizeRadio}>
                  {option.emoji}&nbsp;{option.nameKo}
                </span>
              </li>
            );
          })}
        </ul>
        <div
          className={selectedCheck ? "selected-count" : "selected-count hidden"}
        >
          <p>
            {selectedArr.length} / {optionsArr.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DualSelector;
