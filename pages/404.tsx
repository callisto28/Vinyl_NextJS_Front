import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NotFound = () => {

    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    }, []);


    return (
        <div className='bg-bg bg-cover bg-center h-144 flex flex-col justify-around'>
            <h1 className='text-white text-7xl font-chelsea'>404 - Not Found</h1>
        </div>
    );
}
export default NotFound;