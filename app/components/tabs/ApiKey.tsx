import React from 'react';
import { Info } from '@phosphor-icons/react/dist/ssr/Info';
import { PencilSimple } from '@phosphor-icons/react/dist/ssr/PencilSimple';
import { X } from '@phosphor-icons/react/dist/ssr/X';
import { Check } from '@phosphor-icons/react/dist/ssr/Check';

const OptionLink = ({ className, label }: { className: string, label: string }) => {
    return <div className={`${className} py-1 px-4 rounded-full 
    hover:bg-[var(--element-active-background)]
    hover:text-[var(--accent-green)]
    dark:hover:bg-[var(--dark-element-active-background)]
    dark:hover:text-[var(--dark-accent-green)]
    cursor-pointer
    ease-in-out
    duration-100
    `}>{label}</div>
}

const EditButton = () => {
    const [isModalOpen, setModalOpen] = React.useState(false);

    const handleOpenModal = () => { setModalOpen(true); console.log('open modal') };
    const handleCloseModal = () => { setModalOpen(false); console.log('close modal') };

    const Modal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
        const handleContentClick = (e: React.MouseEvent) => {
            e.stopPropagation();
        }

        return isOpen ? (
            <div onClick={onClose} className="modal flex fixed w-full h-full top-0 left-0 justify-center items-center" style={{ zIndex: 1000, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div onClick={handleContentClick} className="modal-content w-[66%] p-4 rounded-lg 
                    bg-[var(--cards-background)]
                    dark:bg-[var(--dark-cards-background)]
                    text-[var(--text-color)]
                    dark:text-[var(--dark-text-color)]
                    ">
                    <div className="pb-2">
                        <h1>Modal</h1>
                        <div className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. At eaque, ad enim quod quam aperiam temporibus ea asperiores! Cumque cum quaerat architecto libero praesentium nostrum minus accusamus laudantium possimus odit.</div>
                    </div>
                    <hr className="pb-2 opacity-10 border-black dark:opacity-20 dark:border-white"></hr>
                    <div className="flex float-right gap-5">
                        <button className='flex items-center gap-0.5
                            hover:text-[var(--accent-green)]
                            dark:hover:text-[var(--dark-accent-green)] 
                            '
                            onClick={handleCloseModal}>
                            <Check size={16} />Save
                        </button>
                        <button className='flex items-center
                            hover:text-[var(--accent-green)]
                            dark:hover:text-[var(--dark-accent-green)]
                            '
                            onClick={handleCloseModal}><X size={16} />Close
                        </button>
                    </div>
                </div>
            </div>
        ) : null;
    }

    return (
        <div className="
        text-[var(--accent-green)]
        dark:text-[var(--dark-accent-green)]
        ">
            <div className='flex items-center gap-0.5 cursor-pointer
                hover:opacity-80
                ' onClick={handleOpenModal}>
                <PencilSimple size={16} />
                Edit
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
}

const InfoEntry = ({ label, value }: { label: string, value: string }) => {
    return (
        <div className="info-label flex p-4 justify-between rounded-lg items-center 
        bg-[var(--cards-background)]
        dark:bg-[var(--dark-cards-background)]
        ">
            <div className="flex items-center gap-0.5">
                {label}<Info size={16} />
            </div>
            <div className='flex'>
                <div className="flex items-center pr-4 md:pr-8 lg:pr-32">{value}</div>
                <EditButton />
            </div>
        </div>
    );
}

const ApiKey = () => {

    const options = [
        { label: 'IP Addresses', className: 'ip-address' },
        { label: 'Quota Limit', className: 'quota-limit' },
        { label: 'Allowed Origins', className: 'allowed-origins' }
    ];

    const infoEntries = [
        { label: 'Per second request rate limit', value: '233 /ps' },
        { label: 'Per day total request', value: '60 per day' }
    ];

    return (
        <section>
            <div className="text-sm">API Key</div>
            <div className="my-4 text-lg font-semibold">&quot;thegratgastby&quot; API</div>
            <div className="options whitespace-nowrap flex gap-2 my-4 mb-6 text-xs 
            text-[var(--dark-element-active-background)]
            dark:text-[var(--dark-element-active-background)]
            ">
                {options.map((option, i) => <OptionLink key={i} {...option} />)}
            </div>
            <div className="row flex flex-col gap-1.5 text-sm">
                {infoEntries.map((entry, i) => <InfoEntry key={i} {...entry} />)}
            </div>
        </section >
    );
}

export default ApiKey;