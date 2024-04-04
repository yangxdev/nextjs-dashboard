"use client";
import { useEffect, useState } from "react";

const TabViewer = () => {
    const [className, setClassName] = useState('');
    const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);

    useEffect(() => {
        const tabViewer = document.getElementById('TabViewer');

        if (tabViewer) {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.attributeName === 'class') {
                        setClassName(tabViewer.className);
                    }
                });
            });

            observer.observe(tabViewer, { attributes: true });

            return () => observer.disconnect();
        }
    }, []);

    useEffect(() => {
        let tabName = className.split(' ')[1];
        if (!tabName) return;
        let tabNameSplit = tabName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1));
        let tabNameCapitalized = tabNameSplit.join('');
        console.log('tab has been changed to: ', tabNameCapitalized);

        if (tabName) {
            import(`./tabs/${tabNameCapitalized}`)
                .then(module => setComponent(() => module.default))
                .catch(err => console.error(err));
        }
    }, [className]);

    return (
        <div className="" id="TabViewer">
            {Component ? <Component /> : ``}
        </div>
    );
}

export default TabViewer;
