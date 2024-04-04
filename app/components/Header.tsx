"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import logoDark from '../../assets/nextjs-icon-dark.svg';
import logoLight from '../../assets/nextjs-icon-light.svg';
import { Moon } from "@phosphor-icons/react/dist/ssr/Moon";
import { Sun } from "@phosphor-icons/react/dist/ssr/Sun";

const Header = () => {

    const [darkMode, setDarkMode] = React.useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    }

    useEffect(() => {
        document.documentElement.classList.toggle('dark', !darkMode);
    }, [darkMode]);

    return (
        <header className='flex justify-between'>
            <Image className='cursor-pointer hover:scale-110 transform transition-transform duration-300' draggable={false} src={!darkMode ? logoDark : logoLight} alt="TC Logo" width="24" />
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" onChange={toggleDarkMode} checked={darkMode} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none 
                    peer-focus:ring-0 
                    rounded-full 
                    peer 
                    dark:bg-[var(--dark-text-color)]
                    peer-checked:after:translate-x-[18.5px] 
                    rtl:peer-checked:after:-translate-x-full 
                    peer-checked:after:border-white 
                    after:content-[''] 
                    after:absolute 
                    after:top-[5px] 
                    after:start-[5.5px] 
                    dark:after:bg-[#1D1D1B]
                    after:bg-[#F3F4F6]
                    after:border-none
                    after:rounded-full 
                    after:h-3.5
                    after:w-3.5
                    after:transition-all 
                    dark:border-none 
                    // peer-checked:bg-[#1D1D1B]
                    peer-checked:bg-[var(--text-color)]"
                >
                </div>
                <span className="ms-3 text-sm font-medium dark:text-gray-300">
                    {darkMode
                        ? <Sun size={24} />
                        : <Moon size={24} />
                    }
                </span>
            </label>
        </header>
    );
}

export default Header;
