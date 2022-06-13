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
        <div className='font-chelsea'>
            <nav className='flex items-center flex-wrap  p-2 '>
                <Link href='/'>
                    <a className='inline-flex items-center p-2 mr-4 '>
                        <Image src='/Wikitracks_Vinyl.svg' alt='logo' className='w-8 h-8' width={60} height={60} />

                        <span className='text-3xl text-white  font-bold uppercase tracking-wide px-2'>
                            VinylTouch
                        </span>
                    </a>
                </Link>
                <button
                    className=' inline-flex p-3 hover:bg-black rounded lg:hidden text-white ml-auto hover:text-white outline-none'
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
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                        <Link href='/accueil'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  font-bold items-center justify-center text-white tracking-wider [text-shadow:1px_0px_1px_#000] hover:border-b-2 hover:border-purple-500  '>
                                Accueil
                            </a>
                        </Link>
                        <Link href='/articles'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  font-bold items-center justify-center text-white tracking-wider [text-shadow:1px_0px_1px_#000] hover:border-b-2 hover:border-purple-500 '>
                                Articles
                            </a>
                        </Link>



                        <Link href='/bonplan'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  font-bold items-center justify-center text-white tracking-wider [text-shadow:1px_0px_1px_#000] hover:border-b-2 hover:border-purple-500'>
                                <div> <MyDropdown />  </div>
                            </a>
                        </Link>
                        <Link href='/frenchTouch'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  font-bold items-center justify-center text-white tracking-wider [text-shadow:1px_0px_1px_#000] hover:border-b-2 hover:border-purple-500 '>
                                FrenchTouch
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

