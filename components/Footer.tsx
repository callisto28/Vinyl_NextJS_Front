import React from 'react';
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Link from 'next/link';

const Footer = () => {
    return (

        <div className='flex flex-col items-center border-t-2  border-blueCC'>
            <footer className=" flex flex-row items-top" >
                <a
                    href="https://seb4dev.works/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-black flex items-start font-chelsea text-sm hover:text-yellow-300 mr-4'
                >
                    Powered by{' '}

                </a>
                <span className=" flex items-start">
                    <Image src="/callisto.png" alt="Vercel Logo" width={80} height={50} />
                </span>
                <Link href={'../admin/login'}>
                    <ChevronDownIcon
                        className="
                             h-5 w-5 text-violet-900 hover:text-violet-100"
                        aria-hidden="true"
                    />

                </Link>
            </footer>
        </div >


    );
};

export default Footer;