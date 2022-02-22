
import { useState } from "react";

const DualSelector = ({ titleName,optionsArr,saveOptionsArr,changeOptionsArr }) => {
  
  const [checkedItemCount,setCheckedItemCount] = useState(0)

  const checkValue = ({ target }) => {
    const res = saveOptionsArr.filter(({ name }) => {
      return name.includes(target.value);
    });
    changeOptionsArr(res);
  };
  const selectTarget = (e)=>{
    console.log(e.target)
  }
  return (
    <div>
      <input type="text" onChange={checkValue}></input>
      <header>{titleName}</header>
      <ul>
        {optionsArr.map((val, idx) => (
          <li key={idx} onClick={selectTarget}>{`${val.emoji} ${val.name}`}</li>
        ))}
      </ul>
      <div>{checkedItemCount}/{optionsArr.length}</div>
    </div>
  );
};

export default DualSelector;
