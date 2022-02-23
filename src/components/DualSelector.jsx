import React, { useState, useEffect, useRef } from "react";

const DualSelector = ({ titleName, optionsArr }) => {
  // options는 props
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [list, setList] = useState(optionsArr);
  //useRef를 통해 drag되는 아이템의 인덱스와 dragOver되는 아이템의 인덱스를 current에 저장한다.
  //드래깅 되는 아이템의 인덱스를 useRef객체의 current에 저장한다.
  const dragItem = useRef();
  // 드래깅 되어 지나가는 아이템들의 인덱스를 useRef 객체의 current에 저장한다.
  const dragOverItem = useRef();

  // 검색한 단어가 존재하는지 체크하고 이에따라 changeOptionsArr 함수 실행
  const searchValue = ({ target }) => {
    const res = optionsArr.filter(({ name }) => {
      return name.includes(target.value);
    });
    setList(res);
  };

  useEffect(() => {
    document.addEventListener("mousedown", onBlurHandler);
    return () => {
      document.removeEventListener("mousedown", onBlurHandler);
    };
  }, []);

  const ctrlClick = (idx) => {
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
    if (e.target.classList[0] !== "stop-dragging") {
      setSelectedOptions([]);
    }
  };

  const onDragStart = (e, position) => {
    dragItem.current = position;
    e.target.classList.add("grabbing");
  };
  const onDragEnter = (e, position) => {
    dragOverItem.current = position;
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    // 얕은 복사로 만든 카피 배열에서 드래깅되는 아이템을 하나 제거해주고
    copyListItems.splice(dragItem.current, 1);
    // 카피 리스트 배열에서 드레깅되는 아이템이 지나간 아이템의 인덱스에 드레그된 아이템을 추가해준다.
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    // 드래깅된 아이템의 장소를 드래그 오버된 아이템의 인덱스로 바꾸어준다.
    dragItem.current = dragOverItem.current;
    // 드래그 오버 아이템의 useRef객체의 current 값을 초기화해준다.
    dragOverItem.current = null;
    // 리스트를 새롭게 랜더링할 수 있도록 상태를 업데이트해준다.
    setList(copyListItems);
  };

  const onDragEnd = (e) => {
    e.target.classList.remove("grabbing");
  };

  return (
    <div>
      <input type="text" onChange={searchValue}></input>
      <header>{titleName}</header>
      <ul>
        {list?.map((option, idx) => {
          const { id, emoji, nameKo } = option;

          return (
            <li
              key={id}
              onDragStart={(e) => onDragStart(e, idx)}
              onDragEnter={(e) => onDragEnter(e, idx)}
              onDragOver={(e) => e.preventDefault()}
              onDragEnd={onDragEnd}
              draggable
            >
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

export default DualSelector;
