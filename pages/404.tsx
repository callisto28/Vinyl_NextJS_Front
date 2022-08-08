/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
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
        <>
        <Head>
                <title>Page non trouvée</title>
                <meta name="description" content="Il y a une erreur dans votre recherche, la pages n'a pas été trouvé, vous allez être redirigé vers l'accueil" />
                <meta property="og:title" content="La page que vous recherchez n'existe pas " />
                <meta property="og:description" content="Il y a une erreur dans votre recherche, la pages n'a pas été trouvé, vous allez être redirigé vers l'accueil" />
                <meta property="og:image" content="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <meta property="og:url" content="https://vinyltouch.fr/404" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="vinylTouch" />
                <meta property="og:locale" content="fr_FR" />
                <meta property="og:locale:alternate" content="en_US" />

        </Head>
        <div className='bg-bg bg-cover bg-center h-144 flex flex-col items-center justify-around'>
            <h1 className='text-black text-7xl font-chelsea'>404 - Désolé la page demandée n&lsquo;existe pas</h1>
            <img src="https://images.pexels.com/photos/145707/pexels-photo-145707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image 404" width={550} height={550} />
            <p>Veuillez patienter vous allez être redirigé vers la page d&lsquo;accueil</p>
        </div>
        </>
    );
}
export default NotFound;