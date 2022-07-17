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
        <div className='bg-bg bg-cover bg-center h-144 flex flex-col items-center justify-around'>
            <h1 className='text-black text-7xl font-chelsea'>404 - Désolé la page demandée n&lsquo;existe pas</h1>
            <img src="https://images.pexels.com/photos/145707/pexels-photo-145707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image 404" width={550} height={550} />
            <p>Veuillez patienter vous allez être redirigé vers la page d&lsquo;accueil</p>
        </div>
    );
}
export default NotFound;