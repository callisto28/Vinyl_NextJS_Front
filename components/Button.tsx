import Link from 'next/link';
import React from 'react';

const Button = ({ textButton, link, linkPl }) => {
    return (
        <Link href={link} as={linkPl} passHref>
            <button className='rounded-full hover:bg-blue-700  text-white bg-blueCC text-center px-4 py-1 font-philosophe font-medium transition-color duration-100 delay-10 animate-bounce-in-left mb-5' type='submit'>
                {textButton}
            </button></Link>
    );
};

export default Button;