import React, { useState } from "react";
import './ItemCount.scss';

const ItemCount = ({min, max, onAdd}) => {
  const [counter, SetCounter] = useState(1);

  const more = () => {
      let increase = counter + 1; 
      if(counter < max) {
        SetCounter(increase);
        onAdd(increase);
      } 
  };
  
  const less = () => {
      let decrease = counter - 1;
      if(counter > min) {
        SetCounter(decrease);
        onAdd(decrease);
      }
  };
  
   return (
      <div className="cantidad">
        <a className="less" onClick={less}> - </a>
        <input type="number" value={counter} />
        <a className="more" onClick={more}> + </a>
      </div>
   );
}
export default ItemCount;
