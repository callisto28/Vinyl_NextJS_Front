
import React from 'react';


const Layout = ({ children }) => {
    return (
        <>
            <div className="bg-scroll font-chelsea bg-background bg-cover bg-center bg-no-repeat opacity-0.2 flex flex-col justify-between text-center min-h-screen">

                {children}
            </div>
        </>
    );
};

export default Layout;