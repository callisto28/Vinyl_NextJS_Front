import React from 'react';
import styles from '../styles/Home.module.css'
import Image from 'next/image';

const Footer = () => {
    return (

        <div className='flex justify-center'>
            <footer className={styles.footer} >
                <a
                    href="https://seb4dev.works/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/callisto.png" alt="Vercel Logo" width={80} height={50} />
                    </span>
                </a>
            </footer>
        </div >


    );
};

export default Footer;