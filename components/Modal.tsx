
import React from 'react';

const Modal = ({ setShowModal, setChoice, contentA, contentB, contentC, contentD, contentE, contentF, url }) => {


    const handleCancelClick = () => {
        setChoice(false)
        setShowModal(false)
    }

    return (

        <div className=" fixed opacity-100 inset-0 z-50   ">

            <div className="flex lg:h-screen  lg:justify-center lg:items-center sm:h-auto sm:justify-center sm:items-center sm:text-xs ">

                <div className="flex-col justify-center  bg-white py-8 px-8 border-4 border-blueCC rounded-xl ">


                    <div className="">
                        <div className="">
                            <span className="inline-block py-1 px-2 rounded bg-blue-50 text-blue-500 text-xs font-medium tracking-widest">Dans le détail</span>
                            <p className="leading-relaxed mb-8">{contentA}.</p>
                            <p className="leading-relaxed mb-8">{contentC}.</p>
                            <p className="leading-relaxed mb-8">{contentB}.</p>
                            <p className="leading-relaxed mb-8">{contentD}.</p>
                            <p className="leading-relaxed mb-8">{contentE}.</p>
                            <p className="leading-relaxed mb-8">{contentF}.</p>
                            <button className=' rounded py-2 my-2 bg-blueCC text-white hover:bg-blue-800 px-3'>
                                <a href={url}
                                    target="_blank" rel="noreferrer"
                                >
                                    Consulter</a>

                            </button>

                            <button onClick={handleCancelClick} className=" rounded px-4 py-2 my-2 text-white  bg-green-400 ">Close</button>
                        </div>


                    </div>

                </div>
            </div>
        </div>

    );
}

export default Modal
