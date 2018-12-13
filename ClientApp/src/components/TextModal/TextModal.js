import React from 'react';

import './TextModal.module.css';

const TextModal = (props) => {
    return (
        <div className='TextModal'>
            {props.title? <h3>{props.title}</h3> : null}
            {props.title? <hr /> : null}
            {props.children}
        </div>
    )
}

export default TextModal;