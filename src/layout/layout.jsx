import React from 'react';
import './layout.scss'
const Layout = props => {
    const {children} = props;

    return ( 
        <>
            <div className="l-content-main">
                { children }
            </div>
        </>
     );
}
 
export default Layout;