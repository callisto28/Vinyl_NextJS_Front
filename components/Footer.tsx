import React from 'react';
import styles from '../styles/Home.module.css'
import Image from 'next/image';

const Footer = () => {
    return (

        <div className='flex flex-col items-center border-t-2 pt-2'>
            <footer className=" flex flex-row items-top" >
                <a
                    href="https://seb4dev.works/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-white font-chelsea text-sm hover:text-yellow-300'
                >
                    Powered by{' '}

                </a><span className="">
                    <Image src="/callisto.png" alt="Vercel Logo" width={80} height={50} />
                </span>
            </footer>
        </div >


    );
};

export default Footer;