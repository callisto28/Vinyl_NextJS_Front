/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Check = () => {

    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 4000);
    }, []);


    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='text-xl font-philosopher'>
            <h1>Votre message a bien été pris en compte</h1> 
            <p>nous reviendrons vers vous dans les plus brefs délais</p>               
            </div>
            <div>
            <img src="https://static.vecteezy.com/ti/vecteur-libre/p3/6126500-succes-envoyer-email-message-concept-illustration-flat-design-vector-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vectoriel.jpg"
                alt="email envoyé"
                width={180} height={180}/>
            </div>
            <div>
            <h2 className='text-base font-philosopher'> Vous allez être dirigé vers la page d&apos;accueil</h2>

            </div>
        </div>
    );
}

export default Check;