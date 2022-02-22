import React, { useEffect, useRef } from 'react';

const ChaingeSize = ({textInput, setTextInput}) => {
  const value1 = useRef()
  const value2 = useRef()

  useEffect(()=>{
    if(textInput) {
      value1.current.value = textInput[0]
      value2.current.value = textInput[1]
    }
  },[textInput])

  const focusOut = () => {
    const arr1 = value1.current.value
    const arr2 = value2.current.value
    setTextInput([arr1, arr2])
  }

  return (
    <div>
      <div>
        <label htmlFor="">가로</label>
        <input onBlur={focusOut} ref={value1} type="text" />
        <span>px</span>
      </div>
      <div>
        <label htmlFor="">세로</label>
        <input onBlur={focusOut} ref={value2} type="text" />
        <span>px</span>
      </div>
    </div>
  );
};

export default ChaingeSize;