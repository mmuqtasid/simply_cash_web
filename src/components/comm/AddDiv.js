import React, { useState } from 'react';

const AddDiv= () => {
  const [itemList, setItemList] = useState([]);

  const handleAddDiv = () => {
    const newItemKey = itemList.length + 1;
   
    setItemList(prevList => [{ key: newItemKey }, ...prevList]);
  };

  const handleRemoveDiv = (keyToRemove) => {
    setItemList(prevList => prevList.filter(item => item.key !== keyToRemove));
  };

  return (
    <div>
      <button onClick={handleAddDiv}>
        Add Div
      </button>
      
      <div>
        {itemList.map(item => (
          <div key={item.key} style={{ border: '1px solid black', padding: '10px', margin: '5px' }}>
            Div {item.key}
            <span
              style={{ marginLeft: '10px', cursor: 'pointer', fontWeight: 'bold' }}
              onClick={() => handleRemoveDiv(item.key)}
            >
              &#10006; 
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddDiv;
