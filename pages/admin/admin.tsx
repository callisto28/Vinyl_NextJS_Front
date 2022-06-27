import React from 'react';
import ArticleInput from '../../components/ArticleInput';
import DeskInput from '../../components/DeskInput';
import MaterialInput from '../../components/MaterialInput';
import VinylInput from '../../components/VinylInput';
import { useAuth } from '../../context/authContext';
import Login from './login';




const Admin = () => {

    // const { signIn } = useAuth();

    return (
        <>


            <div className="flex lg:flex-row lg:justify-evenly sm:flex-wrap sm:items-center sm:content-evenly w-full">

                <div className='flex lg:flex-row lg:justify-evenly sm:flex-wrap sm:justify-center sm:content-evenly'>
                    <h1 className="text-2xl font-semibold text-gray-200 pb-2">Ajout d&apos;article</h1>
                    <div className='bg-gray-200 shadow-md border border-red-400 rounded-lg
                w-auto
                dark:bg-gray-800
                dark:border-gray-700
                dark:text-white
                flex sm:justify-center '>
                        <ArticleInput />
                    </div>
                </div>

                <div className='flex lg:flex-row lg:justify-evenly sm:flex-wrap sm:justify-center sm:content-evenly'>
                    <div className='flex flex-col text-center justify-center'>
                        <h1 className="text-2xl font-semibold text-gray-200 pb-2">Ajout nouveau vinyl</h1>
                        <div className="bg-gray-200 shadow-md border border-red-400 rounded-lg w-auto dark:bg-gray-800 dark:border-gray-700 " >
                            <VinylInput />
                        </div>
                    </div>
                    <div className='flex flex-col text-center justify-center'>
                        <h1 className="text-2xl font-semibold text-gray-200 pb-2">Ajout Materiel </h1>
                        <div className="bg-gray-200 shadow-md border border-red-400 rounded-lg w-auto dark:bg-gray-800 dark:border-gray-700 " >
                            <MaterialInput />
                        </div>
                    </div>
                    <div className='flex flex-col text-center justify-center'>
                        <h1 className="text-2xl font-semibold text-gray-200 pb-2">Ajout nouveau Meubles</h1>
                        <div className="bg-gray-200 shadow-md border border-red-400 rounded-lg w-auto dark:bg-gray-800 dark:border-gray-700 " >
                            <DeskInput />
                        </div>
                    </div>
                </div>


            </div>

        </>

    );
};

export default Admin;

//MSN Messenger