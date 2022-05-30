import React from 'react';
import ArticleInput from '../../components/ArticleInput';
import PlanInput from '../../components/PlanInput';
import styles from '../../styles/Home.module.css'

const admin = () => {
    return (
        <div className="flex flex-row items-center px-12 h-screen w-screen ">

            <div className='flex flex-wrap text-center justify-around  w-3/6 h-2/4'>
                <div className='bg-gray-200 shadow-md border border-red-400 rounded-lg w-auto dark:bg-gray-800 dark:border-gray-700 '>
                    <ArticleInput />
                </div>
            </div>
            <div className='flex flex-wrap text-center justify-around w-3/6 h-2/4'>
                <div className="bg-gray-200 shadow-md border border-red-400 rounded-lg w-auto dark:bg-gray-800 dark:border-gray-700 " >
                    <PlanInput />
                </div>
            </div>


        </div>



    );
};

export default admin;

//MSN Messenger