import Link from 'next/link';
import React from 'react';

const Button = ({ textButton, link, linkPl }) => {
    return (
        <Link href={link} as={linkPl} passHref>
            <button className='rounded-full hover:text-white bg-blueCC text-center px-4 py-1 font-philosophe font-medium transition-color duration-700 delay-200 animate-bounce-in-left mb-5' type='submit'>
                {textButton}
            </button></Link>
    );
};

export default Button;