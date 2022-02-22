import React, { useState, useEffect } from 'react';
import emojiMenus from './data';

const DualSelector = ({ options = emojiMenus }) => {
  // options는 props
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    document.addEventListener('mousedown', onBlurHandler);
    return () => {
      document.removeEventListener('mousedown', onBlurHandler);
    };
  }, []);

  const ctrlClick = (idx) => {
    console.log('ctrl');
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
    console.log('shift');

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
    console.log('normal');
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
    console.log('blur');
    if (e.target.classList[0] !== 'stop-dragging') {
      setSelectedOptions([]);
    }
  };

  return (
    <div>
      <ul>
        {options?.map((option, idx) => {
          const { id, emoji, nameKo } = option;

          return (
            <li key={id}>
              <button
                className={
                  selectedOptions.includes(idx)
                    ? 'stop-dragging gray'
                    : 'stop-dragging green'
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
