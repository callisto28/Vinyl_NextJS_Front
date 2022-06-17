
import React from 'react';


const Layout = ({ children }) => {
    return (
        <>
            <div className="bg-scroll font-chelsea flex flex-col justify-between text-center min-h-screen">
                {children}
            </div>
        </>
    );
};

export default Layout;