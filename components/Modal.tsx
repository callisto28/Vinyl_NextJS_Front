import React from 'react';

const Modal = ({ setModalOn, setChoice, contentA, contentB, contentC, contentD, contentE, contentF, url }) => {

    const handleOKClick = () => {
        setChoice(true)
        setModalOn(false)
    }
    const handleCancelClick = () => {
        setChoice(false)
        setModalOn(false)
    }

    return (

        <div className="   bg-zinc-200 opacity-100 fixed inset-0 z-50   ">

            <div className="flex h-screen justify-center items-center ">

                <div className="flex-col justify-center  bg-white py-8 px-8 border-4 border-sky-500 rounded-xl ">


                    <div className="flex">
                        <div className="p-12  flex flex-col items-center">
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
