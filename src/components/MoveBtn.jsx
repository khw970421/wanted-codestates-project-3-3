import "./MoveBtn.css";
import DualSelector from "./DualSelector";
import emojiMenus from "./data";
import { useEffect, useState } from "react";

function MoveBtn() {
  const [currentTab, setCurrentTab] = useState(null);
  const selectMenuHandler = (index) => {
    console.log(index);
    setCurrentTab(index);
  };
  const [menu, setMenu] = useState(emojiMenus);
  const optionsArr = menu.filter((el) => el.visible === false);
  const saveOptionsArr = menu.filter((el) => el.visible === true);

  // 초기화
  const initialization = () => {
    // const arr = [{ name: "hello" }, { name: "world" }];
    // arr.map((el) => (el.name = "hi"));

    menu.map((obj) => (obj.name = false));
    console.log(menu);
    setMenu(menu);
  };
  return (
    <div>
      <div>
        <ul>
          {optionsArr.map((el, index) => {
            return (
              <li
                key={index}
                onClick={() => selectMenuHandler(index)}
              >{`${el.nameKo}`}</li>
            );
          })}
        </ul>
      </div>
      <div>
        <ul>
          {saveOptionsArr.map((el, index) => {
            return (
              <li
                key={index}
                onClick={() => selectMenuHandler(index)}
              >{`${el.nameKo}`}</li>
            );
          })}
        </ul>
      </div>
      <div className="MoveBtn-flex">
        <button className="MoveBtn-Button" onClick={initialization}>
          초기화
        </button>
        <button className="MoveBtn-Button">오른쪽</button>
        <button className="MoveBtn-Button">왼쪽</button>
        <button className="MoveBtn-Button">오른쪽2</button>
        <button className="MoveBtn-Button">왼쪽2</button>
      </div>
    </div>
  );
}

export default MoveBtn;
