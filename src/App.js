import DualSelector from "./components/DualSelector";
import { useState } from "react";
import emojiMenus from "./components/data";
import './scss/App.scss';
import { HiChevronDoubleLeft } from "react-icons/hi";
import { HiChevronDoubleRight } from "react-icons/hi";
import Settings from "./components/Settings";

const App = () => {
  // titleName
  const [availableName, setAvailableName] = useState("available options");
  const [selectedName, setSelectedName] = useState("selected options");
  // available에서 검색 및 기본으로 사용하는 렌더링 값
  const [availableOptionsArr, setAvailableOptionsArr] = useState(
    emojiMenus.filter((val) => !val.visible)
  );
  // selected에서 검색 및 기본으로 사용하는 렌더링 값
  const [selectedOptionsArr, setSelectedOptionsArr] = useState(
    emojiMenus.filter((val) => val.visible)
  );

  // input에 따라 title 값 변경
  const onChangeAvailable = ({ target }) => setAvailableName(target.value);
  const onChangeSelected = ({ target }) => setSelectedName(target.value);

  return (
    <div id="App">
      <div className="center-box">
        <DualSelector
          titleName={availableName}
          optionsArr={availableOptionsArr}
        />
        <div>
          <button>
            <HiChevronDoubleRight color="#333" size="18" />
          </button>
          <button>
            <HiChevronDoubleLeft color="#333"size="18" />
          </button>
          {/* 환경설정에서 사용하는 input 태그 이벤트 예시 */}
          {/* <input onChange={onChangeAvailable} value={availableName} />
          <input onChange={onChangeSelected} value={selectedName} /> */}
        </div>
        <DualSelector titleName={selectedName} optionsArr={selectedOptionsArr} />
      </div>
      <Settings />
    </div>
  );
};

export default App;
