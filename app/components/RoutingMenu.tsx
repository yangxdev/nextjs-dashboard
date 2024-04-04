"use client";
import React from 'react';
import Link from 'next/link';
import { ListDashes } from '@phosphor-icons/react/dist/ssr/ListDashes';
import { ListMagnifyingGlass } from '@phosphor-icons/react/dist/ssr/ListMagnifyingGlass';
import { Faders } from '@phosphor-icons/react/dist/ssr/Faders';
import { ArrowsInSimple } from '@phosphor-icons/react/dist/ssr/ArrowsInSimple';
import { Files } from '@phosphor-icons/react/dist/ssr/Files';
import { Users } from '@phosphor-icons/react/dist/ssr/Users';
import { RocketLaunch } from '@phosphor-icons/react/dist/ssr/RocketLaunch';
import { Key } from '@phosphor-icons/react/dist/ssr/Key';
import { Gear } from '@phosphor-icons/react/dist/ssr/Gear';
import { Info } from '@phosphor-icons/react/dist/ssr/Info';

const FlexLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();

        // temporarily disabled
        // window.history.pushState({}, '', href)

        const links = document.querySelectorAll('#routingMenu a');
        links.forEach(link => link.classList.remove('active'));

        e.currentTarget.classList.add('active');

        const tabViewer = document.getElementById('TabViewer');
        if (tabViewer) {
            tabViewer.className = '';
            const className = href.replace('/', '');
            tabViewer.classList.add('tab-viewer', className);
        }
    };

    return <Link href={href}
        onClick={handleClick}
        draggable={false} className={`
        flex 
        gap-1.5 
        rounded p-2 
        ease-in-out 
        duration-100
        hover:bg-[var(--element-active-background)]
        hover:text-[var(--accent-green)]
        dark:hover:bg-[var(--dark-element-active-background)]
        dark:hover:text-[var(--dark-accent-green)]
        `}>
        {children}
    </Link>
};

const RoutingMenu = () => {
    const links = [
        { href: '/dashboard', icon: <ListDashes size={24} />, label: 'Dashboard' },
        { href: '/dns-settings', icon: <ListMagnifyingGlass size={24} />, label: 'DNS Settings' },
        { href: '/resolution-settings', icon: <Faders size={24} />, label: 'Resolution Settings' },
        { href: '/collision-management', icon: <ArrowsInSimple size={24} />, label: 'Collision Management' },
        { href: '/abuse-and-analytics', icon: <Files size={24} />, label: 'Abuse & Analytics' },
        { href: '/team', icon: <Users size={24} />, label: 'Team' },
        { href: '/plans', icon: <RocketLaunch size={24} />, label: 'Plans' },
        { href: '/api-key', icon: <Key size={24} />, label: 'API Key' },
        { href: '/settings', icon: <Gear size={24} />, label: 'Settings' },
        { href: '/support', icon: <Info size={24} />, label: 'Support' },
    ]

    return (
        <nav id='routingMenu'>
            <ul className='flex flex-col gap-0.5'>
                {links.map(({ href, icon, label }, index) => (
                    <li key={index}>
                        <FlexLink href={href}>
                            {icon}
                            <div>{label}</div>
                        </FlexLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default RoutingMenu;