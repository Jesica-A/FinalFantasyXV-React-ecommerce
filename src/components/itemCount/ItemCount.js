import * as React from 'react';
import './itemCount.scss'


export default function itemCount({ counter, onAdd }) {
    return (
        <div className="cantidad">
            <button className="less" onClick={() => onAdd('remove')}> - </button>
            <span className='number'>
                {counter}
            </span>
            <button className="more" onClick={() => onAdd('add')}> + </button>
        </div>
    )
}


