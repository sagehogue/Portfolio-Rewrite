import React from 'react';
import './Layout.module.css';

const Layout = (props) => {
    return (
        <div className="Layout">
            {props.children}
        </div>
    )
}

export default Layout;