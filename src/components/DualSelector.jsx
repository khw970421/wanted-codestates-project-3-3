import { useState, useRef } from 'react';
import './DualSelector.css';

const DualSelector = ({
  titleName,
  optionsArr,
  saveOptionsArr,
  changeOptionsArr,
}) => {
  const [checkedItemCount, setCheckedItemCount] = useState(0);
  const [list, setList] = useState(optionsArr);
  //useRef를 통해 drag되는 아이템의 인덱스와 dragOver되는 아이템의 인덱스를 current에 저장한다.
  //드래깅 되는 아이템의 인덱스를 useRef객체의 current에 저장한다.
  const dragItem = useRef();
  // 드래깅 되어 지나가는 아이템들의 인덱스를 useRef 객체의 current에 저장한다.
  const dragOverItem = useRef();

  const onDragStart = (e, position) => {
    dragItem.current = position;
    e.target.classList.add('grabbing');
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
  }

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
  return (
    <div>
      <input type="text" onChange={searchValue}></input>
      <header>{titleName}</header>
      <ul>
        {list.map((val, idx) => {
          return (
            <li
              key={idx}
              onClick={selectTarget}
              onDragStart={(e) => onDragStart(e, idx)}
              onDragEnter={(e) => onDragEnter(e, idx)}
              onDragOver={(e) => e.preventDefault()}
              onDragEnd={onDragEnd}
              draggable
            >{`${val.emoji} ${val.name}`}</li>
          );
        })}
      </ul>
      <div>
        {checkedItemCount}/{optionsArr.length}
      </div>
    </div>
  );
};

export default DualSelector;
