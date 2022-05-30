import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className='flex flex-row justify-center h-max'>
            {children}
        </div>
    );
};

export default Layout;