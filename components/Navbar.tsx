import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MyDropdown from './DropDown';



export default function Navbar() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <div className='font-chelsea border-b-2 border-blueCC z-50 lg:z-50 sm:z-50 text-center'>
            <nav className='flex lg:flex-row items-center sm:flex-wrap p-2 '>
                <Link href='/'>
                    <a className='inline-flex lg:items-center sm:items-center h-14 p-2 lg:ml-20 sm:ml-6 '>
                        <Image src='/Wikitracks_Vinyl.svg' alt='logo' className='w-8 h-8' width={80} height={80} />
        <div className='flex flex-col'>
<span className='text-xxxl text-black  font-bold uppercase tracking-wide px-2'>
                            VinylTouch 
                        </span><span className='text-sm lowercase font-medium first-letter:uppercase first-letter:text-base first-letter:font-bold'>Ayez une touche d&apos;actualité dans votre journée!!</span>

        </div>
                        
                    </a>
                </Link>
                <button
                    className=' inline-flex p-3 bg-black hover:bg-blueCC rounded lg:hidden text-white ml-auto hover:text-black outline-none'
                    onClick={handleClick}
                >
                    <svg
                        className='w-4 h-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>

                <div
                    className={`${active ? '' : 'hidden'
                        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                >
                    <div className=' lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto mr-20'>

                        <Link href='/articles'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  font-bold items-center justify-center text-black tracking-wider hover:border-b-2 hover:border-purple-500 '>
                                Articles
                            </a>
                        </Link>



                        <Link href='/bonplan'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  font-bold items-center justify-center text-black tracking-wider  hover:border-b-2 hover:border-purple-500'>
                                <div className='z-50'> Bon plan  </div>
                            </a>
                        </Link>
                        <Link href='/frenchTouch'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  font-bold items-center justify-center text-black tracking-wider  hover:border-b-2 hover:border-purple-500 '>
                                FrenchTouch
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

