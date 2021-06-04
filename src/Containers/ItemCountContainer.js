import React, { useState } from 'react'
import ItemCount from '../Components/ItemCount/ItemCount'

export default function ItemCountContainer({ min, max, handleClick}) {
    const [counter, setCounter] = useState(0);

    const onAdd = (action) => {
        if ((action === 'remove') && (counter > min)) {
            setCounter(counter - 1);
            handleClick(counter - 1);
        } else if ((action === 'add') && (counter < max)) {
            setCounter(counter + 1);
            handleClick(counter + 1);
        }
    }
    return (
        <ItemCount counter={counter} onAdd={onAdd} />
    )
}

