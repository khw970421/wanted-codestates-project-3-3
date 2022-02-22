import emojiMenus from "./data";
import { useState } from "react";

const DualSelector = ({ titleName, isSelectedComponent }) => {
  const [optionsArr, setOptionsArr] = useState(
    emojiMenus.filter((val) => isSelectedComponent === val.visible)
  );
  const [saveOptionsArr, setSaveOptionsArr] = useState(
    emojiMenus.filter((val) => isSelectedComponent === val.visible)
  );

  const checkValue = ({ target }) => {
    const res = saveOptionsArr.filter(({ name }) => {
      return name.includes(target.value);
    });
    setOptionsArr(res);
  };
  return (
    <div>
      <input type="text" onChange={checkValue}></input>
      <header>{titleName}</header>
      <ul>
        {optionsArr.map((val, idx) => (
          <li key={idx}>{`${val.emoji} ${val.name}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default DualSelector;
