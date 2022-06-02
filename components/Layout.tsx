import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <>
            <div className="bg-scroll font-chelsea bg-background bg-cover bg-center bg-no-repeat opacity-0.2 flex flex-col justify-between text-center min-h-screen">
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    );
};

export default Layout;