import React from 'react';

const itemSize = ['XS', 'S', 'M']

const InputRadio = ({ title, itemSizeRadio, setItemSizeRadio }) => {

  const handleChange = (e) => {
    setItemSizeRadio(e.target.value);
  }

  return (
    <div className="setting-item">
      <p>{title}</p>
      {itemSize.map((size, index) => (
        <div key={index}>
          <label htmlFor="item-size">
            {size}
            <input
              type="radio"
              value={size}
              name='size'
              onChange={handleChange}
              checked={itemSizeRadio === size}
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default InputRadio;