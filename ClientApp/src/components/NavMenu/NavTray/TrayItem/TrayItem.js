import React from 'react';

import './TrayItem.module.css';

const trayItem = (props) => {
    return (
        <div className='TrayItem'>
            {props.children}
        </div>
    )
}

export default trayItem;