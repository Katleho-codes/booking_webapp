// External imports
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useState } from "react";
// Custom imports

import logo from "../../../public/mmlogo.png";
import toast from "react-hot-toast";





const Sidebar = () => {
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    };
    const router = useRouter()
    const [subMenuOpen, setSubMenuOpen] = useState(false);




    return (
        <>
            <nav className="p-2 navbar">
                <button
                    role="button"
                    id="burger_menu"
                    className="border-0 outline-none bg-transparent"
                    aria-label="burger_menu"
                    onClick={ToggleSidebar}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        className="fill-gray-900"
                    >
                        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
                    </svg>
                </button>
            </nav>

            <aside
                className={`sidebar ${isOpen === true ? "active" : ""
                    }`}
            >
                <div className="sd-header">
                    <Link
                        className="logo overflow-hidden p-1"
                        href="/"
                    >
                        <Image
                            src={logo}
                            alt="allelectronics logo"
                            priority={true}
                            placeholder="blur"
                            style={{ objectFit: "cover", width: "70%", height: "auto" }}
                        />
                    </Link>
                    <button
                        role="button"
                        id="close_button"
                        className="btn close_button"
                        onClick={ToggleSidebar}
                        aria-label="close button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="dark:fill-grey-600"
                        >
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                            <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                    </button>
                </div>
                <div className="sd-body">
                    <button
                        className={`open-submenu-btn  text-white font-semibold px-3 py-2 rounded-md bg-[#082f49] w-full flex flex-row justify-between items-center`}
                        onClick={() => setSubMenuOpen(!subMenuOpen)}
                    >
                        <span>Tickets</span>
                        <span>
                            {!subMenuOpen ? (
                                <ChevronDownIcon className="h-6 w-6 text-white" />
                            ) : (
                                <ChevronUpIcon className="h-6 w-6 text-white " />
                            )}
                        </span>
                    </button>
                    {subMenuOpen && (
                        <ul className="">
                            <li>
                                <Link
                                    href={"/tickets/hhp"}
                                    className={`sd-link`}
                                >
                                    HHP
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/tickets/dtv_ha"}
                                    className={`sd-link`}
                                >
                                    DTV/HA
                                </Link>
                            </li>
                        </ul>
                    )}




                </div>


            </aside>
            <div
                className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
                onClick={ToggleSidebar}
            ></div>
        </>
    );
};

export default Sidebar;
