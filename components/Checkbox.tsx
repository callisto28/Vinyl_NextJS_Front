import React from "react";
import { Menu, RadioGroup, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";

export function MyLink(props) {
    let { href, children, ...rest } = props;
    return (
        <Link href={href}>
            <a {...rest}>{children}</a>
        </Link>
    );
}



const Checkbox = ({ label, id }) => {
    const [selected, setSelected] = useState(false);
    





    return (
        <>
            <RadioGroup value={selected} onChange={setSelected} className={"flex flex-col lg:items-start sm:items-center "} >
                <RadioGroup.Label className={"text-xl underline flex items-start "}>
                    Sélection d&apos;une rubrique :
                </RadioGroup.Label>
                <RadioGroup value={selected} onChange={setSelected} className={"flex lg:flex-col sm:flex-row lg:items-start sm:items-center underline underline-offset-2  "}>
                    <RadioGroup.Option value="tous" >
                        {({ active }) => (

                            <button
                                className={`${active ? 'bg-black text-white' : 'text-blueCC'
                                    } group flex w-full items-center rounded-md px-1 py-1 text-sm`}
                            >
                                {active ? (
                                    <MoveInactiveIcon
                                        className="mr-2 h-5 w-5"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <MoveActiveIcon
                                        className="mr-2 h-5 w-5"
                                        aria-hidden="true"
                                    />
                                )}
                                <MyLink href="../bonplan" className={`${active} text-sm underline underline-offset-2`}>Tous</MyLink>
                            </button>
                        )}

                    </RadioGroup.Option>
                    <RadioGroup.Option value="Vinyle">
                        {({ active }) => (
                            <button
                                className={`${active ? 'bg-black text-white' : 'text-blueCC'
                                    }  group flex w-full items-center rounded-md px-1 py-1 text-sm`}
                            >
                                {active ? (
                                    <EditActiveIcon
                                        className="mr-2 h-4 w-4"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <EditInactiveIcon
                                        className="mr-2 h-4 w-4"
                                        aria-hidden="true"
                                    />
                                )}
                                <MyLink href="../vinyls" className={`${active} text-sm underline underline-offset-2 pl-1 `}>Vinyle</MyLink>
                            </button>
                        )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value="Hifi">
                        {({ active }) => (
                            <button
                                className={`${active ? 'bg-black text-white' : 'text-blueCC'
                                    } group flex w-full items-center rounded-md px-1 py-1 text-sm`}
                            >
                                {active ? (
                                    <DuplicateActiveIcon
                                        className="mr-1 h-5 w-5"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <DuplicateInactiveIcon
                                        className="mr-1 h-5 w-5"
                                        aria-hidden="true"
                                    />
                                )}
                                <MyLink href="../hifi" className={`${active} text-sm underline underline-offset-2 pl-1   `}>Hifi</MyLink>
                            </button>
                        )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value="Rqngements">
                        {({ active }) => (

                            <button
                                className={`${active ? 'bg-black text-white' : 'text-blueCC'
                                    } group flex w-full items-center rounded-md px-1 py-1 text-sm`}
                            >
                                {active ? (
                                    <ArchiveActiveIcon
                                        className="mr-1 h-5 w-5"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    <ArchiveInactiveIcon
                                        className="mr-1 h-5 w-5"
                                        aria-hidden="true"
                                    />
                                )}
                                <MyLink href="../rangements" className={`${active} text-sm underline underline-offset-2 pl-1 `}>Rangements et accessoires</MyLink>
                            </button>
                        )}

                    </RadioGroup.Option>

                </RadioGroup>
            </RadioGroup>

        </>
   
    );
};

function EditInactiveIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3
                .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3
                .895-3 2s1.343 2 3 2 3-.895 3-2V3z"
                fill="#EDE9FE"
                stroke="#46A3E7"
                strokeWidth="2"
            />
        </svg>
    );
}

function EditActiveIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3
                 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3
                 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"
                fill="#46A3E7"
                stroke="#fff"
                strokeWidth="1"
            />
        </svg>
    );
}

function DuplicateInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 4H12V12H4V4Z"
                fill="#EDE9FE"
                stroke="#46A3E7"
                strokeWidth="2"
            />
            <path d="M8 8H16V16H8V8Z" fill="#46A3E7" stroke="#fff" strokeWidth="2" />
        </svg>
    );
}

function DuplicateActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 4H12V12H4V4Z"
                fill="#EDE9FE"
                stroke="#46A3E7"
                strokeWidth="2"
            />
            <path d="M8 8H16V16H8V8Z" fill="#46A3E7" stroke="#fff" strokeWidth="2" />
        </svg>
    );
}

function ArchiveInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="8"
                width="10"
                height="8"
                fill="#EDE9FE"
                stroke="#46A3E7"
                strokeWidth="2"
            />
            <rect
                x="4"
                y="4"
                width="12"
                height="4"
                fill="#46A3E7"
                stroke="#fff"
                strokeWidth="2"
            />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    );
}

function ArchiveActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="8"
                width="10"
                height="8"
                fill="#EDE9FE"
                stroke="#46A3E7"
                strokeWidth="2"
            />
            <rect
                x="4"
                y="4"
                width="12"
                height="8"
                fill="#46A3E7"
                stroke="#fff"
                strokeWidth="2"
            />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    );
}

function MoveInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 4H16V10" stroke="#46A3E7" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#46A3E7" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#46A3E7" strokeWidth="2" />
        </svg>
    );
}

function MoveActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 4H16V10" stroke="#46A3E7" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#46A3E7" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#46A3E7" strokeWidth="2" />
        </svg>
    );
}

function DeleteInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    );
}

function DeleteActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    );
}

export default Checkbox;
