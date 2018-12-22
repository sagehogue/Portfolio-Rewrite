import React from 'react';
import classes from './Layout.module.css';

// Because of where I use this component, the react transitions are breaking my app. I'll have to do some restructuring. 

const Layout = (props) => {
    return (
        <div className={classes.Layout}>
            {props.children}
        </div>
    )
}

export default Layout;